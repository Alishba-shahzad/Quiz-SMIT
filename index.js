
var questions = [
    { 
        question: "What is the correct syntax to display a message in the console in JavaScript?", 
        options: ["console.log('Hello World');", "print('Hello World');", "echo('Hello World');", "log('Hello World');"], 
        correct: 0 
    },
    { 
        question: "Which data type is used to create a variable in JavaScript that stores text?", 
        options: ["string", "int", "text", "char"], 
        correct: 0 
    },
    { 
        question: "How do you create a variable named 'x' with the value 5 in JavaScript?", 
        options: ["var x = 5;", "x = 5;", "let x = 5;", "const x = 5;"], 
        correct: 0 
    },
    { 
        question: "How do you write a conditional statement for executing some code if 'i' is equal to 10?", 
        options: ["if (i = 10)", "if i == 10 then", "if i = 10", "if (i == 10)"], 
        correct: 3 
    },
    { 
        question: "Which event occurs when a user clicks on an HTML element?", 
        options: ["onchange", "onclick", "onmouseover", "onmouseclick"], 
        correct: 1 
    },
    { 
        question: "How can you add a single-line comment in JavaScript?", 
        options: ["# This is a comment", "<!-- This is a comment -->", "// This is a comment", "/* This is a comment */"], 
        correct: 2 
    },
    { 
        question: "Which operator is used to assign a value to a variable?", 
        options: ["*", "=", "==", "==="], 
        correct: 1 
    },
    { 
        question: "How does a 'while' loop start in JavaScript?", 
        options: ["while (i <= 10; i++)", "while i <= 10", "while (i <= 10)", "while (i++ <= 10)"], 
        correct: 2 
    },
    { 
        question: "How do you declare an array in JavaScript?", 
        options: ["var colors = 'red', 'green', 'blue';", "var colors = ['red', 'green', 'blue'];", "var colors = (1:'red', 2:'green', 3:'blue');", "var colors = {'red', 'green', 'blue'};"], 
        correct: 1 
    },
    { 
        question: "How do you find the length of an array in JavaScript?", 
        options: ["array.length()", "array.size", "array.length", "array.count"], 
        correct: 2 
    }
];

var currentQuestion = 0;
var score = 0;

var questionElement = document.getElementById('question');
var optionsElement = document.getElementById('options');
var nextBtn = document.getElementById('nextBtn');
var scoreElement = document.getElementById('score');

function loadQuestion() {
    questionElement.innerText = questions[currentQuestion].question;
    optionsElement.innerHTML = '';

    for (var i = 0; i < questions[currentQuestion].options.length; i++) {
        var option = document.createElement('div');
        option.className = 'option';
        option.innerText = questions[currentQuestion].options[i];
        option.setAttribute('data-index', i);
        optionsElement.appendChild(option);
    }
}

optionsElement.addEventListener('click', function(event) {
    var selectedOption = event.target;
    if (selectedOption.className === 'option') {
        var selectedAnswer = parseInt(selectedOption.getAttribute('data-index'));

        if (selectedAnswer === questions[currentQuestion].correct) {
            score++;
            selectedOption.style.backgroundColor = 'green';
        } else {
            selectedOption.style.backgroundColor = 'lightcoral';
        }

        for (var j = 0; j < optionsElement.children.length; j++) {
            optionsElement.children[j].style.pointerEvents = 'none';
        }

        nextBtn.disabled = false;
    }
});

nextBtn.addEventListener('click', function() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
        nextBtn.disabled = true;
    } else {
        questionElement.innerText = "Quiz Finished!";
        optionsElement.innerHTML = '';
        nextBtn.style.display = 'none';
        scoreElement.innerText = "Your final score is: " + score + "/" + questions.length;
    }
});

loadQuestion();
nextBtn.disabled = true;
