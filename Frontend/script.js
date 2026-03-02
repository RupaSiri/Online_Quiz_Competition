 function loadQuestions() {

    fetch("http://localhost:8081/quiz/all")
    .then(response => response.json())
    .then(data => {

        let questionsDiv = document.getElementById("questions");
        questionsDiv.innerHTML = "";

        data.forEach(q => {

            let html = `
                <div class="question-box">
                    <h3>${q.questionTitle}</h3>

                    <label>
                        <input type="radio" name="question${q.id}" value="${q.option1}">
                        ${q.option1}
                    </label><br>

                    <label>
                        <input type="radio" name="question${q.id}" value="${q.option2}">
                        ${q.option2}
                    </label><br>

                    <label>
                        <input type="radio" name="question${q.id}" value="${q.option3}">
                        ${q.option3}
                    </label><br>

                    <label>
                        <input type="radio" name="question${q.id}" value="${q.option4}">
                        ${q.option4}
                    </label><br>

                    <input type="hidden" class="correct-answer" value="${q.correctAnswer}">
                </div>
            `;

            questionsDiv.innerHTML += html;
        });

    })
    .catch(error => console.error(error));
}
function submitQuiz() {

    let score = 0;

    let questions = document.querySelectorAll(".question-box");

    questions.forEach((q) => {

        let selected = q.querySelector("input[type='radio']:checked");
        let correct = q.querySelector(".correct-answer").value;

        if (selected && selected.value === correct) {
            score++;
        }

    });

    document.getElementById("result").innerText =
        "Your Score: " + score + " / " + questions.length;
}
