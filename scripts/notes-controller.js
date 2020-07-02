function loadNotes() {

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var defaultHeightA = 797;
    var defaultHeightB = 822;
    var defaultHeightC = 1197;
    var variableHeight = 70;
  } else {
    var defaultHeightA = 597;
    var defaultHeightB = 697;
    var defaultHeightC = 922;
    var variableHeight = 25;
  }

  // console.log("196L: ", Notes196L);
  // console.log("122B: ", Notes122B);
  console.log("163: ", Notes163);

  // ***** MATH 163 NOTES CONTROLLER ***** //

  // WEEK 1
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 1) {
    // console.log(Notes163.W1);
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes163.W1) {
      if (Notes163.W1[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes163.W1[day].split("_")[0];
        var link = Notes163.W1[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 1

  // WEEK 2
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 2) {
    // console.log(Notes163.W2);
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes163.W2) {
      if (Notes163.W2[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes163.W2[day].split("_")[0];
        var link = Notes163.W2[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 2

  // WEEK 3
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 3) {
    // console.log(Notes122B.W3);
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes163.W3) {
      if (Notes163.W3[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes163.W3[day].split("_")[0];
        var link = Notes163.W3[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 3

  // WEEK 4
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 4) {
    // console.log(Notes122B.W4);
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes163.W4) {
      if (Notes163.W4[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes163.W4[day].split("_")[0];
        var link = Notes163.W4[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 4

  // WEEK 5
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 5) {
    // console.log(Notes122B.W5);
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes163.W5) {
      if (Notes163.W5[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes163.W5[day].split("_")[0];
        var link = Notes163.W5[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 5

  // WEEK 6
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 6) {
    // console.log(Notes122B.W6);
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes163.W6) {
      if (Notes163.W6[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes163.W6[day].split("_")[0];
        var link = Notes163.W6[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 6

  // WEEK 7
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 7) {
    // console.log(Notes122B.W7);
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes163.W7) {
      if (Notes163.W7[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes163.W7[day].split("_")[0];
        var link = Notes163.W7[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 7

  // WEEK 8
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 8) {
    // console.log(Notes122B.W8);
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes163.W8) {
      if (Notes163.W8[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes163.W8[day].split("_")[0];
        var link = Notes163.W8[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 8

  // WEEK 9
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 9) {
    // console.log(Notes122B.W9);
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes163.W9) {
      if (Notes163.W9[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes163.W9[day].split("_")[0];
        var link = Notes163.W9[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 9

  // WEEK 10
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 10) {
    // console.log(Notes122B.W10);
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes163.W10) {
      if (Notes163.W10[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes163.W10[day].split("_")[0];
        var link = Notes163.W10[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 10

  // WEEK 11
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 11) {
    // console.log(Notes122B.W11);
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes163.W11) {
      if (Notes163.W11[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes163.W11[day].split("_")[0];
        var link = Notes163.W11[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 11

  // WEEK 12
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 12) {
    // console.log(Notes122B.W12);
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes163.W12) {
      if (Notes163.W12[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes163.W12[day].split("_")[0];
        var link = Notes163.W12[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 12

  // WEEK 13
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 13) {
    // console.log(Notes122B.W13);
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes163.W13) {
      if (Notes163.W13[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes163.W13[day].split("_")[0];
        var link = Notes163.W13[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 13

  // WEEK 14
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 14) {
    // console.log(Notes122B.W14);
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes163.W14) {
      if (Notes163.W14[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes163.W14[day].split("_")[0];
        var link = Notes163.W14[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 14

  // WEEK 15
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 15) {
    // console.log(Notes122B.W15);
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes163.W15) {
      if (Notes163.W15[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes163.W15[day].split("_")[0];
        var link = Notes163.W15[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 15

  // WEEK 16
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 16) {
    // console.log(Notes122B.W16);
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes163.W16) {
      if (Notes163.W16[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes163.W16[day].split("_")[0];
        var link = Notes163.W16[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 16

  // WEEK 17
  if (document.getElementById("courseCurrent1-Selector").selectedIndex == 17) {
    // console.log(Notes122B.W17);
    $("#courseCurrent1-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes163.W17) {
      if (Notes163.W17[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes163.W17[day].split("_")[0];
        var link = Notes163.W17[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseCurrent1-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseCurrent1-Content").style.maxHeight = String(defaultHeightC + variableHeight*counter) + "px";
    }
  } //  END WEEK 17

}

function loadedTabletop() {
  $("#courseInfoTitleCurrent1").html("<b>Current Course Information</b>");
  $("#courseInfoTitleFall").html("<b>Past Courses</b>");
  loadNotes();
}
