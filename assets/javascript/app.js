function resetVars() {
    score = 0;
    dog = 0;
    q1 = 0;
    q2 = 0;
    number = 120;
    intervalId = "";
    finished = false;
    // clearInterval(intervalId);
}


function decrement() {
    
    number--;
    $("#timer").html("<h2>" + number + "</h2>");
    
    $("#inlineRadio1").on("click", function() {if (q1 = 1) { q1 = 0};});
    $("#inlineRadio2").on("click", function() {if (q1 != 1) { q1 = 1};});
    $("#inlineRadio3").on("click", function() {if (q1 = 1) { q1 = 0};});
    $("#inlineRadio4").on("click", function() {if (q1 = 1) { q1 = 0};});
    $("#inlineRadio5").on("click", function() {if (q2 = 1) { q2 = 0};});
    $("#inlineRadio6").on("click", function() {if (q2 = 1) { q2 = 0};});
    $("#inlineRadio7").on("click", function() {if (q2 = 1) { q2 = 0};});
    $("#inlineRadio8").on("click", function() {if (q2 != 1) { q2 = 1};});

    $("#submit").on("click", function () {
        for (i=1; i < 3; i++) {
            dog = eval("q"+i);
            score = score + dog;
        };
        stop();
        alert("Your final score was: " + score +" , click OK to play again.");
        finished = true;
        return;
        clearInterval() 
    });
    
    
    
    if (number === 0) {
        stop();
        for (i=1; i < 3; i++) {
            dog = eval("q"+i);
            score = score + dog;
        };
        alert("Time Up! Your score was:" + score + ", click OK to play again.");
        finished = true;
        return;
        clearInterval() 

    };
    
    if (finished === true) {
        resetVars();
        clearInterval() 
    };
}

resetVars();

intervalId = setInterval(decrement, 1000);
