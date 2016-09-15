var entry = 0;
var answer = 0;
var operationString = "";
var answerShown = false;
var dec = false;
var operationPicked = [0, false, false, false, false];
var operations = ["0", "/", "*", "-", "+"];

function numButton (number) {
  if (!answerShown) {
    if (!dec) {
      entry = Number(entry.toString()+number.toString());
    }
    else {
      entry = Number(entry.toString() + "." + number.toString());
      dec = false;
    }
  }
  else {
    entry = number;
    answerShown = false;
    if (operationPicked[0] == 2) {
      operationPicked[0] = 1;
    }
  }
  $("#answer").html(entry);
}

function decimal() {
  dec = true;
}

function operation(num) {
  if (operationPicked[0]==0) {
    operationPicked[0] = 2;
    operationPicked[num] = true;
    if (!answerShown) {
      operationString = operationString + entry.toString() + operations[num];
    } else {
      operationString += operations[num];
    }
    answerShown = true;
    $("#memory").html(operationString);
    answer = entry;
  } 
  else if (operationPicked[0]==1) {
    if (operationPicked[1] == true) {
      answer = answer/entry;
    } else if (operationPicked[2] == true) {
      answer = answer*entry;
    } else if (operationPicked[3] == true) {
      answer = answer-entry;
    } else if (operationPicked[4] == true) {
      answer = answer+entry;
    }
    answer = Number(answer.toFixed(12));
    operationString = operationString + entry.toString() + operations[num];
    entry = answer;
    $("#answer").html(entry);
    answerShown = true;
    
    operationPicked = [2,false,false,false,false];
    operationPicked[num] = true;
    $("#memory").html(operationString);
  }
}

function showAnswer() {
  if (operationPicked[1] == true) {
      answer = answer/entry;
    } else if (operationPicked[2] == true) {
      answer = answer*entry;
    } else if (operationPicked[3] == true) {
      answer = answer-entry;
    } else if (operationPicked[4] == true) {
      answer = answer+entry;
    }
    answer = Number(answer.toFixed(12));
    operationString = operationString + entry.toString();
    entry = answer;
    $("#answer").html(entry);
    answerShown = true;
    
    operationPicked = [0,false,false,false,false];
    $("#memory").html(operationString);
}

function clearEntry() {
  entry=0;
  $("#answer").html(entry);
  answerShown = false;
  operationPicked[0] = 2;
}

function allClear() {
  entry=0;
  answer=0;
  answerShown = false;
  operationPicked = [0,false,false,false,false];
  $("#answer").html(entry);
  operationString = "";
  $("#memory").html("0");
}