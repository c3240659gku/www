const questions = [
    {
        questions: "星野源の主な活動分野はどれ？",
        choices: ["俳優のみ","歌手のみ","音楽と俳優の両方","スポーツ選手"],
        answer: 2
    },
    {
        question: "星野源の魅力としてよく言われるのは？",
        choices: ["派手なパフォーマンス","自然体な表現","無口な性格","激しいダンス"],
        answer: 1
    },
    {
        question: "星野源の音楽の特徴は？",
        choices: ["明るい曲","英語歌詞のみ","クラシック中心","日常を切り取った歌詞"],
        answer: 0
    },
    {
        question: "星野源の有名な曲は？",
        choices: ["Lemon","家族になろうよ","SUN","I LOVE"],
        answer: 2
    },
    {
        question: "星野源が活躍しているメディアは？",
        choices: ["テレビだけ","ラジオだけ","映画だけ","音楽活動・ラジオ・ドラマ"],
        answer: 3
    },
    {
        question: "星野源の印象として正しいものは？",
        choices: ["近寄りがたい","無愛想","親しみやすい","怖い"],
        answer: 2
    },
    {
        question: "星野源のドラマの代表作ではないものは？",
        choices: ["逃げるは恥だが役に立つ","ＭＩＵ４０４","コウノドリ","アンナチュラル"],
        answer: 3
    },
    {
        question: "星野源の楽曲の歌詞に多いテーマはどれ？",
        choices: ["戦争","日常や感情","歴史","ファンタジー"],
        answer: 1
    },
    {
        question: "星野源の楽曲「恋」が主題歌として使われた作品は？",
        choices: ["アニメ","CM","ドラマ","映画"],
        answer: 2
    }
];

let current = 0;
let score = 0;

function showQuestion() {
    const q = questions[current];
    document.querySelector("#question").textContent = q.question;

    const choicesDiv = document.querySelector("#choices");
    choicesDiv.innerHTML = "";
    document.getElementByld("result").textContent = "";

    q.choices.forEach((choices, index) => {
        const button = document.createElement("button");
        button.textContent = choices;
        button.addEventListener("click", () => checkAnswer(index));
        choicesDiv.appendChild(button);
    });

    document.querySelector("#result").textContent = "";
}

function checkAnswer(selected,button) {
    const correct = quiz[current].answer;
    const result = document.getElementByld("result");

    if (selected === correct) {
        result.textContent = "〇　正解！";
        result.className = "correct";
        button.classList.add("correct-button");
    } else {
        result.textContent = "×　不正解";
        resultt.className = "wrong";
        button.classList.add("wrong-button");
    }    

    const buttons = document.querySelectorAll("#choices button");
    buttons.forEach(button => button.disabled = true);
}

document.querySelector("#next").addEventListener("click", () => {
    current++;
    if (current < questions.length) {
        showQuestion();
    } else {
        let message = "";
        if (score >= 8) {
            message = "あなたは星野源マスターです！";
        } else {
            message = "もう少し星野源を知ろう！";
        }
        document.querySelector("#question").textContent = `終了！ ${score} / ${questions.length} 問正解`;
        document.querySelector("#choices").innerHTML = "";
        document.querySelector("#result").textContent = message;
    }
});

document.querySelector("#retry").addEventListener("click", () => {
    current = 0;
    score = 0;
    showQuestion();
});

showQuestion();