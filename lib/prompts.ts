/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
/* tslint:disable */

export const ANALYZE_VIDEO_PROMPT = `You are an expert educator and curriculum designer. Analyze the content of the attached video. Your task is to identify the prerequisite knowledge the viewer is assumed to have and the primary learning objective of the video.

Provide the result as a single JSON object with two fields:
1.  "assumedKnowledge": An array of strings, where each string is a key concept or fact the video assumes the viewer already understands.
2.  "learningGoal": A concise string that describes the main concept, skill, or historical event the video aims to teach.

Example for a video on Calculus:
{
  "assumedKnowledge": ["Basic Algebra", "Functions and their graphs", "Concept of limits"],
  "learningGoal": "To understand the fundamental theorem of calculus and how it connects differentiation and integration."
}`;

export const ANALYZE_DOCUMENT_PROMPT = `You are an expert educator and curriculum designer. Analyze the content of the attached document. Your task is to identify the prerequisite knowledge the viewer is assumed to have and the primary learning objective of the document.

Provide the result as a single JSON object with two fields:
1.  "assumedKnowledge": An array of strings, where each string is a key concept or fact the document assumes the viewer already understands.
2.  "learningGoal": A concise string that describes the main concept, skill, or idea the document aims to teach.

Example for a document about photosynthesis:
{
  "assumedKnowledge": ["Basic cell structure (nucleus, cytoplasm)", "Concept of molecules (H2O, CO2, O2)", "Energy exists in different forms (light, chemical)"],
  "learningGoal": "To understand the process of photosynthesis, including its inputs (sunlight, water, CO2) and outputs (glucose, oxygen)."
}`;

export const IS_NARRATIVE_PROMPT = `Analyze the structure and content of the attached video or document. Classify its structure as either "narrative" or "non-narrative".

A "narrative" structure is one that:
- Follows a chronological timeline of events (e.g., a historical account).
- Is human-driven, focusing on the stories or discoveries of specific people.
- Follows a logical, step-by-step sequence of discovery or proof, where each new concept builds directly upon the previous one (e.g., a mathematical proof, a scientific investigation).

A "non-narrative" structure includes things like lists of tips, general topic overviews without a clear progression, or compilations.

Provide the result as a single JSON object with one boolean field: "isNarrative".`;

export const IS_NARRATIVE_FROM_TEXT_PROMPT = `Analyze the following topic description, which contains assumed knowledge and a learning goal. Based on this text, classify the likely structure of the topic as either "narrative" or "non-narrative".

A "narrative" structure implies a journey of discovery, a historical progression, or a step-by-step logical proof.
A "non-narrative" structure implies a collection of facts, a list of features, or a general overview.

For example, a topic going from "Basic Arithmetic" to "Understanding Long Division" would be narrative. A topic on "Features of the Python Programming Language" would be non-narrative.

Provide the result as a single JSON object with one boolean field: "isNarrative".`;

const GENERATE_INTERACTIVE_LESSON_PROMPT = `You are an expert game designer and instructional designer, specializing in creating fun, interactive, and highly visual learning experiences. Your task is to transform the provided educational topic into an interactive, gamified lesson.

The lesson must be a sequence of scenes that guide the user from the "assumed knowledge" to the "learning goal". Instead of just text, you must use HTML to create visually engaging scenes with images, diagrams (using inline SVG), and clear formatting.

**OUTPUT STRUCTURE:**

Generate a single JSON object with two root fields: "title" and "scenes".

1.  **title**: A creative and engaging title for the lesson.
2.  **scenes**: An array of scene objects.

**SCENE OBJECT STRUCTURE:**

Each scene object must contain:

-   **id** (number): A unique integer identifier, starting from 1.
-   **title** (string): A title for the scene (e.g., "The Setup", "The Core Concept").
-   **content** (string): An HTML string that presents the scene's information. This **must be highly visual and engaging**. Use standard HTML tags for text, but prioritize visual explanations. **For any key concept, you must generate a relevant, custom, and clear inline <svg> diagram or illustration.** If an SVG is not suitable, use an <img> tag with a public Unsplash URL. The visuals are the most important part of the teaching process. The content should visually set up the problem or information needed for the interaction.
-   **interaction** (object): An object describing the user's task in this scene.
    -   **type** (string): Must be "multipleChoice".
    -   **question** (string): The question for the user to answer based on the scene's content.
    -   **options** (array): An array of option objects.
        -   **text** (string): The text for the choice button.
        -   **isCorrect** (boolean): 'true' if this is the correct choice, otherwise 'false'.
        -   **feedback** (string): An HTML string explaining *why* the choice is correct or incorrect. This is a key teaching moment and can also contain images or SVGs.
-   **nextSceneId** (number | null): The 'id' of the next scene to go to if the user answers correctly. 'null' for the final scene.

**CONTEXT FOR THIS LESSON:**

-   **Assumed Knowledge Points**: {assumedKnowledge}
-   **Learning Goal**: {learningGoal}

Based on this context and any attached content, generate the complete interactive lesson in the specified JSON format. Ensure the narrative is coherent, the choices are meaningful, and the content is fun, visual, and educational.`;

export const GENERATE_RPG_PROMPT = GENERATE_INTERACTIVE_LESSON_PROMPT;
export const GENERATE_RPG_FROM_TEXT_PROMPT = GENERATE_INTERACTIVE_LESSON_PROMPT;


export const SPEC_FROM_VIDEO_PROMPT = `You are a pedagogist and product designer with deep expertise in crafting engaging learning experiences via interactive, vivid, visual-based web apps.

Examine the contents of the attached video. Then, write a detailed and carefully considered spec for an interactive web app designed to complement the video and reinforce its key idea or ideas. The recipient of the spec does not have access to the video, so the spec must be thorough and self-contained (the spec must not mention that it is based on a video). Here is an example of a spec written in response to a video about functional harmony:

"In music, chords create expectations of movement toward certain other chords and resolution towards a tonal center. This is called functional harmony.

Build me an interactive web app to help a learner understand the concept of functional harmony.

SPECIFICATIONS:
1. The app must feature an interactive keyboard.
2. The app must showcase all 7 diatonic triads that can be created in a major key (i.e., tonic, supertonic, mediant, subdominant, dominant, submediant, leading chord).
3. The app must somehow describe the function of each of the diatonic triads, and state which other chords each triad tends to lead to.
4. The app must provide a way for users to play different chords in sequence and see the results.
[etc.]"

The goal of the app that is to be built based on the spec is to enhance understanding through simple and playful design. The provided spec should not be overly complex, i.e., a junior web developer should be able to implement it in a single html file (with all styles and scripts inline). Most importantly, the spec must clearly outline the core mechanics of the app, and those mechanics must be highly effective in reinforcing the given video's key idea(s).

Provide the result as a JSON object containing a single field called "spec", whose value is the spec for the web app.`;

export const CODE_REGION_OPENER = '```';
export const CODE_REGION_CLOSER = '```';

export const SPEC_ADDENDUM = `\n\nThe app must be fully responsive and function properly on both desktop and mobile. Provide the code as a single, self-contained HTML document. All styles and scripts must be inline. In the result, encase the code between "${CODE_REGION_OPENER}" and "${CODE_REGION_CLOSER}" for easy parsing.`;