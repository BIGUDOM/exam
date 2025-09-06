    const questions = [
      {
        "q": "Which word is a synonym for 'happy'?",
        "options": ["A. Sad", "B. Joyful", "C. Angry", "D. Tired"],
        "answer": 1
      },
      {
        "q": "Choose the correct spelling:",
        "options": ["A. Recieve", "B. Receive", "C. Recive", "D. Receeve"],
        "answer": 1
      },
      {
        "q": "What is the plural form of 'child'?",
        "options": ["A. Childs", "B. Childes", "C. Children", "D. Childrens"],
        "answer": 2
      },
      {
        "q": "Which sentence is in the past tense?",
        "options": [
          "A. She walks to school.",
          "B. She will walk to school.",
          "C. She walked to school.",
          "D. She is walking to school."
        ],
        "answer": 2
      },
      {
        "q": "Which word is an adjective?",
        "options": ["A. Quickly", "B. Beautiful", "C. Run", "D. Happiness"],
        "answer": 1
      },
      {
        "q": "What is the antonym of 'difficult'?",
        "options": ["A. Hard", "B. Simple", "C. Complicated", "D. Tough"],
        "answer": 1
      },
      {
        "q": "Which sentence uses the correct form of 'there', 'their', or 'they're'?",
        "options": [
          "A. Their going to the park.",
          "B. There going to the park.",
          "C. They're going to the park.",
          "D. Theyre going to the park."
        ],
        "answer": 2
      },
      {
        "q": "What is the comparative form of 'good'?",
        "options": ["A. Gooder", "B. More good", "C. Better", "D. Best"],
        "answer": 2
      },
      {
        "q": "Which word is a noun?",
        "options": ["A. Run", "B. Quickly", "C. Apple", "D. Beautiful"],
        "answer": 2
      },
      {
        "q": "Choose the correct punctuation: 'How are you ____'",
        "options": ["A. ?", "B. .", "C. !", "D. ;"],
        "answer": 0
      }
    ];

    let current = 0;
    let answers = JSON.parse(localStorage.getItem("examAnswers")) || {};

    const examDiv1 = document.getElementById("exam1");
    const resultDiv1 = document.getElementById("result1");

    function renderQuestion(index) {
      const q = questions[index];
      examDiv1.innerHTML = `
        <div class="question">
          <h2>Question ${index + 1} of ${questions.length}</h2>
          <p>${q.q}</p>
          <div class="options">
            ${q.options.map((opt, i) => `
              <label>
                <input type="radio" name="option" value="${i}" 
                  ${answers[index] == i ? "checked" : ""}>
                ${opt}
              </label>
            `).join("")}
          </div>
        </div>
      `;
      document.getElementById("prevBtn").disabled = index === 0;
      document.getElementById("nextBtn").disabled = index === questions.length - 1;
    }

    function saveAnswer() {
      const selected = document.querySelector('input[name="option"]:checked');
      if (selected) {
        answers[current] = parseInt(selected.value);
        localStorage.setItem("examAnswers", JSON.stringify(answers));
      }
    }

    document.getElementById("prevBtn").onclick = () => {
      saveAnswer();
      current--;
      renderQuestion(current);
    };

    document.getElementById("nextBtn").onclick = () => {
      saveAnswer();
      current++;
      renderQuestion(current);
    };

    document.getElementById("submitBtn").onclick = () => {
      saveAnswer();
      let score = 0;
      questions.forEach((q, i) => {
        if (answers[i] === q.answer) score++;
      });
      resultDiv.style.display = "block";
      resultDiv.textContent = `You scored ${score} out of ${questions.length}`;
    };

    renderQuestion(current);
