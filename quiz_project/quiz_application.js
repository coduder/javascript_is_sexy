var allQuestions = [{
        questionText: "Which color is best?",
        name: "color",
        choices: ["Red", "Green", "Blue", "Yellow", "Purple", "Black"],
        correctAnswer: 1
    },
    {
        questionText: "How many centimeters are in an inch?",
        name: "centimeter",
        choices: ["2.54", "3.42", "2.45"],
        correctAnswer: 0
    },
    {
        questionText: "What is Hillary Clinton\'s middle name?",
        name: "middle-name",
        choices: ["Riley", "Hillary", "Dillary", "Rodham", "Regis"],
        correctAnswer: 3
    }
];

var nextQIndex = 0; //index of current question in Viewport
var tally = 0; //user correct score tally
var userSelection; //stores current question's selected choice

/**
 * Main Page Function
 */
//<<<<<<<<<<<TODO>>>>>>>>>>>
//1) Figure out order of function calls
//2) Create an answer checker funciton for an onclick event of the next button
//3) Display users score on final page

$(document).ready(function() {
    var quizPanel = $("#quiz_panel");
    var landingPage = $("#landing_page");
    var endingPage = $("#ending_page");

    //Start with landingPage shown
    quizPanel.hide();
    endingPage.hide();
    landingPage.show();


    /**
     * Start quiz, hide landingPage show quizPanel
     */
    $("#startBtn").on("click", function() {
        landingPage.hide();
        quizPanel.show();
        clearQuestions();
        nextQuestion();
    });

    /**
     * Handle next question button transition set up
     */
    $("#nextQuestionButton").on("click", function() {
        //by this time nextQIndex has incremented so in order to validate
        //current selection, must store 1 less than nextQIndex
        var currQIndex = nextQIndex - 1;

        //Validate current selection and update tally score
        userSelection = $("input:checked", "#quizForm").val();
        if (allQuestions[currQIndex].choices.indexOf(userSelection) === allQuestions[currQIndex].correctAnswer) {
            tally++;
        }

        //Check for end of quiz 
        if (nextQIndex >= allQuestions.length) {
            displayScore();
        }
        //Load next set of quesitons
        clearQuestions();
        nextQuestion();
    });

    /**
     * Load next question onto page with all choices
     */
    function nextQuestion() {

        //current question object from array of questions
        var currQuestion = allQuestions[nextQIndex];

        //current question object
        var docQuestion = $("#question");

        //<ul> wrapping choice radio btns
        var currChoicesList = $("#choices");


        //Set new question heading text
        docQuestion.text(currQuestion.questionText);


        //Add all question choices as li wrapped input elements on the <ul>
        for (var j = 0, len2 = currQuestion.choices.length; j < len2; j++) {

            //li wrapper
            var li = document.createElement("LI");
            li.id = "li_" + nextQIndex + "_" + j;

            //new radio input element
            var radio = document.createElement("input");
            radio.id = "rad_" + nextQIndex + "_" + j;
            radio.type = "radio";
            radio.name = currQuestion.name;
            radio.value = currQuestion.choices[j];


            //Ensure radio button selection is made default check first option
            //MAY NEED: a submit button to test the required property
            radio.required = true; //doesn"t do anyting yet because next button is not Submit
            radio.checked = (j === 0) ? true : false;


            //create label for radio button
            var radioLabel = document.createTextNode(radio.value);

            //add input to current document
            li.appendChild(radio);
            li.appendChild(radioLabel);
            currChoicesList.append(li);
        }

        nextQIndex++;
    }

    function clearQuestions() {

        var UL_choices = document.getElementById("choices");

        //TEST ELEMENTS CREATED TO LATER BE REMOVED BEFORE ADDING NEW INPUT ELEMENTS
        /*
        var text1 = document.createElement("LI");
        text1.textContent = "text1";
        var text2 = document.createElement("LI");
        text2.textContent = "text2";
        UL_choices.append(text1);
        UL_choices.append(text2);
        */

        //clear current choices options
        while (UL_choices.hasChildNodes()) {
            UL_choices.removeChild(UL_choices.firstChild);
        }
    }

    function displayScore() {
        //Tallied score display
        var talliedScoreH1 = document.createElement("H1");
        var talliedScoreText = document.createTextNode("Your score is " + tally);

        quizPanel.hide();

        talliedScoreH1.appendChild(talliedScoreText);
        endingPage.append(talliedScoreH1);
        endingPage.show();
    }
});