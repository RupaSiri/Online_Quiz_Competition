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
                    <p>1. ${q.option1}</p>
                    <p>2. ${q.option2}</p>
                    <p>3. ${q.option3}</p>
                    <p>4. ${q.option4}</p>
                </div>
            `;

            questionsDiv.innerHTML += html;
        });

    })
    .catch(error => console.error(error));
}