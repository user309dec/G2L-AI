/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
/* tslint:disable */

import React from 'react';

// Interfaces for the new Interactive Lesson data structure
export interface RpgInteractionOption {
  text: string;
  isCorrect: boolean;
  feedback: string; // Can be HTML
}

export interface RpgInteraction {
  type: 'multipleChoice';
  question: string;
  options: RpgInteractionOption[];
}

export interface Scene {
  id: number;
  title: string;
  content: string; // HTML content for the scene
  interaction: RpgInteraction;
  nextSceneId: number | null;
}

export interface RpgData {
  title: string;
  scenes: Scene[];
}

// Props for the RPGView component
interface RPGViewProps {
  gameData: RpgData;
  currentSceneIndex: number;
  onChoiceSelect: (choice: RpgInteractionOption) => void;
  feedback: string | null;
  lastChoice: RpgInteractionOption | null;
  onContinue: () => void;
}

export default function RPGView({
  gameData,
  currentSceneIndex,
  onChoiceSelect,
  feedback,
  lastChoice,
  onContinue,
}: RPGViewProps) {
  const currentScene = gameData.scenes[currentSceneIndex];

  if (!currentScene) {
    return <div>Loading scene...</div>;
  }

  const totalScenes = gameData.scenes.length;

  return (
    <div className="rpg-view">
      <h2 className="rpg-title">{gameData.title}</h2>
      
      {!feedback ? (
        <div className="scene-container">
          <h3 className="scene-title">
            Scene {currentSceneIndex + 1}/{totalScenes}: {currentScene.title}
          </h3>
          <div 
            className="scene-content"
            dangerouslySetInnerHTML={{ __html: currentScene.content }} 
          />
          <div className="interaction-container">
            <p className="interaction-question">{currentScene.interaction.question}</p>
            <div className="choices-grid">
              {currentScene.interaction.options.map((option, index) => (
                <button
                  key={index}
                  className="choice-button"
                  onClick={() => onChoiceSelect(option)}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={`feedback-container ${lastChoice?.isCorrect ? 'correct' : 'incorrect'}`}>
            <div 
              className="feedback-content"
              dangerouslySetInnerHTML={{ __html: feedback }} 
            />
            <button className="continue-button" onClick={onContinue}>
              {lastChoice?.isCorrect ? 'Next >' : 'Try Again'}
            </button>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes questionGlow {
          0%, 100% {
            text-shadow: 0 0 3px var(--color-primary), 0 0 5px var(--color-primary);
          }
          50% {
            text-shadow: 0 0 8px var(--color-primary), 0 0 15px var(--color-primary);
          }
        }

        .rpg-view {
          padding: 1rem;
          font-family: var(--font-body);
          line-height: 1.7;
          background-color: var(--color-background-panel);
          border: 2px solid var(--color-border);
          height: 100%;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }
        .rpg-title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: var(--color-primary);
          padding-bottom: 1rem;
          border-bottom: 2px solid var(--color-border);
        }

        .scene-container, .feedback-container {
          background-color: var(--color-background);
          border: 2px solid var(--color-border);
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          animation: fadeInUp 0.5s ease-out;
        }

        .scene-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--color-primary-hover);
        }

        .scene-content {
          margin-bottom: 2rem;
          flex-grow: 1;
        }
        
        /* Styles for user-generated HTML content */
        .scene-content img, .feedback-content img {
          max-width: 100%;
          height: auto;
          border-radius: 4px;
          border: 2px solid var(--color-border);
          margin: 1rem 0;
        }
        .scene-content svg, .feedback-content svg {
          max-width: 100%;
          height: auto;
          margin: 1rem auto;
          display: block;
          border-radius: 4px;
        }
        /* Default styles for elements inside SVG to match the theme */
        .scene-content svg text, .feedback-content svg text {
            font-family: var(--font-body);
            fill: var(--color-text);
            font-size: 18px;
        }
        .scene-content svg path, .scene-content svg rect, .scene-content svg circle, .scene-content svg line,
        .feedback-content svg path, .feedback-content svg rect, .feedback-content svg circle, .feedback-content svg line {
            stroke: var(--color-primary);
            stroke-width: 2px;
            fill: transparent;
        }
        .scene-content p, .feedback-content p {
          margin-bottom: 1em;
        }
         .scene-content ul, .feedback-content ul {
            padding-left: 25px;
            margin-bottom: 1em;
        }
        .scene-content li, .feedback-content li {
            margin-bottom: 0.5em;
        }
        .scene-content strong, .feedback-content strong {
          color: var(--color-primary);
        }

        .interaction-container {
          margin-top: auto; /* Pushes interaction to the bottom */
          padding-top: 1.5rem;
          border-top: 2px solid var(--color-border);
        }

        .interaction-question {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          text-align: center;
          color: var(--color-primary-hover);
          animation: questionGlow 2.5s ease-in-out 0.75s;
        }

        .choices-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 600px) {
          .choices-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
        }
        .choice-button {
          position: relative;
          display: block; width: 100%; padding: 1rem 1rem 1rem 2.5rem;
          text-align: left; font-size: 1.2rem; cursor: pointer;
          border: 2px solid var(--color-border);
          background-color: var(--color-background-panel); color: var(--color-text);
          transition: background-color 0.2s, color 0.2s, transform 0.1s;
          font-family: var(--font-body);
          /* Add animation */
          opacity: 0;
          animation: fadeInUp 0.5s ease-out both;
        }
        /* Staggered animation for choice buttons */
        .choices-grid .choice-button:nth-child(1) { animation-delay: 0.4s; }
        .choices-grid .choice-button:nth-child(2) { animation-delay: 0.5s; }
        .choices-grid .choice-button:nth-child(3) { animation-delay: 0.6s; }
        .choices-grid .choice-button:nth-child(4) { animation-delay: 0.7s; }

        .choice-button:hover:not(:disabled) {
          background-color: var(--color-primary);
          color: var(--color-background);
        }
        .choice-button:active:not(:disabled) {
          transform: translateY(2px);
        }
        .choice-button::before {
          content: '>';
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .choice-button:hover:not(:disabled)::before {
          opacity: 1;
        }
        
        /* Feedback Container styles */
        .feedback-container {
            justify-content: space-between;
        }
        .feedback-container.correct {
            border-color: #5eff5a;
        }
        .feedback-container.incorrect {
            border-color: #ff5555;
        }
        
        .continue-button {
          align-self: flex-end;
          margin-top: 1.5rem;
          padding: 0.75rem 2.5rem;
          font-size: 1.5rem;
          cursor: pointer;
          border: 2px solid var(--color-border);
          background-color: transparent;
          color: var(--color-text);
          font-family: var(--font-body);
          position: relative;
          text-align: center;
          transition: background-color 0.2s, color 0.2s, transform 0.1s;
        }

        .continue-button:hover {
          background-color: var(--color-primary);
          color: var(--color-background);
        }
        .continue-button:active {
            transform: translateY(2px);
        }
        .continue-button::before {
          content: '>';
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .continue-button:hover::before {
          opacity: 1;
        }

      `}</style>
    </div>
  );
}