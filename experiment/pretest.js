
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "Fine suspended solid in water is removed by",
      answers: {
        a: "Screening ",
        b: "Skimming",
        c: "Sedimentation",
        d: "Filtration"
      },
      correctAnswer: "c"
    },

    {
      question: "Total Suspended Solids are mostly responsible for ",
      answers: {
        a: "Colour",
        b: "Turbidity",
        c: "Odour",
        d: "Taste"
      },
      correctAnswer: "b"
    },

    {
      question: "The chemical substance used in the desiccators is ___________________ ",
      answers: {
        a: "Calcium Carbonate",
        b: "Sodium Chloride",
        c: "Sodium Hydroxide",
        d: "Calcium Chloride"
      },
      correctAnswer: "d"
    },
    {
        question: "Always the Total Suspended Solids value will be",
        answers: {
          a: "Less than Total Dissolved Solids",
          b: "Greater than Total Dissolved Solids",
          c: "Less than Total Solids",
          d: "Greater than Total Solids"
        },
        correctAnswer: "c"
      },
    {
        question: "High total dissolved solids indicates lower level of hardness.",
    answers: {
          a: "True",
          b: "False"
        },
        correctAnswer: "b"
      }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
