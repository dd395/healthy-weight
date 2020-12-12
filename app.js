
        function populate() {
            if (quiz.isEnded()) {
                showScores();
            }
            else {
                //show questions
                var element = document.getElementById("question");
                element.innerHTML = quiz.getQuestionIndex().text;

                //show choices
                var choices = quiz.getQuestionIndex().choices;
                for (var i = 0; i < choices.length; i++) {
                    var element = document.getElementById("choice" + i);
                    element.innerHTML = choices[i];
                    guess("btn" + i, choices[i]);
                }
                showProgress();

            }
        };

        function guess(id, guess) {
            var button = document.getElementById(id);
            button.onclick = function () {
                quiz.guess(guess);
                populate();
            }
        };

        function showProgress() {
            var currentQuestionNumber = quiz.questionIndex + 1;
            var element = document.getElementById("progress");
            element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;

        };

        function showScores() {
            var gameOverHTML = "<h1>Result</h1>";
            gameOverHTML += "<h2 id='score'>Your score: " + (quiz.score/quiz.questions.length)*100 +"%" + "<br>" + "<br>" + "Above 80% - Great!" + "<br>" +"<br>"+ "Below 60% - Learn more!"+"<br>"+ "<br>"+  "</h2>";
            var element = document.getElementById("quiz");
            element.innerHTML = gameOverHTML;

        }

        var questions = [
            new Question("BMI is an estimate of the body's?", ["fat content", "basal metabolic rate", "biological variability", "Resting metabolic rate"], "fat content"),
            new Question("What is an indicator of whether your weight is healthy?", ["waist measurements", "BMI=24.9", "exercise", "caloric intake"], "waist measurements"),
            new Question("What is a healthy BMI?", ["18.5", "24.9", "29.9", "30.0"], "24.9"),
            new Question("What should women's waist size (inches) be to avoid health problems?", ["35", "40", "34.9", "38"], "34.9"),
            new Question("What should men's waist size (inches) be to avoid health problems?", ["42", "40", "39.9", "43"], "39.9")


        ];

        var quiz = new Quiz(questions);

        populate();
