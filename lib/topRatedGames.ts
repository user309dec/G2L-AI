/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
/* tslint:disable */

import { RpgData } from '../components/RPGView';

// FIX: Export the TopRatedGame interface to be used in App.tsx.
export interface TopRatedGame {
  id: string;
  name: string;
  subject: string;
  type: 'rpg' | 'webapp';
  imageUrl: string;
  data: RpgData | { spec: string; code: string };
}

export interface Ww2Country {
    id: string;
    name: string;
    leader: string;
    leaderImage: string;
    color: string;
    playable: boolean;
}

export interface Ww2MapChange {
    countryId: string;
    newOwnerId: string;
}

export interface Ww2PlayerChoice {
    text: string;
    isCorrect: boolean;
    consequence: string;
    reality: string;
}

export interface Ww2GameEvent {
    date: string;
    title: string;
    description: string;
    mapChanges?: Ww2MapChange[];
    interactiveFor?: string[];
    choices?: Ww2PlayerChoice[];
}

export const ww2Countries: Ww2Country[] = [
    { id: 'uk', name: 'United Kingdom', leader: 'Neville Chamberlain', leaderImage: 'https://i.imgur.com/8Q9Z3aE.png', color: '#B75D69', playable: true },
    { id: 'fr', name: 'France', leader: 'Édouard Daladier', leaderImage: 'https://i.imgur.com/kY7tC7t.png', color: '#0055A4', playable: true },
    { id: 'de', name: 'Germany', leader: 'Adolf Hitler', leaderImage: 'https://i.imgur.com/s4f3zWp.png', color: '#444444', playable: true },
    { id: 'pl', name: 'Poland', leader: 'Ignacy Mościcki', leaderImage: 'https://i.imgur.com/o5b4j2N.png', color: '#DC143C', playable: true },
    { id: 'it', name: 'Italy', leader: 'Benito Mussolini', leaderImage: 'https://i.imgur.com/jM8y3vG.png', color: '#009246', playable: false },
    { id: 'ussr', name: 'Soviet Union', leader: 'Joseph Stalin', leaderImage: 'https://i.imgur.com/jM8y3vG.png', color: '#CC0000', playable: false },
    { id: 'ch', name: 'Switzerland', leader: 'Neutral', leaderImage: '', color: '#CCCCCC', playable: false },
    { id: 'be', name: 'Belgium', leader: 'Neutral', leaderImage: '', color: '#FDDA24', playable: false },
    { id: 'nl', name: 'Netherlands', leader: 'Neutral', leaderImage: '', color: '#FF7F00', playable: false },
    { id: 'cz', name: 'Czechoslovakia', leader: 'Occupied', leaderImage: '', color: '#888888', playable: false },
    { id: 'au', name: 'Austria', leader: 'Annexed', leaderImage: '', color: '#888888', playable: false },
];

export const ww2Events: Ww2GameEvent[] = [
    {
        date: 'September 1, 1939',
        title: 'Invasion of Poland',
        description: 'Germany invades Poland, employing Blitzkrieg tactics. This act marks the beginning of World War II in Europe.',
        mapChanges: [{ countryId: 'pl', newOwnerId: 'de' }],
        interactiveFor: ['uk', 'fr', 'pl', 'de'],
        choices: [
            {
                text: 'Declare war on Germany in response to the invasion.',
                isCorrect: true,
                consequence: 'N/A',
                reality: 'The UK and France declared war on Germany on September 3rd, honoring their alliance with Poland, though they were unable to provide direct military aid in time.'
            },
            {
                text: 'Attempt further diplomatic negotiations with Germany.',
                isCorrect: false,
                consequence: 'This would have given Germany more time to solidify its position in Poland and prepare for a Western offensive, making the subsequent defense of France even more difficult.',
                reality: 'After the failure of appeasement with the annexation of Czechoslovakia, it was clear diplomacy was no longer a viable option to stop Hitler\'s ambitions.'
            },
            {
                text: 'Send an expeditionary force to defend Warsaw immediately.',
                isCorrect: false,
                consequence: 'Logistically impossible in 1939. Any force sent would have been too small and too late, arriving only to be encircled and destroyed by the Wehrmacht.',
                reality: 'The "Phoney War" began, where the Western Allies mobilized but did not launch a major land offensive against Germany for months.'
            }
        ]
    },
    {
        date: 'May 10, 1940',
        title: 'Battle of France',
        description: 'The "Phoney War" ends as Germany launches a massive offensive against France and the Low Countries, bypassing the Maginot Line through the Ardennes forest.',
        mapChanges: [
            { countryId: 'be', newOwnerId: 'de' },
            { countryId: 'nl', newOwnerId: 'de' },
        ],
        interactiveFor: ['fr', 'uk'],
        choices: [
            {
                text: 'Counter-attack at the "hinge" of the German advance near Sedan to cut off their spearhead.',
                isCorrect: true,
                consequence: 'N/A',
                reality: 'This was the correct strategic move and was attempted, but poor coordination and communication among Allied forces meant the counter-attacks were piecemeal and ultimately failed to stop the German advance.'
            },
            {
                text: 'Withdraw all forces to a defensive line behind the Somme river.',
                isCorrect: false,
                consequence: 'This would have surrendered the initiative and a vast amount of territory, trapping the best Allied armies in Belgium without a fight and likely hastening the fall of France.',
                reality: 'The Allies were caught off guard. The speed of the German advance led to chaos, culminating in the encirclement of Allied armies and the evacuation at Dunkirk.'
            },
            {
                text: 'Rely solely on the Maginot Line to hold back the German army.',
                isCorrect: false,
                consequence: 'This was the strategic blunder that occurred. The German army simply went around the fortifications, making them almost completely useless.',
                reality: 'The Maginot Line was a formidable series of fortifications, but it did not cover the border with Belgium, which Germany exploited.'
            }
        ]
    },
    {
        date: 'June 22, 1940',
        title: 'Fall of France',
        description: 'France signs an armistice with Germany. The northern half is occupied, while a collaborationist regime is established in the south at Vichy.',
        mapChanges: [{ countryId: 'fr', newOwnerId: 'de' }],
        interactiveFor: ['uk'],
        choices: [
            {
                text: 'Continue the fight alone, preparing for a likely invasion and bombing campaign.',
                isCorrect: true,
                consequence: 'N/A',
                reality: 'With Winston Churchill as the new Prime Minister, Britain refused to negotiate and prepared to defend itself, leading to the Battle of Britain.'
            },
            {
                text: 'Seek a peace settlement with Germany to avoid further bloodshed.',
                isCorrect: false,
                consequence: 'This would have likely resulted in a German-dominated Europe, leaving the UK isolated and subject to German terms, effectively ending the war in Hitler\'s favor.',
                reality: 'Despite pressure from some quarters, the British government resolved to fight on, believing a negotiated peace would be tantamount to surrender.'
            }
        ]
    },
    {
        date: 'June 22, 1941',
        title: 'Operation Barbarossa',
        description: 'Germany launches a surprise invasion of the Soviet Union, its former ally, opening a massive new front in the East.',
        mapChanges: [],
        interactiveFor: ['de'],
        choices: [
            {
                text: 'Concentrate all forces on a single, decisive thrust towards Moscow.',
                isCorrect: true,
                consequence: 'N/A',
                reality: 'This was the strategy favored by many German generals. Instead, Hitler divided his forces to capture Ukraine and Leningrad as well, which diluted the main effort and delayed the attack on Moscow until the harsh Russian winter set in.'
            },
            {
                text: 'Secure the Middle Eastern oil fields before attacking the USSR.',
                isCorrect: false,
                consequence: 'This would have delayed Barbarossa by at least a year, giving the Soviet Union critical time to modernize its army and defenses, making a successful invasion much less likely.',
                reality: 'Germany was critically dependent on Romanian oil and believed a swift victory over the USSR would solve its resource problems.'
            },
            {
                text: 'Focus on capturing the Caucasus oil fields in the south first.',
                isCorrect: false,
                consequence: 'This was the strategy attempted in 1942 (Case Blue). While capturing the oil was vital, ignoring Moscow allowed the Soviet regime to survive and rally its forces for a counter-offensive.',
                reality: 'In 1941, the German high command was split. The final plan was a compromise that tried to achieve multiple objectives at once, which ultimately proved to be a fatal error.'
            }
        ]
    },
    {
        date: 'February 2, 1943',
        title: 'Turning Point at Stalingrad',
        description: 'The German Sixth Army, encircled at Stalingrad, surrenders after a brutal winter campaign. It is a catastrophic defeat and a major turning point on the Eastern Front.',
        mapChanges: [],
    },
    {
        date: 'June 6, 1944',
        title: 'D-Day: The Normandy Landings',
        description: 'The Western Allies land in Normandy, France, opening the long-awaited second front against Germany in Western Europe.',
        mapChanges: [],
        interactiveFor: ['uk'], // Represents Western Allies
        choices: [
            {
                text: 'Land at Normandy, despite its distance from Germany, due to favorable beaches and the element of surprise.',
                isCorrect: true,
                consequence: 'N/A',
                reality: 'Normandy was chosen over the Pas de Calais because the Germans expected the attack at Calais (the shortest sea crossing). The deception plan, Operation Fortitude, was crucial to D-Day\'s success.'
            },
            {
                text: 'Land at the Pas de Calais, the most direct route to Germany.',
                isCorrect: false,
                consequence: 'This was where the bulk of the German defenses were concentrated. An invasion here would have faced overwhelming resistance and likely resulted in catastrophic casualties and failure.',
                reality: 'The Allies went to great lengths, including creating a phantom army under General Patton, to convince the Germans the main invasion would be at Calais.'
            }
        ]
    },
    {
        date: 'May 8, 1945',
        title: 'Victory in Europe Day',
        description: 'Following the fall of Berlin to the Soviets and Hitler\'s suicide, Germany unconditionally surrenders to the Allied forces. The war in Europe is over.',
        mapChanges: [
            { countryId: 'de', newOwnerId: 'uk' }, // Represents Allied occupation
            { countryId: 'pl', newOwnerId: 'ussr' }, // Represents Soviet sphere of influence
            { countryId: 'cz', newOwnerId: 'ussr' },
        ],
    }
];

export const topRatedGames: TopRatedGame[] = [
  {
    id: 'top-rated-lang-1',
    name: "Kana Sounds Match",
    subject: 'Languages',
    type: 'webapp',
    imageUrl: 'https://youke1.picui.cn/s1/2025/09/21/68cf60a98ebb3.png',
    data: {
      spec: `An interactive 2D RPG-style game called "Kana Sounds Match" designed to help players learn Japanese Hiragana pronunciation.

SPECIFICATIONS:
1. The game is styled to resemble a training dojo.
2. The game features a real-time score and lives tracker.
3. In each round, the player hears the pronunciation of a Hiragana character, generated using the Web Speech API.
4. Four stone tablets, each with a different Hiragana character, are displayed. One is the correct match for the sound.
5. The player clicks a tablet to make their choice.
6. A correct match awards points and starts a new round.
7. An incorrect match costs one life. The game ends when the player runs out of lives.
8. The game includes a start screen with instructions and a game over screen with the final score and an option to play again.`,
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kana Sounds Match</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            image-rendering: pixelated;
        }

        body {
            font-family: 'VT323', monospace;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #1a1a1a;
            color: #fff;
            overflow: hidden;
            font-size: 18px;
        }

        #game-container {
            width: 100%;
            max-width: 800px;
            height: 600px;
            background-color: #6b4f34; /* Dark Wood */
            background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 50px 50px;
            border: 4px solid #3e2723; /* Darker Wood */
            box-shadow: 0 0 0 4px #111;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }
        
        #status-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            background-color: #111;
            color: #fff;
            font-size: 1.5em;
            border-bottom: 4px solid #3e2723;
            flex-shrink: 0;
            z-index: 5;
        }

        #lives-display {
            color: #e74c3c; /* Red hearts */
            letter-spacing: 3px;
        }
        
        #game-area {
            flex-grow: 1;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }

        #sound-control {
            text-align: center;
            margin-bottom: 20px;
        }

        #play-sound-button {
            font-size: 3em;
            background: none;
            border: none;
            color: #fff;
            cursor: pointer;
            text-shadow: 2px 2px 0 #111;
            transition: transform 0.1s;
        }
        #play-sound-button:active {
            transform: scale(0.9);
        }

        #sound-control p {
            margin-top: 10px;
            font-size: 1.2em;
        }
        
        #kana-choices {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            width: 100%;
            max-width: 400px;
        }
        
        .kana-card {
            background-color: #6c757d; /* Stone color */
            border: 3px solid #495057;
            border-radius: 5px;
            padding: 20px;
            font-size: 3.5em;
            text-align: center;
            cursor: pointer;
            user-select: none;
            color: #fff;
            text-shadow: 2px 2px 0 #111;
            box-shadow: 4px 4px 0 #343a40;
            transition: transform 0.1s, box-shadow 0.1s;
        }
        
        .kana-card:active {
            transform: translate(4px, 4px);
            box-shadow: 0 0 0 #343a40;
        }
        
        .kana-card.correct {
            animation: correct-pulse 0.8s;
        }
        
        .kana-card.incorrect {
            animation: incorrect-shake 0.5s;
        }

        @keyframes correct-pulse {
            0%, 100% { border-color: #495057; background-color: #6c757d; }
            50% { border-color: #2ecc71; background-color: #27ae60; transform: scale(1.05); }
        }

        @keyframes incorrect-shake {
            0%, 100% { transform: translateX(0); border-color: #495057; background-color: #6c757d; }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
            50% { border-color: #e74c3c; background-color: #c0392b; }
        }


        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.85);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            z-index: 10;
        }
        
        .overlay h2 {
            font-size: 3em;
            margin-bottom: 20px;
            color: #f1c40f;
        }
        
        .overlay p {
            font-size: 1.2em;
            max-width: 80%;
            margin-bottom: 30px;
            line-height: 1.5;
        }
        
        .overlay button {
            padding: 15px 30px;
            font-size: 1.5em;
            cursor: pointer;
            border: 2px solid #fff;
            border-radius: 0;
            background-color: #c0392b;
            color: white;
            font-family: inherit;
            box-shadow: 4px 4px 0 #111;
            transition: transform 0.1s, box-shadow 0.1s;
        }
        .overlay button:active {
            transform: translate(4px, 4px);
            box-shadow: 0 0 0 #111;
        }
        
        #end-screen p {
            font-size: 2em;
        }
    </style>
</head>
<body>
    <div id="game-container">
        <div id="status-bar">
            <div id="score-display">Score: 0</div>
            <div id="lives-display"></div>
        </div>
        <div id="game-area">
            <div id="sound-control">
                <button id="play-sound-button" title="Play Sound Again">🔊</button>
                <p>Listen and choose the correct tablet.</p>
            </div>
            <div id="kana-choices"></div>
        </div>

        <div id="start-screen" class="overlay">
            <h2>Kana Sounds Match</h2>
            <p>Welcome, student! Listen to the sounds of ancient Japan and match them to their written form. Prove your mastery by selecting the correct Hiragana character. Be warned, mistakes will cost you! Press "Begin" to start your training.</p>
            <button id="start-button">Begin</button>
        </div>

        <div id="end-screen" class="overlay" style="display: none;">
            <h2>Training Complete</h2>
            <p>Final Score: <span id="final-score">0</span></p>
            <button id="restart-button">Train Again</button>
        </div>
    </div>

    <script>
        const scoreDisplay = document.getElementById('score-display');
        const livesDisplay = document.getElementById('lives-display');
        const kanaChoices = document.getElementById('kana-choices');
        const playSoundButton = document.getElementById('play-sound-button');
        const startScreen = document.getElementById('start-screen');
        const endScreen = document.getElementById('end-screen');
        const startButton = document.getElementById('start-button');
        const restartButton = document.getElementById('restart-button');
        const finalScoreDisplay = document.getElementById('final-score');

        const hiraganaChart = [
            { kana: 'あ', romaji: 'a' }, { kana: 'い', romaji: 'i' }, { kana: 'う', romaji: 'u' }, { kana: 'え', romaji: 'e' }, { kana: 'お', romaji: 'o' },
            { kana: 'か', romaji: 'ka' }, { kana: 'き', romaji: 'ki' }, { kana: 'く', romaji: 'ku' }, { kana: 'け', romaji: 'ke' }, { kana: 'こ', romaji: 'ko' },
            { kana: 'さ', romaji: 'sa' }, { kana: 'し', romaji: 'shi' }, { kana: 'す', romaji: 'su' }, { kana: 'せ', romaji: 'se' }, { kana: 'そ', romaji: 'so' },
            { kana: 'た', romaji: 'ta' }, { kana: 'ち', romaji: 'chi' }, { kana: 'つ', romaji: 'tsu' }, { kana: 'て', romaji: 'te' }, { kana: 'と', romaji: 'to' },
            { kana: 'な', romaji: 'na' }, { kana: 'に', romaji: 'ni' }, { kana: 'ぬ', romaji: 'nu' }, { kana: 'ね', romaji: 'ne' }, { kana: 'の', romaji: 'no' }
        ];

        let gameState = {};

        function initGame() {
            gameState = {
                score: 0,
                lives: 3,
                currentKana: null,
                lockBoard: false
            };
            updateUI();
            startScreen.style.display = 'flex';
            endScreen.style.display = 'none';
        }

        function startGame() {
            startScreen.style.display = 'none';
            newRound();
        }

        function endGame() {
            finalScoreDisplay.textContent = gameState.score;
            endScreen.style.display = 'flex';
        }

        function updateUI() {
            scoreDisplay.textContent = \`Score: \${gameState.score}\`;
            livesDisplay.innerHTML = '♥ '.repeat(gameState.lives);
        }

        function playSound(kanaCharacter) {
            if (!('speechSynthesis' in window)) {
                alert("Sorry, your browser doesn't support the audio for this game.");
                return;
            }
            // Cancel any previous speech to prevent overlap
            window.speechSynthesis.cancel();

            const utterance = new SpeechSynthesisUtterance(kanaCharacter.kana);
            utterance.lang = 'ja-JP';
            utterance.rate = 0.8; // A bit slower for clarity
            window.speechSynthesis.speak(utterance);
        }

        function newRound() {
            gameState.lockBoard = true;
            kanaChoices.innerHTML = '';
            
            // Pick a correct kana
            const correctIndex = Math.floor(Math.random() * hiraganaChart.length);
            gameState.currentKana = hiraganaChart[correctIndex];

            // Pick 3 distractors, ensuring no duplicates
            const distractors = [];
            while (distractors.length < 3) {
                const distractorIndex = Math.floor(Math.random() * hiraganaChart.length);
                if (distractorIndex !== correctIndex && !distractors.some(d => d.kana === hiraganaChart[distractorIndex].kana)) {
                    distractors.push(hiraganaChart[distractorIndex]);
                }
            }
            
            // Combine and shuffle
            const choices = [gameState.currentKana, ...distractors].sort(() => 0.5 - Math.random());
            
            choices.forEach(kana => {
                const card = document.createElement('div');
                card.classList.add('kana-card');
                card.textContent = kana.kana;
                card.dataset.kana = kana.kana;
                card.addEventListener('click', () => handleChoice(card));
                kanaChoices.appendChild(card);
            });
            
            setTimeout(() => {
                playSound(gameState.currentKana);
                gameState.lockBoard = false;
            }, 500); // Small delay to let cards appear
        }
        
        function handleChoice(cardElement) {
            if (gameState.lockBoard) return;
            gameState.lockBoard = true;

            const chosenKana = cardElement.dataset.kana;
            const isCorrect = chosenKana === gameState.currentKana.kana;

            if (isCorrect) {
                gameState.score += 10;
                cardElement.classList.add('correct');
                setTimeout(() => {
                    updateUI();
                    newRound();
                }, 1000);
            } else {
                gameState.lives--;
                cardElement.classList.add('incorrect');
                // Also highlight the correct answer
                const correctCard = kanaChoices.querySelector(\`[data-kana="\${gameState.currentKana.kana}"]\`);
                if(correctCard) correctCard.classList.add('correct');

                setTimeout(() => {
                    updateUI();
                    if (gameState.lives <= 0) {
                        endGame();
                    } else {
                        newRound();
                    }
                }, 1800);
            }
        }
        
        // Event Listeners
        startButton.addEventListener('click', startGame);
        restartButton.addEventListener('click', () => {
             initGame();
             startGame();
        });
        playSoundButton.addEventListener('click', () => {
            if(gameState.currentKana && !gameState.lockBoard) {
                playSound(gameState.currentKana);
            }
        });

        // Speech synthesis check
        if (!('speechSynthesis' in window)) {
            startButton.disabled = true;
            const p = startScreen.querySelector('p');
            p.innerHTML += '<br><br><strong style="color: #e74c3c;">Warning: Your browser does not support the Web Speech API, which is required for this game to work.</strong>';
        }

        // Initial setup
        initGame();
    </script>
</body>
</html>`,
    },
  },
  {
    id: 'top-rated-chem-1',
    name: "Element Matching Quest",
    subject: 'Chemistry',
    type: 'webapp',
    imageUrl: 'https://youke1.picui.cn/s1/2025/09/21/68cf617d66e8a.png',
    data: {
      spec: `A 2D RPG-styled memory game called "Element Matching Quest" designed to help players learn element symbols and their properties.

SPECIFICATIONS:
1.  The game board is styled to resemble an alchemist's workshop table.
2.  The game features a 60-second timer and a real-time score tracker.
3.  A grid of "elemental rune" cards is displayed face down. Each card with an element's symbol (e.g., 'Na') has a corresponding card with one of its properties (e.g., 'Atomic #: 11' or its name 'Sodium').
4.  Players click any two cards to flip them face up.
5.  If the two cards form a matching pair, they remain face up, and the player earns points.
6.  If the cards are not a match, they automatically flip back face down after a brief delay, and a small time penalty is deducted from the timer.
7.  The objective is to find all the matching pairs as quickly as possible to achieve the highest score before the timer runs out.
8.  The game includes a start screen with instructions and an end screen displaying the final score with an option to play again.`,
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Element Matching Quest</title>
    <style>
        /* Basic Reset & Body Styling */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            image-rendering: pixelated; /* Sharp pixels for pixel art */
        }

        body {
            font-family: 'VT323', monospace;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #1a1a1a;
            color: #fff;
            overflow: hidden;
            font-size: 18px;
        }

        #game-container {
            width: 100%;
            max-width: 800px;
            height: 600px;
            background-color: #4a2c2a; /* Dark wood */
            border: 4px solid #c89f68; /* Gold trim */
            box-shadow: 0 0 0 4px #111;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }
        
        #status-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            background-color: #111;
            color: #fff;
            font-size: 1.5em;
            border-bottom: 4px solid #c89f68;
            flex-shrink: 0;
            z-index: 5;
        }
        
        #game-board {
            flex-grow: 1;
            padding: 20px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(4, 1fr);
            gap: 15px;
            perspective: 1000px; /* For 3D flip effect */
        }
        
        .card {
            background-color: #f0e5d1; /* Parchment */
            border: 2px solid #c89f68;
            cursor: pointer;
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.6s;
            user-select: none;
        }

        .card.flipped {
            transform: rotateY(180deg);
        }
        
        .card.matched {
            border-color: #5eff5a; /* Green for matched */
            cursor: default;
            opacity: 0.7;
        }

        .card-face {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 1.5em;
            padding: 5px;
        }

        .card-front {
            background-color: #f0e5d1; /* Parchment */
            color: #4a2c2a; /* Dark wood text */
        }

        .card-back {
            background-color: #7a5c5a; /* Darker wood */
            color: #c89f68; /* Gold symbol */
            font-size: 2.5em;
            transform: rotateY(180deg);
        }
        
        .card-back::before {
            content: '🧪'; /* Alchemy symbol */
        }

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.85);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            z-index: 10;
        }
        
        .overlay h2 {
            font-size: 3em;
            margin-bottom: 20px;
            color: #c89f68;
        }
        
        .overlay p {
            font-size: 1.2em;
            max-width: 80%;
            margin-bottom: 30px;
            line-height: 1.5;
        }
        
        .overlay button {
            padding: 15px 30px;
            font-size: 1.5em;
            cursor: pointer;
            border: 2px solid #c89f68;
            border-radius: 0;
            background-color: #7a5c5a;
            color: #f0e5d1;
            font-family: inherit;
            box-shadow: 4px 4px 0 #111;
            transition: transform 0.1s, box-shadow 0.1s;
        }
        .overlay button:active {
            transform: translate(4px, 4px);
            box-shadow: 0 0 0 #111;
        }
        
        #end-screen p {
            font-size: 2em;
        }
    </style>
</head>
<body>
    <div id="game-container">
        <div id="status-bar">
            <div id="score-display">Score: 0</div>
            <div id="timer-display">Time: 60</div>
        </div>
        <div id="game-board"></div>

        <div id="start-screen" class="overlay">
            <h2>Element Matching Quest</h2>
            <p>You have 60 seconds to match the Elemental Runes! Find all the pairs of symbols and their properties. A wrong match will cost you time. Good luck, alchemist!</p>
            <button id="start-button">Begin</button>
        </div>

        <div id="end-screen" class="overlay" style="display: none;">
            <h2>Time's Up!</h2>
            <p>Final Score: <span id="final-score">0</span></p>
            <button id="restart-button">Play Again</button>
        </div>
    </div>

    <script>
        const gameBoard = document.getElementById('game-board');
        const scoreDisplay = document.getElementById('score-display');
        const timerDisplay = document.getElementById('timer-display');
        const startScreen = document.getElementById('start-screen');
        const endScreen = document.getElementById('end-screen');
        const startButton = document.getElementById('start-button');
        const restartButton = document.getElementById('restart-button');
        const finalScoreDisplay = document.getElementById('final-score');

        const elementsData = [
            { symbol: 'H', name: 'Hydrogen', atomicNumber: 1 }, { symbol: 'He', name: 'Helium', atomicNumber: 2 },
            { symbol: 'Li', name: 'Lithium', atomicNumber: 3 }, { symbol: 'C', name: 'Carbon', atomicNumber: 6 },
            { symbol: 'N', name: 'Nitrogen', atomicNumber: 7 }, { symbol: 'O', name: 'Oxygen', atomicNumber: 8 },
            { symbol: 'Na', name: 'Sodium', atomicNumber: 11 }, { symbol: 'Al', name: 'Aluminum', atomicNumber: 13 },
            { symbol: 'Si', name: 'Silicon', atomicNumber: 14 }, { symbol: 'S', name: 'Sulfur', atomicNumber: 16 },
            { symbol: 'Cl', name: 'Chlorine', atomicNumber: 17 }, { symbol: 'K', name: 'Potassium', atomicNumber: 19 },
            { symbol: 'Ca', name: 'Calcium', atomicNumber: 20 }, { symbol: 'Fe', name: 'Iron', atomicNumber: 26 },
            { symbol: 'Cu', name: 'Copper', atomicNumber: 29 }, { symbol: 'Ag', name: 'Silver', atomicNumber: 47 },
            { symbol: 'Au', name: 'Gold', atomicNumber: 79 }, { symbol: 'Hg', name: 'Mercury', atomicNumber: 80 }
        ];

        let gameState = {};
        let timerInterval = null;

        function initGame() {
            gameState = {
                score: 0,
                timeLeft: 60,
                firstCard: null,
                secondCard: null,
                lockBoard: false,
                pairsFound: 0,
                totalPairs: 8,
            };
            clearInterval(timerInterval);
            updateUI();
            
            startScreen.style.display = 'flex';
            endScreen.style.display = 'none';
        }

        function startGame() {
            initGame();
            startScreen.style.display = 'none';
            createBoard();
            timerInterval = setInterval(updateTimer, 1000);
        }
        
        function endGame() {
            clearInterval(timerInterval);
            finalScoreDisplay.textContent = gameState.score;
            endScreen.style.display = 'flex';
        }

        function updateUI() {
            scoreDisplay.textContent = \`Score: \${gameState.score}\`;
            timerDisplay.textContent = \`Time: \${gameState.timeLeft}\`;
        }
        
        function updateTimer() {
            gameState.timeLeft--;
            updateUI();
            if (gameState.timeLeft <= 0) {
                endGame();
            }
        }

        function createBoard() {
            gameBoard.innerHTML = '';
            
            // Get 8 random elements
            const shuffledElements = [...elementsData].sort(() => 0.5 - Math.random());
            const gameElements = shuffledElements.slice(0, gameState.totalPairs);
            
            const cards = [];
            gameElements.forEach((el, index) => {
                const propertyType = Math.random() < 0.5 ? 'name' : 'atomicNumber';
                cards.push({
                    content: el.symbol,
                    pairId: index
                });
                cards.push({
                    content: propertyType === 'name' ? el.name : \`Atomic #: \${el.atomicNumber}\`,
                    pairId: index
                });
            });
            
            // Shuffle the 16 cards
            cards.sort(() => 0.5 - Math.random());
            
            cards.forEach(cardData => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.dataset.pairId = cardData.pairId;

                card.innerHTML = \`
                    <div class="card-face card-front">\${cardData.content}</div>
                    <div class="card-face card-back"></div>
                \`;
                
                card.addEventListener('click', () => handleCardClick(card));
                gameBoard.appendChild(card);
            });
        }
        
        function handleCardClick(clickedCard) {
            if (gameState.lockBoard || clickedCard.classList.contains('flipped') || clickedCard.classList.contains('matched')) {
                return;
            }

            clickedCard.classList.add('flipped');

            if (!gameState.firstCard) {
                gameState.firstCard = clickedCard;
                return;
            }

            gameState.secondCard = clickedCard;
            gameState.lockBoard = true;

            checkForMatch();
        }

        function checkForMatch() {
            const isMatch = gameState.firstCard.dataset.pairId === gameState.secondCard.dataset.pairId;
            isMatch ? handleCorrectMatch() : handleWrongMatch();
        }

        function handleCorrectMatch() {
            gameState.score += 10;
            gameState.pairsFound++;
            
            gameState.firstCard.classList.add('matched');
            gameState.secondCard.classList.add('matched');
            
            resetTurn();
            updateUI();

            if (gameState.pairsFound === gameState.totalPairs) {
                setTimeout(() => {
                    gameState.score += gameState.timeLeft; // Time bonus
                    updateUI();
                    endGame();
                }, 800);
            }
        }

        function handleWrongMatch() {
            gameState.timeLeft -= 2; // Time penalty
            if (gameState.timeLeft < 0) gameState.timeLeft = 0;
            updateUI();

            setTimeout(() => {
                gameState.firstCard.classList.remove('flipped');
                gameState.secondCard.classList.remove('flipped');
                resetTurn();
            }, 1000);
        }

        function resetTurn() {
            [gameState.firstCard, gameState.secondCard, gameState.lockBoard] = [null, null, false];
        }

        startButton.addEventListener('click', startGame);
        restartButton.addEventListener('click', startGame);
        
        // Initial setup
        initGame();
    </script>
</body>
</html>`,
    },
  },
  {
    id: 'top-rated-physics-1',
    name: "Gravity Sling",
    subject: 'Physics and Astronomy',
    type: 'webapp',
    imageUrl: 'https://youke1.picui.cn/s1/2025/09/21/68cf617cea685.png',
    data: {
      spec: `An interactive 2D physics game where players learn about gravity and orbital mechanics.

SPECIFICATIONS:
1. The game presents a top-down view of a space environment containing a launcher, planets, and a target destination.
2. The player must launch a satellite from the launcher to the target.
3. The launch mechanic is a "slingshot" style control: the user clicks and drags from the launcher to set the direction and velocity of the satellite.
4. While aiming, a predictive trajectory line shows the satellite's potential path, taking into account the gravitational pull of the planets.
5. Once launched, the satellite's movement is simulated based on the gravitational forces exerted by the planets.
6. A successful level is completed when the satellite reaches the target. Crashing into a planet or flying off-screen results in a failed attempt.
7. The game consists of multiple levels with increasingly complex arrangements of planets, requiring different slingshot maneuvers.
8. The UI displays the current level and the number of attempts for that level.`,
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gravity Sling</title>
    <style>
        body {
            font-family: sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0;
            padding: 10px;
            background-color: #1a2035;
            color: #f0f0f0;
            overflow: hidden;
            height: 100vh;
            box-sizing: border-box;
        }
        #game-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }
        #info-panel {
            display: flex;
            justify-content: space-between;
            width: 600px;
            font-size: 1.2em;
        }
        #info-panel span { font-weight: bold; }
        #canvas {
            border: 2px solid #73d8ff;
            background-color: #000;
            cursor: crosshair;
        }
        #controls {
            display: flex;
            gap: 20px;
        }
        button {
          font-family: 'VT323', monospace;
          background-color: transparent;
          border: 2px solid #73d8ff;
          color: #f0f0f0;
          padding: 0.5rem 1rem;
          cursor: pointer;
          font-size: 1.2rem;
          transition: background-color 0.2s, color 0.2s;
        }
        button:hover {
          background-color: #73d8ff;
          color: #1a2035;
        }
        #level-complete-modal {
            display: none;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(26, 32, 53, 0.9);
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            text-align: center;
            z-index: 1000;
            border: 2px solid #73d8ff;
        }
        #level-complete-modal h2 { margin-top: 0; color: #73d8ff; }
    </style>
</head>
<body>
    <div id="game-container">
        <div id="info-panel">
            <span id="level-display">Level: 1</span>
            <span id="attempts-display">Attempts: 0</span>
        </div>
        <canvas id="canvas" width="600" height="600"></canvas>
        <div id="controls">
            <button id="reset-btn">Reset Shot</button>
        </div>
    </div>

    <div id="level-complete-modal">
        <h2 id="modal-title">Level 1 Complete!</h2>
        <p id="modal-text">Excellent piloting!</p >
        <button id="next-level-btn">Next Level</button>
    </div>

    <script>
        // --- Setup ---
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const levelDisplay = document.getElementById('level-display');
        const attemptsDisplay = document.getElementById('attempts-display');
        const resetBtn = document.getElementById('reset-btn');
        const modal = document.getElementById('level-complete-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalText = document.getElementById('modal-text');
        const nextLevelBtn = document.getElementById('next-level-btn');

        // --- Game State & Config ---
        let satellite, planets, target, launcher;
        let isAiming = false;
        let isSimulating = false;
        let launchVector = { x: 0, y: 0 };
        let currentLevel = 0;
        let attempts = 0;
        const G = 0.1; // Gravitational constant
        const maxLaunchSpeed = 10;
        const trail = [];

        const levels = [
            { // Level 1: Simple shot
                launcher: { x: 100, y: 300 },
                planets: [{ x: 300, y: 300, mass: 1000, radius: 25 }],
                target: { x: 500, y: 300, radius: 15 }
            },
            { // Level 2: Slingshot
                launcher: { x: 50, y: 550 },
                planets: [{ x: 300, y: 300, mass: 1500, radius: 30 }],
                target: { x: 550, y: 50, radius: 15 }
            },
            { // Level 3: Two planets
                launcher: { x: 300, y: 550 },
                planets: [
                    { x: 150, y: 300, mass: 800, radius: 20 },
                    { x: 450, y: 300, mass: 800, radius: 20 }
                ],
                target: { x: 300, y: 50, radius: 15 }
            },
            { // Level 4: Thread the needle
                launcher: { x: 50, y: 300 },
                 planets: [
                    { x: 300, y: 150, mass: 1200, radius: 25 },
                    { x: 300, y: 450, mass: 1200, radius: 25 }
                ],
                target: { x: 550, y: 300, radius: 15 }
            }
        ];

        // --- Game Objects ---
        class Satellite {
            constructor(x, y) {
                this.pos = { x, y };
                this.vel = { x: 0, y: 0 };
                this.radius = 5;
            }

            applyForce(force) {
                this.vel.x += force.x;
                this.vel.y += force.y;
            }

            update() {
                this.pos.x += this.vel.x;
                this.pos.y += this.vel.y;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'white';
                ctx.fill();
            }
        }

        // --- Core Logic ---
        function setupLevel(levelIndex) {
            const level = levels[levelIndex];
            launcher = { ...level.launcher };
            planets = level.planets.map(p => ({ ...p }));
            target = { ...level.target };
            
            resetShot();
            
            currentLevel = levelIndex;
            attempts = 0;
            updateUI();
            modal.style.display = 'none';
        }

        function resetShot() {
            isSimulating = false;
            isAiming = false;
            satellite = new Satellite(launcher.x, launcher.y);
            trail.length = 0;
            gameLoop(); // Draw one frame of the initial state
        }
        
        function updateUI() {
            levelDisplay.textContent = \`Level: \${currentLevel + 1}\`;
            attemptsDisplay.textContent = \`Attempts: \${attempts}\`;
        }

        function calculateGravity(sat, planet) {
            const dx = planet.x - sat.pos.x;
            const dy = planet.y - sat.pos.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < 1) return { x: 0, y: 0 }; // Avoid division by zero
            
            const dist = Math.sqrt(distSq);
            const forceMag = (G * planet.mass) / distSq;
            
            return {
                x: (dx / dist) * forceMag,
                y: (dy / dist) * forceMag
            };
        }

        function predictTrajectory() {
            let simSat = { pos: { ...satellite.pos }, vel: { ...launchVector } };
            const path = [];
            for (let i = 0; i < 200; i++) { // Predict 200 steps
                let totalForce = { x: 0, y: 0 };
                planets.forEach(planet => {
                    const force = calculateGravity(simSat, planet);
                    totalForce.x += force.x;
                    totalForce.y += force.y;
                });
                simSat.vel.x += totalForce.x;
                simSat.vel.y += totalForce.y;
                simSat.pos.x += simSat.vel.x;
                simSat.pos.y += simSat.vel.y;
                if (i % 2 === 0) { // Only add every other point for a dashed look
                    path.push({ ...simSat.pos });
                }
            }
            return path;
        }

        function checkCollisions() {
            // Check planet collision
            for (const planet of planets) {
                const dx = planet.x - satellite.pos.x;
                const dy = planet.y - satellite.pos.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < planet.radius + satellite.radius) {
                    isSimulating = false; // Crash
                }
            }

            // Check target collision
            const dx_t = target.x - satellite.pos.x;
            const dy_t = target.y - satellite.pos.y;
            const dist_t = Math.sqrt(dx_t * dx_t + dy_t * dy_t);
            if (dist_t < target.radius + satellite.radius) {
                isSimulating = false;
                levelComplete();
            }

            // Check out of bounds
            if (satellite.pos.x < -50 || satellite.pos.x > canvas.width + 50 || satellite.pos.y < -50 || satellite.pos.y > canvas.height + 50) {
                isSimulating = false;
            }
        }
        
        function levelComplete() {
            modalTitle.textContent = \`Level \${currentLevel + 1} Complete!\`;
            modalText.textContent = \`You did it in \${attempts} attempts.\`;
            if (currentLevel >= levels.length - 1) {
                 nextLevelBtn.textContent = "Play Again";
            } else {
                 nextLevelBtn.textContent = "Next Level";
            }
            modal.style.display = 'block';
        }

        // --- Drawing ---
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw launcher
            ctx.beginPath();
            ctx.arc(launcher.x, launcher.y, 8, 0, Math.PI * 2);
            ctx.strokeStyle = '#73d8ff';
            ctx.stroke();

            // Draw planets
            planets.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'saddlebrown';
                ctx.fill();
            });

            // Draw target
            ctx.beginPath();
            ctx.arc(target.x, target.y, target.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'limegreen';
            ctx.fill();

            // Draw satellite trail
            if (trail.length > 1) {
                ctx.beginPath();
                ctx.moveTo(trail[0].x, trail[0].y);
                for (let i = 1; i < trail.length; i++) {
                    ctx.lineTo(trail[i].x, trail[i].y);
                }
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.lineWidth = 1;
            }

            // Draw satellite
            satellite.draw();

            // Draw aiming line and predicted path
            if (isAiming) {
                const mousePos = satellite.pos; // mouse position is temporarily stored here
                // Line from launcher to mouse
                ctx.beginPath();
                ctx.moveTo(launcher.x, launcher.y);
                ctx.lineTo(mousePos.x, mousePos.y);
                ctx.strokeStyle = 'red';
                ctx.stroke();

                // Predicted path
                const predictedPath = predictTrajectory();
                ctx.beginPath();
                predictedPath.forEach(p => ctx.lineTo(p.x, p.y));
                ctx.strokeStyle = 'rgba(255, 255, 0, 0.5)';
                ctx.stroke();
            }
        }

        // --- Game Loop ---
        function gameLoop() {
            if (isSimulating) {
                let totalForce = { x: 0, y: 0 };
                planets.forEach(planet => {
                    const force = calculateGravity(satellite, planet);
                    totalForce.x += force.x;
                    totalForce.y += force.y;
                });
                satellite.applyForce(totalForce);
                satellite.update();

                trail.push({ ...satellite.pos });
                if (trail.length > 100) {
                    trail.shift();
                }

                checkCollisions();
            }
            
            draw();
            
            if(isSimulating) {
                requestAnimationFrame(gameLoop);
            }
        }

        // --- Event Listeners ---
        canvas.addEventListener('mousedown', (e) => {
            if (isSimulating) return;
            isAiming = true;
        });

        canvas.addEventListener('mousemove', (e) => {
            if (!isAiming || isSimulating) return;
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            // Update "satellite" pos for aiming visual
            satellite.pos.x = mouseX;
            satellite.pos.y = mouseY;

            // Calculate launch vector (inverted)
            let dx = launcher.x - mouseX;
            let dy = launcher.y - mouseY;
            
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist === 0) return;
            const cappedDist = Math.min(dist, 100); // Cap aiming distance
            
            launchVector.x = (dx / dist) * (cappedDist / 100) * maxLaunchSpeed;
            launchVector.y = (dy / dist) * (cappedDist / 100) * maxLaunchSpeed;

            draw(); // Redraw for aiming feedback
        });

        canvas.addEventListener('mouseup', (e) => {
            if (!isAiming || isSimulating) return;
            isAiming = false;
            isSimulating = true;
            satellite.pos = { ...launcher }; // Start satellite from launcher
            satellite.vel = { ...launchVector };
            attempts++;
            updateUI();
            requestAnimationFrame(gameLoop);
        });

        resetBtn.addEventListener('click', resetShot);
        
        nextLevelBtn.addEventListener('click', () => {
             if (currentLevel >= levels.length - 1) {
                 currentLevel = 0;
            } else {
                currentLevel++;
            }
            setupLevel(currentLevel);
        });

        // --- Initial Load ---
        setupLevel(0);
    </script>
</body>
</html>`,
    },
  },
  {
    id: 'top-rated-stats-3',
    name: "Monster's Bounty",
    subject: 'Statistics',
    type: 'webapp',
    imageUrl: 'https://youke1.picui.cn/s1/2025/09/21/68cf60aaaf8e6.png',
    data: {
      spec: `A 2D RPG-styled game where players battle monsters to learn about probability and risk management. Defeat monsters with varying hit probabilities to earn points, but be careful—a miss will cost you health!

SPECIFICATIONS:
1.  The game screen displays a dungeon floor, a player character sprite, a score display, and a health bar.
2.  The game starts with the player at 100 Health Points (HP).
3.  Monsters spawn randomly on the screen. Each monster displays its name, a "Hit Chance" percentage, and the score reward for defeating it.
4.  Players click on a monster to attack. A random outcome is generated based on the monster's "Hit Chance."
5.  A successful hit defeats the monster, awards the player points, and removes the monster from the screen. A new monster spawns after a short delay. Higher-risk monsters (lower hit chance) award more points.
6.  A missed attack results in the player losing HP. The monster remains on screen. More dangerous monsters deal more damage.
7.  The game ends when the player's HP reaches 0.
8.  A final score screen is displayed, with an option to play again.
9.  The goal is to achieve the highest possible score before running out of health.`,
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Monster's Bounty</title>
    <style>
        /* Basic Reset & Body Styling */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            image-rendering: pixelated; /* Sharp pixels for pixel art */
        }

        body {
            font-family: 'VT323', monospace;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #1a1a1a;
            color: #fff;
            overflow: hidden;
            font-size: 18px;
        }

        #game-container {
            width: 100%;
            max-width: 800px;
            height: 600px;
            background-color: #2c2c2c;
            border: 4px solid #555;
            box-shadow: 0 0 0 4px #111;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }
        
        #status-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            background-color: #111;
            color: #fff;
            font-size: 1.5em;
            border-bottom: 4px solid #555;
            flex-shrink: 0;
            z-index: 5;
        }
        
        #health-display {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        #health-bar-container {
            width: 200px;
            height: 25px;
            border: 2px solid #fff;
            background-color: #555;
        }
        
        #health-bar {
            height: 100%;
            width: 100%;
            background-color: #2ecc71; /* Green */
            transition: width 0.3s ease-in-out;
            color: #111;
            font-size: 0.8em;
            line-height: 22px;
            text-align: center;
            font-weight: bold;
        }

        #game-board {
            flex-grow: 1;
            position: relative;
            background-color: #4a4a4a;
            background-image: 
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
            background-size: 40px 40px;
        }
        
        #player {
            position: absolute;
            width: 30px;
            height: 40px;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            /* Simple pixel art for player */
            background-color: #3498db; /* Blue shirt */
            box-shadow:
              /* Head */
              0 -10px 0 0 #f1c40f,
              /* Legs */
              -5px 40px 0 0 #2c3e50,
              5px 40px 0 0 #2c3e50;
        }

        .monster {
            position: absolute;
            width: 40px;
            height: 40px;
            cursor: pointer;
            user-select: none;
            transition: transform 0.2s ease-out;
            animation: spawn-in 0.5s ease-out;
        }
        
        .monster:hover {
            transform: scale(1.1);
        }
        
        .monster-info {
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(0,0,0,0.7);
            padding: 5px 10px;
            border-radius: 4px;
            border: 1px solid #fff;
            font-size: 0.9em;
            white-space: nowrap;
            margin-bottom: 5px;
            text-align: center;
            z-index: 2;
            pointer-events: none;
        }
        
        .monster-info-name {
            font-weight: bold;
            color: #f1c40f;
        }
        .monster-info-chance {
            color: #2ecc71;
        }
        .monster-info-reward {
            color: #e67e22;
        }

        /* Monster types */
        .slime { background-color: #2ecc71; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; }
        .goblin { background-color: #e74c3c; }
        .ogre { background-color: #9b59b6; width: 60px; height: 60px; }

        @keyframes spawn-in {
            from { opacity: 0; transform: scale(0.1); }
            to { opacity: 1; transform: scale(1); }
        }
        
        .monster.defeat {
            animation: defeat-anim 0.5s ease-out forwards;
        }

        @keyframes defeat-anim {
            0% { transform: scale(1.1) rotate(0); filter: brightness(1.5); }
            100% { opacity: 0; transform: scale(0.2) rotate(360deg); }
        }
        
        .monster.miss-attack {
            animation: miss-anim 0.3s ease-out;
        }

        @keyframes miss-anim {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-8px); }
            75% { transform: translateX(8px); }
        }
        
        .feedback-popup {
            position: absolute;
            font-size: 1.5em;
            font-weight: bold;
            pointer-events: none;
            animation: float-up-fade 1.2s ease-out forwards;
            text-shadow: 2px 2px #000;
        }
        
        .popup-score { color: #f1c40f; }
        .popup-damage { color: #e74c3c; }

        @keyframes float-up-fade {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(-60px); }
        }

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.85);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            z-index: 10;
        }
        
        .overlay h2 {
            font-size: 3em;
            margin-bottom: 20px;
            color: #e67e22;
        }
        
        .overlay p {
            font-size: 1.2em;
            max-width: 80%;
            margin-bottom: 30px;
            line-height: 1.5;
        }
        
        .overlay button {
            padding: 15px 30px;
            font-size: 1.5em;
            cursor: pointer;
            border: 2px solid #fff;
            border-radius: 0; /* Pixel style */
            background-color: #3498db;
            color: white;
            font-family: inherit;
            box-shadow: 4px 4px 0 #111;
            transition: transform 0.1s, box-shadow 0.1s;
        }
        .overlay button:active {
            transform: translate(4px, 4px);
            box-shadow: 0 0 0 #111;
        }
        
        #end-screen p {
            font-size: 2em;
        }

    </style>
</head>
<body>
    <div id="game-container">
        <div id="status-bar">
            <div id="score-display">Score: 0</div>
            <div id="health-display">
                <span>HP:</span>
                <div id="health-bar-container">
                    <div id="health-bar">100/100</div>
                </div>
            </div>
        </div>
        <div id="game-board">
            <div id="player"></div>
        </div>

        <div id="start-screen" class="overlay">
            <h2>Monster's Bounty</h2>
            <p>Click monsters to attack! Tougher monsters have a lower hit chance but give more points. Missing an attack will cost you health. Get the highest score before your HP runs out!</p>
            <button id="start-button">Start Adventure</button>
        </div>

        <div id="end-screen" class="overlay" style="display: none;">
            <h2>Game Over!</h2>
            <p>Final Score: <span id="final-score">0</span></p>
            <button id="restart-button">Play Again</button>
        </div>
    </div>

    <script>
        const gameBoard = document.getElementById('game-board');
        const scoreDisplay = document.getElementById('score-display');
        const healthBar = document.getElementById('health-bar');
        const startScreen = document.getElementById('start-screen');
        const endScreen = document.getElementById('end-screen');
        const startButton = document.getElementById('start-button');
        const restartButton = document.getElementById('restart-button');
        const finalScoreDisplay = document.getElementById('final-score');

        const MAX_MONSTERS = 5;
        
        const monsterTypes = {
            slime: { name: 'Slime', hitChance: 90, reward: 10, damage: 5, className: 'slime' },
            goblin: { name: 'Goblin', hitChance: 60, reward: 30, damage: 15, className: 'goblin' },
            ogre: { name: 'Ogre', hitChance: 30, reward: 80, damage: 30, className: 'ogre' }
        };

        let gameState = {};

        function initGame() {
            gameState = {
                score: 0,
                hp: 100,
                maxHp: 100,
                isGameOver: false
            };
            updateUI();
            
            startScreen.style.display = 'flex';
            endScreen.style.display = 'none';
            gameBoard.querySelectorAll('.monster').forEach(m => m.remove());
        }

        function startGame() {
            initGame();
            startScreen.style.display = 'none';
            for (let i = 0; i < MAX_MONSTERS; i++) {
                setTimeout(() => spawnMonster(), i * 200);
            }
        }
        
        function endGame() {
            gameState.isGameOver = true;
            finalScoreDisplay.textContent = gameState.score;
            endScreen.style.display = 'flex';
        }

        function updateUI() {
            scoreDisplay.textContent = \`Score: \${gameState.score}\`;
            const hpPercentage = (gameState.hp / gameState.maxHp) * 100;
            healthBar.style.width = \`\${hpPercentage}%\`;
            healthBar.textContent = \`\${gameState.hp}/\${gameState.maxHp}\`;
            
            if(hpPercentage < 30) {
                healthBar.style.backgroundColor = '#e74c3c'; // Red
            } else if (hpPercentage < 60) {
                healthBar.style.backgroundColor = '#f1c40f'; // Yellow
            } else {
                 healthBar.style.backgroundColor = '#2ecc71'; // Green
            }
        }

        function spawnMonster() {
            if (gameState.isGameOver || gameBoard.children.length > MAX_MONSTERS) return;

            const monsterKey = Object.keys(monsterTypes)[Math.floor(Math.random() * Object.keys(monsterTypes).length)];
            const monsterData = monsterTypes[monsterKey];
            
            const monster = document.createElement('div');
            monster.className = \`monster \${monsterData.className}\`;
            
            const info = document.createElement('div');
            info.className = 'monster-info';
            info.innerHTML = \`
                <div class="monster-info-name">\${monsterData.name}</div>
                <div class="monster-info-chance">\${monsterData.hitChance}% Hit</div>
                <div class="monster-info-reward">+\${monsterData.reward} Score</div>
            \`;
            monster.appendChild(info);
            
            // Add to DOM but keep invisible to measure dimensions
            monster.style.visibility = 'hidden';
            gameBoard.appendChild(monster);
            
            const boardRect = gameBoard.getBoundingClientRect();
            const monsterWidth = monster.offsetWidth;
            const monsterHeight = monster.offsetHeight;
            const infoHeight = monster.querySelector('.monster-info').offsetHeight || 60; // Fallback height

            // Calculate valid spawn area to prevent clipping and overlap with player
            const minX = 0;
            const maxX = boardRect.width - monsterWidth;
            const minY = infoHeight + 5; // Add margin so info box doesn't touch top edge
            const maxY = boardRect.height - monsterHeight - 80; // Reserve space at bottom for player

            if (minY < maxY) {
                monster.style.top = \`\${minY + (Math.random() * (maxY - minY))}px\`;
                monster.style.left = \`\${minX + (Math.random() * (maxX - minX))}px\`;
            } else {
                // Fallback for very small screens where calculation might fail
                monster.style.top = \`\${boardRect.height / 2 - monsterHeight / 2}px\`;
                monster.style.left = \`\${boardRect.width / 2 - monsterWidth / 2}px\`;
            }
            
            // Make monster visible after positioning
            monster.style.visibility = 'visible';

            monster.addEventListener('click', () => handleAttack(monster, monsterData), { once: true });
        }

        function handleAttack(monsterElement, monsterData) {
            if (gameState.isGameOver) return;
            
            const isHit = Math.random() * 100 < monsterData.hitChance;
            
            if (isHit) {
                gameState.score += monsterData.reward;
                showFeedbackPopup(monsterElement, \`+\${monsterData.reward}\`, 'score');
                monsterElement.classList.add('defeat');
                setTimeout(() => {
                    monsterElement.remove();
                    spawnMonster();
                }, 500);
            } else {
                gameState.hp -= monsterData.damage;
                gameState.hp = Math.max(0, gameState.hp); // Don't go below 0
                showFeedbackPopup(monsterElement, \`-\${monsterData.damage} HP\`, 'damage');
                monsterElement.classList.add('miss-attack');
                
                // Allow attacking again after miss animation
                setTimeout(() => {
                    monsterElement.classList.remove('miss-attack');
                     monsterElement.addEventListener('click', () => handleAttack(monsterElement, monsterData), { once: true });
                }, 300);

                if (gameState.hp <= 0) {
                    endGame();
                }
            }
            updateUI();
        }

        function showFeedbackPopup(element, text, type) {
            const popup = document.createElement('div');
            popup.className = \`feedback-popup popup-\${type}\`;
            popup.textContent = text;
            
            const elementRect = element.getBoundingClientRect();
            const boardRect = gameBoard.getBoundingClientRect();
            
            popup.style.left = \`\${elementRect.left - boardRect.left}px\`;
            popup.style.top = \`\${elementRect.top - boardRect.top}px\`;
            
            gameBoard.appendChild(popup);
            
            setTimeout(() => popup.remove(), 1200);
        }

        startButton.addEventListener('click', startGame);
        restartButton.addEventListener('click', startGame);
        
        // Initial setup
        initGame();
    </script>
</body>
</html>`,
    },
  },
  {
    id: 'top-rated-cs',
    name: 'The Pythonic Quest',
    subject: 'Computer Science',
    type: 'rpg',
    imageUrl: 'https://sdmntprwestus3.oaiusercontent.com/files/00000000-ce08-61fd-951e-f85614993c22/raw?se=2025-09-21T02%3A35%3A29Z&sp=r&sv=2024-08-04&sr=b&scid=dd9c4ae3-2416-5e22-978d-753ad95b769a&skoid=9ccea605-1409-4478-82eb-9c83b25dc1b0&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-21T01%3A16%3A07Z&ske=2025-09-22T01%3A16%3A07Z&sks=b&skv=2024-08-04&sig=qBGwLATYXtNt9AVe%2BZHWLhFjFlLooCHKcgiN8rYnZOc%3D',
    data: {
      title: 'The Pythonic Quest: Escape the Labyrinth of Ignorance!',
      scenes: [
        {
          id: 1,
          title: 'The Whispering Scroll',
          content: `
            <p>You find yourself in a dusty library. A single scroll lies open, glowing with a faint light. It describes the legend of the 'Variable,' a magical container that can hold any value.</p>
            <p>The scroll reads: "To begin your journey, you must first store your name in a variable called code>character_name</code>."</p>
            <svg viewBox="0 0 400 150">
              <rect x="50" y="30" width="300" height="90" fill="#2a3459" stroke="#73d8ff" stroke-width="2" rx="5"/>
              <text x="70" y="70" fill="#f0f0f0">character_name</text>
              <path d="M 230 75 L 250 75" stroke="#73d8ff" stroke-width="2"/>
              <text x="260" y="70" fill="#f0f0f0"> = </text>
              <rect x="280" y="50" width="100" height="50" fill="none" stroke="#73d8ff" stroke-dasharray="4" rx="3"/>
              <text x="330" y="80" fill="#a0e8ff" text-anchor="middle">?</text>
              <text x="200" y="110" fill="#f0f0f0" text-anchor="middle" font-size="16">A place to store a value</text>
            </svg>
          `,
          interaction: {
            type: 'multipleChoice',
            question: 'Which line of Python code correctly stores the name "Elara" in the variable `character_name`?',
            options: [
              { text: 'character_name = "Elara"', isCorrect: true, feedback: '<p>Correct! The `=` is the assignment operator, and strings of text are enclosed in quotes.</p>' },
              { text: 'character_name: "Elara"', isCorrect: false, feedback: '<p>Not quite. The colon `:` is used for type hints, not for assigning values.</p>' },
              { text: '"Elara" = character_name', isCorrect: false, feedback: '<p>Incorrect. In Python, the variable name must be on the left side of the `=` sign.</p>' },
            ],
          },
          nextSceneId: 2,
        },
        {
          id: 2,
          title: 'The Guardian of the Gate',
          content: `
            <p>A stone golem blocks your path. A riddle is etched on its chest: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?"</p>
            <p>To pass, you must present the correct answer, stored in a variable named <code>riddle_answer</code>, to the golem.</p>
            <svg viewBox="0 0 400 180">
                <path d="M 100 150 Q 150 50 200 150 Q 250 250 300 150" stroke="#73d8ff" fill="none" stroke-width="2"/>
                <text x="110" y="100" fill="#f0f0f0">"A Map"</text>
                <path d="M 150 105 L 180 120" stroke="#73d8ff" stroke-width="2"/>
                <rect x="180" y="110" width="120" height="50" fill="#2a3459" stroke="#73d8ff" rx="5"/>
                <text x="240" y="140" fill="#f0f0f0" text-anchor="middle">riddle_answer</text>
                <text x="200" y="30" fill="#a0e8ff" font-size="20">print(riddle_answer)</text>
            </svg>
          `,
          interaction: {
            type: 'multipleChoice',
            question: 'What is the correct answer to the riddle?',
            options: [
              { text: 'A globe', isCorrect: false, feedback: '<p>A good guess, but a globe has representations of all those things. The riddle points to something more abstract.</p>' },
              { text: 'A map', isCorrect: true, feedback: '<p>Exactly! A map has all these features represented symbolically. The golem rumbles and steps aside.</p>' },
              { text: 'A dream', isCorrect: false, feedback: '<p>An interesting thought, but the answer is more tangible and directly related to the riddle\'s components.</p>' },
            ],
          },
          nextSceneId: null,
        },
      ],
    },
  },
  {
    id: 'top-rated-lifesci',
    name: 'The Cellular Saga',
    subject: 'Life Science',
    type: 'rpg',
    imageUrl: 'https://sdmntprwestus3.oaiusercontent.com/files/00000000-4c04-61fd-b87f-b3859eb5ad27/raw?se=2025-09-21T02%3A31%3A13Z&sp=r&sv=2024-08-04&sr=b&scid=9b3e6113-34d9-5a90-b11e-48c4fd90b6a9&skoid=9ccea605-1409-4478-82eb-9c83b25dc1b0&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-20T09%3A22%3A46Z&ske=2025-09-21T09%3A22%3A46Z&sks=b&skv=2024-08-04&sig=VAmp6o11ikL1zip2zkewUwndQ47GIvRNCX9lFFm7XtU%3D',
    data: {
      title: 'The Cellular Saga: A Journey Within',
      scenes: [
        {
          id: 1,
          title: 'The Powerhouse Problem',
          content: `
            <p>You are a newly synthesized protein inside an animal cell. Your mission is to deliver a vital package of energy. But where is the cell's energy produced?</p>
            <svg viewBox="0 0 400 200">
              <ellipse cx="200" cy="100" rx="180" ry="90" fill="#4a5489" stroke="#73d8ff" stroke-width="2"/>
              <ellipse cx="200" cy="100" rx="60" ry="30" fill="#2a3459" stroke="#a0e8ff"/>
              <text x="200" y="105" fill="#f0f0f0" text-anchor="middle">Nucleus</text>
              <ellipse cx="100" cy="60" rx="30" ry="15" fill="#ff5555" stroke="#ff8888"/>
              <text x="100" y="65" fill="#f0f0f0" text-anchor="middle">?</text>
              <text x="200" y="180" fill="#f0f0f0" text-anchor="middle">The cytoplasm is vast. Where to go?</text>
            </svg>
          `,
          interaction: {
            type: 'multipleChoice',
            question: "Which organelle is known as the 'powerhouse' of the cell, responsible for generating ATP (energy)?",
            options: [
              { text: 'The Nucleus', isCorrect: false, feedback: '<p>The Nucleus is the control center, containing the cell\'s DNA, but it doesn\'t produce the energy.</p>' },
              { text: 'The Mitochondrion', isCorrect: true, feedback: '<p>Correct! The Mitochondria are the powerhouses, performing cellular respiration to create ATP. You head towards one.</p>' },
              { text: 'The Ribosome', isCorrect: false, feedback: '<p>Ribosomes are responsible for protein synthesis (like you!), not energy production.</p>' },
            ],
          },
          nextSceneId: 2,
        },
        {
          id: 2,
          title: 'The Great Divide',
          content: `
            <p>As you approach the mitochondrion, an alarm sounds! The cell is preparing to divide. The DNA in the nucleus is being copied. This entire process of cell division is called something specific.</p>
            <svg viewBox="0 0 400 200">
                <path d="M 50 100 C 150 0, 250 200, 350 100" stroke="#73d8ff" fill="none" stroke-width="3" />
                <path d="M 50 100 C 150 200, 250 0, 350 100" stroke="#a0e8ff" fill="none" stroke-width="2" stroke-dasharray="5" />
                <text x="200" y="40" fill="#f0f0f0" text-anchor="middle">DNA Replication</text>
                <text x="200" y="160" fill="#f0f0f0" text-anchor="middle">One cell becomes two...</text>
            </svg>
          `,
          interaction: {
            type: 'multipleChoice',
            question: 'What is the name for the process of a single cell dividing into two identical daughter cells?',
            options: [
              { text: 'Photosynthesis', isCorrect: false, feedback: '<p>Incorrect. Photosynthesis is how plants create food from sunlight. This is an animal cell.</p>' },
              { text: 'Osmosis', isCorrect: false, feedback: '<p>Osmosis is the movement of water across a membrane, not cell division.</p>' },
              { text: 'Mitosis', isCorrect: true, feedback: '<p>Exactly! Mitosis is the process of cell division. The cell successfully divides, and your mission is complete in a new, identical cell!</p>' },
            ],
          },
          nextSceneId: null,
        },
      ],
    },
  },
  {
    id: 'top-rated-knowledge',
    name: 'The Coffee Conundrum',
    subject: 'Daily Knowledge',
    type: 'rpg',
    imageUrl: 'https://youke1.picui.cn/s1/2025/09/21/68cf5f4037eeb.png',
    data: {
      title: 'The Coffee Conundrum: Brew the Perfect Cup',
      scenes: [
        {
          id: 1,
          title: 'The Grind',
          content: `
            <p>You stand before a bag of fresh coffee beans, a grinder, and a pour-over cone. The first step is crucial: the grind size.</p>
            <p>For a pour-over, water needs to pass through the coffee grounds at just the right speed to extract flavor without bitterness.</p>
            <svg viewBox="0 0 400 150">
              <circle cx="80" cy="75" r="30" fill="#6b4f34" opacity="0.5"/>
              <text x="80" y="80" fill="#f0f0f0" text-anchor="middle">Coarse</text>
              <circle cx="200" cy="75" r="30" fill="#6b4f34" opacity="0.7"/>
              <text x="200" y="80" fill="#f0f0f0" text-anchor="middle">Medium</text>
              <circle cx="320" cy="75" r="30" fill="#6b4f34" opacity="0.9"/>
              <text x="320" y="80" fill="#f0f0f0" text-anchor="middle">Fine</text>
              <text x="200" y="30" fill="#f0f0f0" text-anchor="middle">Which grind is best for pour-over?</text>
            </svg>
          `,
          interaction: {
            type: 'multipleChoice',
            question: 'What is the ideal grind size for pour-over coffee?',
            options: [
              { text: 'Coarse (like sea salt)', isCorrect: false, feedback: '<p>Too coarse, and the water will run through too quickly, resulting in weak, under-extracted coffee.</p>' },
              { text: 'Medium (like table salt)', isCorrect: true, feedback: '<p>Perfect! A medium grind provides the right amount of resistance for a balanced extraction in a pour-over.</p>' },
              { text: 'Fine (like powder)', isCorrect: false, feedback: '<p>Too fine, and the water will get stuck, over-extracting the coffee and making it bitter. This is better for espresso.</p>' },
            ],
          },
          nextSceneId: 2,
        },
        {
          id: 2,
          title: 'The Bloom',
          content: `
            <p>You have your medium-ground coffee in the filter. You heat your water to the perfect temperature (about 205°F / 96°C). Your first pour is the most magical: the bloom.</p>
            <p>This is when you pour just enough hot water to saturate the grounds, then wait about 30 seconds.</p>
            <svg viewBox="0 0 400 180">
                <path d="M 100 50 L 200 150 L 300 50 Z" fill="#fdf5e6" stroke="#73d8ff"/>
                <path d="M 120 70 C 140 90, 160 90, 180 70 C 200 90, 220 90, 240 70" fill="#6b4f34"/>
                <path d="M 180 30 C 190 40, 210 40, 220 30" stroke="#a0e8ff" stroke-width="2" fill="none"/>
                <text x="200" y="120" fill="#f0f0f0" text-anchor="middle">Why does the coffee 'bloom'?</text>
            </svg>
          `,
          interaction: {
            type: 'multipleChoice',
            question: 'What is the primary purpose of the coffee bloom?',
            options: [
              { text: 'To release trapped CO2 gas from the beans', isCorrect: true, feedback: '<p>Correct! Releasing this CO2 prevents it from creating bubbles that would disrupt an even extraction, leading to a much tastier cup.</p>' },
              { text: 'To pre-heat the coffee mug', isCorrect: false, feedback: '<p>While that is a good practice, it is not the purpose of the bloom itself, which happens in the filter.</p>' },
              { text: 'To make the coffee darker', isCorrect: false, feedback: '<p>The color of the brew is determined by the roast and extraction, not specifically the bloom.</p>' },
            ],
          },
          nextSceneId: null,
        },
      ],
    },
  },
  {
    id: 'top-rated-bio',
    name: 'DNA: The Double Helix Detective',
    subject: 'Bioscience',
    type: 'rpg',
    imageUrl: 'https://youke1.picui.cn/s1/2025/09/21/68cf5f406b5aa.png',
    data: {
      title: 'DNA: The Double Helix Detective',
      scenes: [
        {
          id: 1,
          title: 'The Missing Partner',
          content: `
            <p>You are a detective inside a cell's nucleus, examining a strand of DNA. A section has been damaged, and one of the nucleotide bases is missing its partner!</p>
            <p>The remaining base is Adenine (A). According to the laws of molecular justice, it can only pair with one other base.</p>
            <svg viewBox="0 0 400 200">
              <path d="M 100 20 C 150 70, 150 130, 100 180" stroke="#73d8ff" stroke-width="4" fill="none"/>
              <path d="M 300 20 C 250 70, 250 130, 300 180" stroke="#73d8ff" stroke-width="4" fill="none"/>
              <rect x="100" y="90" width="50" height="20" fill="#5eff5a" rx="3"/>
              <text x="125" y="105" fill="#1a2035" text-anchor="middle">A</text>
              <line x1="150" y1="100" x2="250" y2="100" stroke="#f0f0f0" stroke-dasharray="4"/>
              <rect x="250" y="90" width="50" height="20" fill="#ff5555" rx="3"/>
              <text x="275" y="105" fill="#1a2035" text-anchor="middle">?</text>
            </svg>
          `,
          interaction: {
            type: 'multipleChoice',
            question: "Which nucleotide base always pairs with Adenine (A)?",
            options: [
              { text: 'Guanine (G)', isCorrect: false, feedback: '<p>Incorrect. Guanine (G) has a special partnership with Cytosine (C).</p>' },
              { text: 'Cytosine (C)', isCorrect: false, feedback: '<p>Nope! Cytosine (C) is the dedicated partner for Guanine (G).</p>' },
              { text: 'Thymine (T)', isCorrect: true, feedback: '<p>Case solved! Adenine (A) always pairs with Thymine (T). You restore the missing piece.</p>' },
            ],
          },
          nextSceneId: 2,
        },
        {
          id: 2,
          title: 'The Sugar-Phosphate Backbone',
          content: `
            <p>With the base pairs restored, you notice the outer structure of the DNA ladder is loose. This 'backbone' gives the double helix its structure.</p>
            <p>It's made of two alternating components.</p>
            <svg viewBox="0 0 400 200">
                <path d="M 100 20 C 150 70, 150 130, 100 180" stroke="#73d8ff" stroke-width="8" fill="none"/>
                <path d="M 300 20 C 250 70, 250 130, 300 180" stroke="#73d8ff" stroke-width="8" fill="none"/>
                <circle cx="100" cy="60" r="10" fill="#f0f0f0"/>
                <text x="100" y="65" fill="#1a2035" text-anchor="middle">P</text>
                <path d="M 95 80 L 105 80 L 110 90 L 100 100 L 90 90 Z" fill="#a0e8ff"/>
                <text x="180" y="105" fill="#f0f0f0">What makes up</text>
                <text x="180" y="125" fill="#f0f0f0">the backbone?</text>
            </svg>
          `,
          interaction: {
            type: 'multipleChoice',
            question: 'What are the two repeating molecules that form the DNA backbone?',
            options: [
              { text: 'Sugar and Phosphate', isCorrect: true, feedback: '<p>Correct! A repeating chain of deoxyribose (a sugar) and phosphate groups forms the strong backbone for the DNA molecule.</p>' },
              { text: 'Protein and Lipid', isCorrect: false, feedback: '<p>Incorrect. Proteins and lipids are vital macromolecules in the cell, but they do not form the DNA backbone.</p>' },
              { text: 'Adenine and Guanine', isCorrect: false, feedback: '<p>Incorrect. Adenine and Guanine are the nucleotide bases that form the "rungs" of the ladder, not the sides.</p>' },
            ],
          },
          nextSceneId: null,
        },
      ],
    },
  },
  {
    id: 'top-rated-history',
    name: 'The Hieroglyph Cipher',
    subject: 'History',
    type: 'rpg',
    imageUrl: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-4760-61f7-9703-01f7fed298ca/raw?se=2025-09-21T02%3A45%3A55Z&sp=r&sv=2024-08-04&sr=b&scid=ed3bd12c-236b-56ef-a6bc-969da5a7c8fe&skoid=9ccea605-1409-4478-82eb-9c83b25dc1b0&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-20T19%3A48%3A33Z&ske=2025-09-21T19%3A48%3A33Z&sks=b&skv=2024-08-04&sig=FcIjMmQsLyvELp1AhWkC/Y3WiYyNqWL7oehf06Hfe%2B8%3D',
    data: {
      title: 'The Hieroglyph Cipher: Unlocking Ancient Egypt',
      scenes: [
        {
          id: 1,
          title: 'The Rosetta Stone',
          content: `
            <p>You are an archaeologist in 1799. A soldier has just discovered a large, dark stone slab covered in writing. It appears to be the same text written in three different scripts!</p>
            <p>You recognize one script as Ancient Greek. This could be the key to deciphering the other two, especially the mysterious Egyptian hieroglyphs.</p>
            <svg viewBox="0 0 400 250">
              <path d="M 50 20 H 350 A 100 100 0 0 1 350 220 H 50 A 100 100 0 0 1 50 20 Z" fill="#333" stroke="#555" stroke-width="2"/>
              <text x="200" y="60" fill="#a0e8ff" text-anchor="middle" font-size="16">Hieroglyphic</text>
              <path d="M 70 80 H 330" stroke="#73d8ff" stroke-width="1"/>
              <text x="200" y="120" fill="#a0e8ff" text-anchor="middle" font-size="16">Demotic</text>
              <path d="M 70 140 H 330" stroke="#73d8ff" stroke-width="1"/>
              <text x="200" y="180" fill="#f0f0f0" text-anchor="middle" font-size="16">Αρχαία Ελληνικά (Ancient Greek)</text>
            </svg>
          `,
          interaction: {
            type: 'multipleChoice',
            question: "Why was the Rosetta Stone so important for understanding hieroglyphs?",
            options: [
              { text: 'It was a dictionary of Egyptian words.', isCorrect: false, feedback: '<p>Not quite. It wasn\'t a word-for-word dictionary, but something even more valuable.</p>' },
              { text: 'It was written by a famous pharaoh.', isCorrect: false, feedback: '<p>While the decree was from a pharaoh (Ptolemy V), its importance comes from its structure, not its author.</p>' },
              { text: 'It provided the same text in a known language (Greek).', isCorrect: true, feedback: '<p>Precisely! Because scholars could read the Greek portion, they could use it as a guide to decode the hieroglyphic version of the same message.</p>' },
            ],
          },
          nextSceneId: 2,
        },
        {
          id: 2,
          title: 'The Cartouche Clue',
          content: `
            <p>A scholar named Jean-François Champollion noticed that some hieroglyphs were enclosed in an oval shape called a 'cartouche'.</p>
            <p>He theorized these cartouches contained something very important. By comparing them to the Greek text, he made a breakthrough.</p>
            <svg viewBox="0 0 400 150">
              <rect x="100" y="50" width="200" height="50" fill="none" stroke="#73d8ff" stroke-width="2" rx="25"/>
              <text x="200" y="80" fill="#f0f0f0" text-anchor="middle">𓊪 𓏏 𓍯 𓃭 𓐝 𓇋 𓋴 (Ptolemy)</text>
              <text x="200" y="30" fill="#f0f0f0" text-anchor="middle">What did the cartouches signify?</text>
            </svg>
          `,
          interaction: {
            type: 'multipleChoice',
            question: 'What did the cartouches on the Rosetta Stone contain?',
            options: [
              { text: 'The names of gods', isCorrect: false, feedback: '<p>While gods were hugely important, the key discovery within the cartouches was something else.</p>' },
              { text: 'The names of royalty (pharaohs)', isCorrect: true, feedback: '<p>Correct! Champollion correctly guessed the cartouches contained royal names like "Ptolemy" and "Cleopatra." This allowed him to match the phonetic sounds of the hieroglyphs to known names, cracking the code!</p>' },
              { text: 'Magic spells', isCorrect: false, feedback: '<p>Hieroglyphs were used for magical texts, but the specific breakthrough with the cartouches related to names.</p>' },
            ],
          },
          nextSceneId: null,
        },
      ],
    },
  },
  {
    id: 'top-rated-art',
    name: 'The Color Wheel Quest',
    subject: 'Art',
    type: 'rpg',
    imageUrl: 'https://youke1.picui.cn/s1/2025/09/21/68cf5f3fc382e.png',
    data: {
      title: 'The Color Wheel Quest: Master of Hues',
      scenes: [
        {
          id: 1,
          title: 'The Primary Colors',
          content: `
            <p>You are an artist's apprentice. Your first task is to understand the foundation of all colors: the primary colors.</p>
            <p>These are the three colors that cannot be created by mixing others. All other colors start from them.</p>
            <svg viewBox="0 0 400 180">
              <circle cx="100" cy="80" r="40" fill="#ff0000"/>
              <circle cx="200" cy="80" r="40" fill="#0000ff"/>
              <circle cx="300" cy="80" r="40" fill="#ffff00"/>
              <text x="200" y="150" fill="#f0f0f0" text-anchor="middle">The foundational pillars of color.</text>
            </svg>
          `,
          interaction: {
            type: 'multipleChoice',
            question: "Which of these are the three primary colors in traditional art theory?",
            options: [
              { text: 'Red, Green, Blue', isCorrect: false, feedback: '<p>This is the additive color model for light (like on screens), but not for pigment (paint).</p>' },
              { text: 'Red, Yellow, Blue', isCorrect: true, feedback: '<p>Perfect! Red, Yellow, and Blue are the primary colors for mixing paints and pigments.</p>' },
              { text: 'Orange, Green, Purple', isCorrect: false, feedback: '<p>These are secondary colors, which you create by mixing the primaries.</p>' },
            ],
          },
          nextSceneId: 2,
        },
        {
          id: 2,
          title: 'Mixing for Green',
          content: `
            <p>Your master hands you a palette with the three primary colors. "Create GREEN for the leaves of the tree," she commands.</p>
            <p>You must mix two of the primary colors to create the desired secondary color.</p>
            <svg viewBox="0 0 400 200">
                <circle cx="100" cy="100" r="40" fill="#ffff00"/>
                <circle cx="300" cy="100" r="40" fill="#0000ff"/>
                <text x="200" y="105" fill="#f0f0f0" font-size="40">+</text>
                <text x="200" y="50" fill="#f0f0f0" text-anchor="middle">Which two primaries make green?</text>
                <path d="M 140 100 Q 200 150 260 100" stroke="#f0f0f0" stroke-width="2" fill="none" stroke-dasharray="4"/>
                <circle cx="200" cy="160" r="20" fill="#00ff00"/>
            </svg>
          `,
          interaction: {
            type: 'multipleChoice',
            question: 'Which two primary colors do you mix to create Green?',
            options: [
              { text: 'Red and Yellow', isCorrect: false, feedback: '<p>Mixing Red and Yellow will create Orange.</p>' },
              { text: 'Yellow and Blue', isCorrect: true, feedback: '<p>Excellent! The vibrant yellow and the cool blue mix perfectly to create a lush green. Your master is pleased.</p>' },
              { text: 'Blue and Red', isCorrect: false, feedback: '<p>Mixing Blue and Red will result in Purple (or Violet).</p>' },
            ],
          },
          nextSceneId: null,
        },
      ],
    },
  },
  {
    id: 'top-rated-stats-1',
    name: 'The Probability Ace',
    subject: 'Statistics',
    type: 'rpg',
    imageUrl: 'https://youke1.picui.cn/s1/2025/09/21/68cf60aab9f85.png',
    data: {
      title: 'The Probability Ace',
      scenes: [
        {
          id: 1,
          title: 'The First Round Gamble',
          content: `
            <p>You are a sports analyst for a rising tennis star. Her first match is today, but her opponent is unknown. There's a <strong>20% chance</strong> it's an 'advanced' player and an 80% chance it's not.</p>
            <p>Your data shows she has a <strong>10% chance</strong> to win against an advanced opponent, but a <strong>75% chance</strong> against a non-advanced one.</p>
            <svg viewBox="0 0 400 220">
              <!-- Player -->
              <circle cx="50" cy="110" r="10" fill="#f0f0f0"/>
              <line x1="50" y1="120" x2="50" y2="140" stroke="#f0f0f0" stroke-width="2"/>
              <line x1="50" y1="140" x2="40" y2="160" stroke="#f0f0f0" stroke-width="2"/>
              <line x1="50" y1="140" x2="60" y2="160" stroke="#f0f0f0" stroke-width="2"/>
              <line x1="50" y1="125" x2="35" y2="135" stroke="#f0f0f0" stroke-width="2"/>
              <text x="50" y="180" fill="#f0f0f0" text-anchor="middle">You</text>
              <!-- Paths -->
              <path d="M 65 110 C 150 60, 150 60, 250 60" stroke="#73d8ff" stroke-width="2" fill="none" stroke-dasharray="5,5"/>
              <path d="M 65 110 C 150 160, 150 160, 250 160" stroke="#73d8ff" stroke-width="2" fill="none" stroke-dasharray="5,5"/>
              <!-- Opponents -->
              <text x="270" y="60" fill="#ff5555" font-size="40">?</text>
              <text x="270" y="160" fill="#a0e8ff" font-size="40">?</text>
              <text x="300" y="65" fill="#f0f0f0">Advanced</text>
              <text x="300" y="165" fill="#f0f0f0">Not Advanced</text>
              <!-- Probabilities -->
              <text x="160" y="45" fill="#f0f0f0">20% Chance</text>
              <text x="160" y="175" fill="#f0f0f0">80% Chance</text>
              <text x="160" y="80" fill="#5eff5a">P(Win) = 10%</text>
              <text x="160" y="145" fill="#5eff5a">P(Win) = 75%</text>
            </svg>
            <p>You must calculate the <strong>total probability</strong> of her winning, regardless of the opponent.</p>
          `,
          interaction: {
            type: 'multipleChoice',
            question: "What is your player's overall probability of winning this match?",
            options: [
              { text: '42.5%', isCorrect: false, feedback: '<p>Not quite. You can\'t just average the two win probabilities. You have to weigh them by the chance of facing each opponent type. This is the <strong>Total Probability Theorem!</strong></p>' },
              { text: '62%', isCorrect: true, feedback: '<p>That\'s it! You correctly calculated the weighted average: <br><code>(0.10 * 0.20) + (0.75 * 0.80) = 0.02 + 0.60 = 0.62</code>. <br>There is a 62% chance of victory!</p>' },
              { text: '2%', isCorrect: false, feedback: '<p>This only considers the path of playing an advanced opponent (10% of 20%). You forgot to include the much more likely path of playing a non-advanced opponent!</p>' },
            ],
          },
          nextSceneId: 2,
        },
        {
          id: 2,
          title: 'The Post-Match Analysis',
          content: `
            <p>In a stunning turn of events, your player <strong>WON</strong> the match! The crowd goes wild!</p>
            <p>Now, your client wants to know: given that she won, what's the likelihood she was actually facing the tough 'advanced' player? This requires reversing our thinking.</p>
            <svg viewBox="0 0 400 220">
                <text x="200" y="100" fill="#5eff5a" font-size="50" text-anchor="middle" style="font-weight:bold;">VICTORY!</text>
                <text x="200" y="150" fill="#f0f0f0" text-anchor="middle">Your player celebrates.</text>
                <text x="200" y="200" fill="#a0e8ff" text-anchor="middle">But who was the opponent...?</text>
            </svg>
             <p>You'll need to use <strong>Bayes' Rule</strong> and the Total Probability of winning (62%) that you just calculated.</p>
          `,
          interaction: {
            type: 'multipleChoice',
            question: "Given the victory, what is the probability they faced the 'advanced' opponent?",
            options: [
              { text: '10%', isCorrect: false, feedback: '<p>This is the probability of winning IF they face an advanced opponent, P(Win|Advanced). We need to find the reverse: P(Advanced|Win).</p>' },
              { text: '20%', isCorrect: false, feedback: '<p>This was the initial probability of facing an advanced opponent. The new information (the win) has changed the probabilities!</p>' },
              { text: '3.2%', isCorrect: true, feedback: '<p>Exactly! Using Bayes\' Rule: <br><code>P(Advanced | Win) = P(Win | Advanced) * P(Advanced) / P(Win)</code><br><code>= (0.10 * 0.20) / 0.62 = 0.02 / 0.62 ≈ 0.032</code>.<br>It was very unlikely she beat an advanced player!</p>' },
            ],
          },
          nextSceneId: null,
        },
      ],
    },
  },
  {
    id: 'top-rated-stats-2',
    name: 'Risk & Restaurants',
    subject: 'Statistics',
    type: 'rpg',
    imageUrl: 'https://youke1.picui.cn/s1/2025/09/21/68cf60aa78a98.png',
    data: {
      title: 'Risk & Restaurants',
      scenes: [
        {
          id: 1,
          title: 'The Austin-Beaumont Venture',
          content: `
            <p>You are a business ventureanalyst for a restaurant chain launching two new locations. Their success is <strong>independent</strong> of each other.</p>
            <ul>
              <li>The Austin location has a <strong>40%</strong> chance of success.</li>
              <li>The Beaumont location has a <strong>70%</strong> chance of success.</li>
            </ul>
            <svg viewBox="0 0 400 200">
                <!-- Austin -->
                <rect x="20" y="40" width="150" height="120" fill="#2a3459" stroke="#73d8ff" rx="5"/>
                <text x="95" y="65" fill="#f0f0f0" text-anchor="middle">Austin</text>
                <line x1="95" y1="75" x2="95" y2="95" stroke="#a0e8ff"/>
                <text x="60" y="120" fill="#5eff5a">Success: 40%</text>
                <text x="130" y="120" fill="#ff5555">Fail: 60%</text>
                <!-- Beaumont -->
                <rect x="230" y="40" width="150" height="120" fill="#2a3459" stroke="#73d8ff" rx="5"/>
                <text x="305" y="65" fill="#f0f0f0" text-anchor="middle">Beaumont</text>
                 <line x1="305" y1="75" x2="305" y2="95" stroke="#a0e8ff"/>
                <text x="265" y="120" fill="#5eff5a">Success: 70%</text>
                <text x="345" y="120" fill="#ff5555">Fail: 30%</text>
            </svg>
            <p>The CEO needs to know the probability that the overall venture isn't a complete failure.</p>
          `,
          interaction: {
            type: 'multipleChoice',
            question: 'What is the probability that AT LEAST ONE of the new locations is successful?',
            options: [
              { text: '110%', isCorrect: false, feedback: '<p>Probabilities can\'t be over 100%! You can\'t simply add them together because that double-counts the scenario where both are successful.</p>' },
              { text: '28%', isCorrect: false, feedback: '<p>This is the probability that BOTH locations are successful (0.40 * 0.70). We need the probability that <i>at least one</i> is.</p>' },
              { text: '82%', isCorrect: true, feedback: '<p>Spot on! The easiest way to calculate this is to find the probability of total failure and subtract from 1. <br><code>P(Both Fail) = 0.60 * 0.30 = 0.18</code>.<br><code>P(At least one succeeds) = 1 - 0.18 = 0.82</code>.</p>' },
            ],
          },
          nextSceneId: 2,
        },
        {
          id: 2,
          title: "The 'Business Flu' Scare",
          content: `
            <p>Disaster! There's a rare "Business Flu" that bankrupts restaurant chains. Only <strong>1%</strong> of all chains are infected.</p>
            <p>A new test is <strong>95% accurate</strong>. This means it's 95% correct for those who have it, and 95% correct for those who don't. Your company's test result just came back: <strong>POSITIVE</strong>.</p>
             <svg viewBox="0 0 400 200">
                <rect x="10" y="10" width="200" height="180" fill="#2a3459" stroke="#73d8ff" rx="5"/>
                <text x="110" y="40" fill="#f0f0f0" text-anchor="middle">Prevalence: 1%</text>
                <g id="grid" transform="translate(35, 60)">
                    <script>
                        const grid = document.getElementById('grid');
                        for(let i=0; i < 100; i++) {
                            const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                            c.setAttribute('cx', (i % 10) * 15);
                            c.setAttribute('cy', Math.floor(i / 10) * 15);
                            c.setAttribute('r', 5);
                            c.setAttribute('fill', i === 0 ? '#ff5555' : '#4a5489');
                            grid.appendChild(c);
                        }
                    </script>
                </g>
                 <rect x="220" y="10" width="170" height="180" fill="#2a3459" stroke="#73d8ff" rx="5"/>
                 <text x="305" y="40" fill="#f0f0f0" text-anchor="middle">Test Result</text>
                 <text x="305" y="110" fill="#ff5555" font-size="30" text-anchor="middle" style="font-weight:bold;">POSITIVE</text>
                 <text x="305" y="150" fill="#f0f0f0" text-anchor="middle">Accuracy: 95%</text>
            </svg>
            <p>The board is panicking. They think there's a 95% chance the company is doomed. You need to use <strong>Bayes' Rule</strong> to find the real probability.</p>
          `,
          interaction: {
            type: 'multipleChoice',
            question: 'Given the positive test, what is the actual probability your company has the Business Flu?',
            options: [
              { text: '95%', isCorrect: false, feedback: '<p>This is the test\'s accuracy, a common mistake! It doesn\'t account for how rare the disease is. The low prevalence dramatically changes the outcome.</p>' },
              { text: '16.1%', isCorrect: true, feedback: '<p>Incredible analysis! The chance of a false positive from the healthy 99% is much higher than the chance of a true positive from the sick 1%.<br><code>P(Sick|+) = (0.95*0.01) / ((0.95*0.01) + (0.05*0.99)) ≈ 0.161</code>.<br>It\'s still serious, but far from 95%!</p>' },
              { text: '1%', isCorrect: false, feedback: '<p>This is the initial probability before you had any new information. The positive test, while not perfect, does increase the probability. It\'s no longer just 1%.</p>' },
            ],
          },
          nextSceneId: null,
        },
      ],
    },
  },
];