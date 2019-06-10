finished = false;
function resetVars() {
    score = 0;
    doggo = 0;
    dog = 0;
    q1 = 0;
    q2 = 0;
    q3 = 0;
    q4 = 0;
    q5 = 0;
    q6 = 0;
    q7 = 0;
    q8 = 0;
    q9 = 0;
    q10 = 0;
    q11 = 0;
    q12     = 0;
    number = 120;
    intervalId = "";
    // clearInterval(intervalId);
}


function decrement() {
    number--;
    $("#timer").html("<h2>" + number + "</h2>");
    
    $("#inlineRadio1").on("click", function() {if (q1 = 1) { q1 = 0};});
    $("#inlineRadio2").on("click", function() {if (q1 = 1) { q1 = 0};});
    $("#inlineRadio3").on("click", function() {if (q1 != 1) { q1 = 1};});
    $("#inlineRadio4").on("click", function() {if (q1 = 1) { q1 = 0};});

    $("#inlineRadio5").on("click", function() {if (q2 = 1) { q2 = 0};});
    $("#inlineRadio6").on("click", function() {if (q2 = 1) { q2 = 0};});
    $("#inlineRadio7").on("click", function() {if (q2 = 1) { q2 = 0};});
    $("#inlineRadio8").on("click", function() {if (q2 != 1) { q2 = 1};});
     
    $("#inlineRadio9").on("click", function() {if (q3 != 1) { q3 = 1};});
    $("#inlineRadio10").on("click", function() {if (q3 = 1) { q3 = 0};});
    $("#inlineRadio11").on("click", function() {if (q3 = 1) { q3 = 0};});
    $("#inlineRadio12").on("click", function() {if (q3 = 1) { q3 = 0};});
     
    $("#inlineRadio13").on("click", function() {if (q4 = 1) { q4 = 0};});
    $("#inlineRadio14").on("click", function() {if (q4 != 1) { q4 = 1};});
    $("#inlineRadio15").on("click", function() {if (q4 = 1) { q4 = 0};});
    $("#inlineRadio16").on("click", function() {if (q4 = 1) { q4 = 0};});  

    $("#inlineRadio17").on("click", function() {if (q5 = 1) { q5 = 0};});
    $("#inlineRadio18").on("click", function() {if (q5 != 1) { q5 = 1};});
    $("#inlineRadio19").on("click", function() {if (q5 = 1) { q5 = 0};});
    $("#inlineRadio20").on("click", function() {if (q5 = 1) { q5 = 0};});  

    $("#inlineRadio21").on("click", function() {if (q6 = 1) { q6 = 0};});
    $("#inlineRadio22").on("click", function() {if (q6 = 1) { q6 = 0};});
    $("#inlineRadio23").on("click", function() {if (q6 != 1) { q6 = 1};});
    $("#inlineRadio24").on("click", function() {if (q6 = 1) { q6 = 0};});    

    $("#inlineRadio25").on("click", function() {if (q7 != 1) { q7 = 1};});
    $("#inlineRadio26").on("click", function() {if (q7 = 1) { q7 = 0};});
    $("#inlineRadio27").on("click", function() {if (q7 = 1) { q7 = 0};});
    $("#inlineRadio28").on("click", function() {if (q7 = 1) { q7 = 0};}); 

    $("#inlineRadio29").on("click", function() {if (q8 = 1) { q8 = 0};});
    $("#inlineRadio30").on("click", function() {if (q8 = 1) { q8 = 0};});
    $("#inlineRadio31").on("click", function() {if (q8 != 1) { q8 = 1};});
    $("#inlineRadio32").on("click", function() {if (q8 = 1) { q8 = 0};});    

    $("#inlineRadio33").on("click", function() {if (q9 != 1) { q9 = 1};});
    $("#inlineRadio34").on("click", function() {if (q9 = 1) { q9 = 0};});
    $("#inlineRadio35").on("click", function() {if (q9 = 1) { q9 = 0};});
    $("#inlineRadio36").on("click", function() {if (q9 = 1) { q9 = 0};});    

    $("#inlineRadio37").on("click", function() {if (q10 = 1) { q10 = 0};});
    $("#inlineRadio38").on("click", function() {if (q10 = 1) { q10 = 0};});
    $("#inlineRadio39").on("click", function() {if (q10 != 1) { q10 = 1};});
    $("#inlineRadio40").on("click", function() {if (q10 = 1) { q10 = 0};}); 

    $("#inlineRadio41").on("click", function() {if (q11 != 1) { q11 = 1};});
    $("#inlineRadio42").on("click", function() {if (q11 = 1) { q11 = 0};});
    $("#inlineRadio43").on("click", function() {if (q11 = 1) { q11 = 0};});
    $("#inlineRadio44").on("click", function() {if (q11 = 1) { q11 = 0};});

    $("#inlineRadio45").on("click", function() {if (q12 = 1) { q12 = 0};});
    $("#inlineRadio46").on("click", function() {if (q12 = 1) { q12 = 0};});
    $("#inlineRadio47").on("click", function() {if (q12 != 1) { q12 = 1};});
    $("#inlineRadio48").on("click", function() {if (q12 = 1) { q12 = 0};});

    doggo = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10 + q11 + q12;

    $("#submit").on("click", function (event) {

        event.preventDefault();
        doggo = q1 + q2 + q3 +q4 + q5 +q6 + q7 + q8 + q9 + q10 + q11 + q12;

        console.log("Your final score was: " + doggo +" , click OK to play again.");
        // $("#questions").html("<br><br><br>Your final score was: " + doggo + " , click OK to play again.<br><br>  <button "\"ok"\"class="\"btn btn-primary"\">OK</button>");
        $("#questions").html("<br><br><br><h1>Your final score was: " + doggo + " , reset page to play again.<//h1>");
        finished = true;
        clearInterval(intervalId);
        $("#ok").on("click", function (event) {
            event.preventDefault();
            document.location.reload()

        });
        return;
    });
    
    
    
    if (number === 0) {
        doggo = q1 + q2 + q3 +q4 + q5 +q6 + q7 + q8 + q9 + q10 + q11 + q12;

        console.log("Time Up! Your final score was: " + doggo +" , click OK to play again.");
        $("#questions").html("<br><br><br><h1>Time Up! Your final score was: " + doggo +" , reset page to play again.<//h1>");
        finished = true;
        clearInterval(intervalId);
        return;

    };
    
//     if (finished === true) {
//         resetVars();
//         clearInterval() 
//     };
}

resetVars();

intervalId = setInterval(decrement, 1000);
