/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
/* tslint:disable */

import {
  FinishReason,
  GenerateContentConfig,
  GenerateContentParameters,
  GoogleGenAI,
  Part,
} from '@google/genai';
import {
  ANALYZE_DOCUMENT_PROMPT,
  ANALYZE_VIDEO_PROMPT,
  CODE_REGION_CLOSER,
  CODE_REGION_OPENER,
  GENERATE_RPG_FROM_TEXT_PROMPT,
  GENERATE_RPG_PROMPT,
  IS_NARRATIVE_FROM_TEXT_PROMPT,
  IS_NARRATIVE_PROMPT,
  SPEC_ADDENDUM,
  SPEC_FROM_VIDEO_PROMPT,
} from './prompts';
import {parseHTML, parseJSON} from './parse';

const API_KEY = process.env.API_KEY;

interface FileInput {
  mimeType: string;
  data: string; // base64 encoded string
}

interface GenerateOptions {
  prompt: string;
  videoUrl?: string;
  fileInput?: FileInput;
  temperature?: number;
}

/**
 * A generic function to call the Gemini API.
 * @param options - Configuration for the API call.
 * @returns The raw text response from the API.
 */
async function callGemini(options: GenerateOptions): Promise<string> {
  const {prompt, videoUrl, fileInput, temperature = 0.75} = options;

  if (!API_KEY) {
    throw new Error('API_KEY environment variable is missing or empty');
  }

  const ai = new GoogleGenAI({apiKey: API_KEY});

  const parts: Part[] = [{text: prompt}];

  if (videoUrl) {
    try {
      parts.push({
        fileData: {
          mimeType: 'video/mp4',
          fileUri: videoUrl,
        },
      });
    } catch (error) {
      console.error('Error processing video input:', error);
      throw new Error(`Failed to process video input from URL: ${videoUrl}`);
    }
  }

  if (fileInput) {
    parts.push({
      inlineData: fileInput,
    });
  }

  const generationConfig: GenerateContentConfig = {
    temperature,
  };

  const request: GenerateContentParameters = {
    model: 'gemini-2.5-flash',
    contents: {parts},
    config: generationConfig,
  };

  try {
    const response = await ai.models.generateContent(request);

    if (
      !response.candidates ||
      response.candidates.length === 0 ||
      !response.text
    ) {
      const blockReason = response.promptFeedback?.blockReason;
      const finishReason = response.candidates?.[0]?.finishReason;
      if (blockReason) {
        throw new Error(
          `Content generation failed: Prompt blocked (reason: ${blockReason})`,
        );
      }
      if (finishReason && finishReason !== FinishReason.STOP) {
        throw new Error(
          `Content generation failed: Stopped due to ${finishReason}.`,
        );
      }
      throw new Error('Content generation failed: No candidates returned.');
    }

    return response.text;
  } catch (error) {
    console.error(
      'An error occurred during Gemini API call or response processing:',
      error,
    );
    throw error;
  }
}

// --- Video Analysis ---
export async function generateVideoAnalysis(
  videoUrl: string,
): Promise<{assumedKnowledge: string[]; learningGoal: string}> {
  const responseText = await callGemini({
    prompt: ANALYZE_VIDEO_PROMPT,
    videoUrl,
  });
  return parseJSON(responseText);
}

// --- PDF/Document Analysis ---
export async function generatePdfAnalysis(
  fileInput: FileInput,
): Promise<{assumedKnowledge: string[]; learningGoal: string}> {
  const responseText = await callGemini({
    prompt: ANALYZE_DOCUMENT_PROMPT,
    fileInput,
  });
  return parseJSON(responseText);
}

// --- Narrative Checks ---
export async function generateNarrativeCheck(
  videoUrl: string,
): Promise<{isNarrative: boolean}> {
  const responseText = await callGemini({
    prompt: IS_NARRATIVE_PROMPT,
    videoUrl,
  });
  return parseJSON(responseText);
}

export async function generateNarrativeCheckFromFile(
  fileInput: FileInput,
): Promise<{isNarrative: boolean}> {
  const responseText = await callGemini({
    prompt: IS_NARRATIVE_PROMPT,
    fileInput,
  });
  return parseJSON(responseText);
}

export async function generateNarrativeCheckFromText(
  text: string,
): Promise<{isNarrative: boolean}> {
  const responseText = await callGemini({
    prompt: `${IS_NARRATIVE_FROM_TEXT_PROMPT}\n\nTopic:\n${text}`,
  });
  return parseJSON(responseText);
}

// --- RPG Generation ---
export async function generateRPGData(
  analysis: {assumedKnowledge: string[]; learningGoal: string},
  videoUrl: string,
): Promise<any> {
  const prompt = GENERATE_RPG_PROMPT.replace(
    '{assumedKnowledge}',
    JSON.stringify(analysis.assumedKnowledge),
  ).replace('{learningGoal}', analysis.learningGoal);

  const responseText = await callGemini({prompt, videoUrl});
  return parseJSON(responseText);
}

export async function generateRPGDataFromFile(
  analysis: {assumedKnowledge: string[]; learningGoal: string},
  fileInput: FileInput,
): Promise<any> {
  const prompt = GENERATE_RPG_PROMPT.replace(
    '{assumedKnowledge}',
    JSON.stringify(analysis.assumedKnowledge),
  ).replace('{learningGoal}', analysis.learningGoal);

  const responseText = await callGemini({prompt, fileInput});
  return parseJSON(responseText);
}

export async function generateRPGDataFromText(
  analysis: {assumedKnowledge: string[]; learningGoal: string},
): Promise<any> {
  const prompt = GENERATE_RPG_FROM_TEXT_PROMPT.replace(
    '{assumedKnowledge}',
    JSON.stringify(analysis.assumedKnowledge),
  ).replace('{learningGoal}', analysis.learningGoal);

  const responseText = await callGemini({prompt});
  return parseJSON(responseText);
}

// --- Web App Generation (Fallback) ---
async function generateSpecFromVideo(videoUrl: string, customPrompt?: string): Promise<string> {
  const response = await callGemini({
    prompt: customPrompt || SPEC_FROM_VIDEO_PROMPT,
    videoUrl,
  });
  let spec = parseJSON(response).spec;
  spec += SPEC_ADDENDUM;
  return spec;
}

async function generateCodeFromSpec(spec: string): Promise<string> {
  const response = await callGemini({prompt: spec});
  return parseHTML(response, CODE_REGION_OPENER, CODE_REGION_CLOSER);
}

export async function generateWebApp(
  videoUrl: string,
  customPrompt?: string
): Promise<{spec: string; code: string}> {
  const spec = await generateSpecFromVideo(videoUrl, customPrompt);
  const code = await generateCodeFromSpec(spec);
  return {spec, code};
}
