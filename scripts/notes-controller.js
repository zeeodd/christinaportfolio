function loadNotes() {

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var defaultHeightA = 797;
    var defaultHeightB = 722;
    var variableHeight = 65;
  } else {
    var defaultHeightA = 597;
    var defaultHeightB = 597;
    var variableHeight = 25;
  }

  // console.log("196L: ", Notes196L);
  // console.log("122B: ", Notes122B);

  // ***** MATH 196L NOTES CONTROLLER ***** //

  // WEEK 1
  if (document.getElementById("courseA-Selector").selectedIndex == 1) {
    // console.log(Notes196L.W1);
    $("#courseA-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes196L.W1) {
      if (Notes196L.W1[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes196L.W1[day].split("_")[0];
        var link = Notes196L.W1[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseA-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseA-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight*counter) + "px";
    }
  } //  END WEEK 1

  // WEEK 2
  if (document.getElementById("courseA-Selector").selectedIndex == 2) {
    console.log(Notes196L.W2);
    $("#courseA-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes196L.W2) {
      if (Notes196L.W2[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes196L.W2[day].split("_")[0];
        var link = Notes196L.W2[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseA-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseA-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight*counter) + "px";
    }
  } // END WEEK 2

  // WEEK 3
  if (document.getElementById("courseA-Selector").selectedIndex == 3) {
    // console.log(Notes196L.W3);
    $("#courseA-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes196L.W3) {
      if (Notes196L.W3[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes196L.W3[day].split("_")[0];
        var link = Notes196L.W3[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseA-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseA-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight*counter) + "px";
    }
  } // END WEEK 3

  // WEEK 4
  if (document.getElementById("courseA-Selector").selectedIndex == 4) {
    // console.log(Notes196L.W3);
    $("#courseA-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes196L.W4) {
      if (Notes196L.W4[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes196L.W4[day].split("_")[0];
        var link = Notes196L.W4[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseA-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseA-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight*counter) + "px";
    }
  } // END WEEK 4

  // WEEK 5
  if (document.getElementById("courseA-Selector").selectedIndex == 5) {
    // console.log(Notes196L.W3);
    $("#courseA-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes196L.W5) {
      if (Notes196L.W5[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes196L.W5[day].split("_")[0];
        var link = Notes196L.W5[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseA-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseA-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight*counter) + "px";
    }
  } // END WEEK 5

  // WEEK 6
  if (document.getElementById("courseA-Selector").selectedIndex == 6) {
    // console.log(Notes196L.W3);
    $("#courseA-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes196L.W6) {
      if (Notes196L.W6[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes196L.W6[day].split("_")[0];
        var link = Notes196L.W6[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseA-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseA-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight*counter) + "px";
    }
  } // END WEEK 6

  // WEEK 7
  if (document.getElementById("courseA-Selector").selectedIndex == 7) {
    // console.log(Notes196L.W3);
    $("#courseA-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes196L.W7) {
      if (Notes196L.W7[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes196L.W7[day].split("_")[0];
        var link = Notes196L.W7[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseA-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseA-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight*counter) + "px";
    }
  } // END WEEK 7

  // WEEK 8
  if (document.getElementById("courseA-Selector").selectedIndex == 8) {
    // console.log(Notes196L.W3);
    $("#courseA-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes196L.W8) {
      if (Notes196L.W8[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes196L.W8[day].split("_")[0];
        var link = Notes196L.W8[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseA-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseA-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight*counter) + "px";
    }
  } // END WEEK 8

  // WEEK 9
  if (document.getElementById("courseA-Selector").selectedIndex == 9) {
    // console.log(Notes196L.W3);
    $("#courseA-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes196L.W9) {
      if (Notes196L.W9[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes196L.W9[day].split("_")[0];
        var link = Notes196L.W9[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseA-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseA-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight*counter) + "px";
    }
  } // END WEEK 9

  // WEEK 10
  if (document.getElementById("courseA-Selector").selectedIndex == 10) {
    // console.log(Notes196L.W3);
    $("#courseA-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes196L.W10) {
      if (Notes196L.W10[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes196L.W10[day].split("_")[0];
        var link = Notes196L.W10[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseA-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseA-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight*counter) + "px";
    }
  } // END WEEK 10

  // WEEK 11
  if (document.getElementById("courseA-Selector").selectedIndex == 11) {
    // console.log(Notes196L.W3);
    $("#courseA-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes196L.W11) {
      if (Notes196L.W11[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes196L.W11[day].split("_")[0];
        var link = Notes196L.W11[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseA-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseA-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight*counter) + "px";
    }
  } // END WEEK 11

  // WEEK 12
  if (document.getElementById("courseA-Selector").selectedIndex == 12) {
    // console.log(Notes196L.W3);
    $("#courseA-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes196L.W12) {
      if (Notes196L.W12[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes196L.W12[day].split("_")[0];
        var link = Notes196L.W12[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseA-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseA-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight*counter) + "px";
    }
  } // END WEEK 12

  // WEEK 13
  if (document.getElementById("courseA-Selector").selectedIndex == 13) {
    // console.log(Notes196L.W3);
    $("#courseA-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes196L.W13) {
      if (Notes196L.W13[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes196L.W13[day].split("_")[0];
        var link = Notes196L.W13[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseA-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseA-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseA-Content").style.maxHeight = String(defaultHeightA + variableHeight*counter) + "px";
    }
  } // END WEEK 13

  // ***** MATH 122B NOTES CONTROLLER ***** //

  // WEEK 1
  if (document.getElementById("courseB-Selector").selectedIndex == 1) {
    // console.log(Notes122B.W1);
    $("#courseB-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes122B.W1) {
      if (Notes122B.W1[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes122B.W1[day].split("_")[0];
        var link = Notes122B.W1[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseB-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseB-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight*counter) + "px";
    }
  } //  END WEEK 1

  // WEEK 2
  if (document.getElementById("courseB-Selector").selectedIndex == 2) {
    // console.log(Notes122B.W2);
    $("#courseB-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes122B.W2) {
      if (Notes122B.W2[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes122B.W2[day].split("_")[0];
        var link = Notes122B.W2[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseB-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseB-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight*counter) + "px";
    }
  } //  END WEEK 2

  // WEEK 3
  if (document.getElementById("courseB-Selector").selectedIndex == 3) {
    // console.log(Notes122B.W3);
    $("#courseB-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes122B.W3) {
      if (Notes122B.W3[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes122B.W3[day].split("_")[0];
        var link = Notes122B.W3[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseB-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseB-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight*counter) + "px";
    }
  } //  END WEEK 3

  // WEEK 4
  if (document.getElementById("courseB-Selector").selectedIndex == 4) {
    // console.log(Notes122B.W4);
    $("#courseB-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes122B.W4) {
      if (Notes122B.W4[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes122B.W4[day].split("_")[0];
        var link = Notes122B.W4[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseB-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseB-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight*counter) + "px";
    }
  } //  END WEEK 4

  // WEEK 5
  if (document.getElementById("courseB-Selector").selectedIndex == 5) {
    // console.log(Notes122B.W5);
    $("#courseB-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes122B.W5) {
      if (Notes122B.W5[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes122B.W5[day].split("_")[0];
        var link = Notes122B.W5[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseB-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseB-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight*counter) + "px";
    }
  } //  END WEEK 5

  // WEEK 6
  if (document.getElementById("courseB-Selector").selectedIndex == 6) {
    // console.log(Notes122B.W6);
    $("#courseB-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes122B.W6) {
      if (Notes122B.W6[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes122B.W6[day].split("_")[0];
        var link = Notes122B.W6[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseB-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseB-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight*counter) + "px";
    }
  } //  END WEEK 6

  // WEEK 7
  if (document.getElementById("courseB-Selector").selectedIndex == 7) {
    // console.log(Notes122B.W7);
    $("#courseB-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes122B.W7) {
      if (Notes122B.W7[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes122B.W7[day].split("_")[0];
        var link = Notes122B.W7[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseB-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseB-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight*counter) + "px";
    }
  } //  END WEEK 7

  // WEEK 8
  if (document.getElementById("courseB-Selector").selectedIndex == 8) {
    // console.log(Notes122B.W8);
    $("#courseB-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes122B.W8) {
      if (Notes122B.W8[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes122B.W8[day].split("_")[0];
        var link = Notes122B.W8[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseB-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseB-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight*counter) + "px";
    }
  } //  END WEEK 8

  // WEEK 9
  if (document.getElementById("courseB-Selector").selectedIndex == 9) {
    // console.log(Notes122B.W9);
    $("#courseB-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes122B.W9) {
      if (Notes122B.W9[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes122B.W9[day].split("_")[0];
        var link = Notes122B.W9[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseB-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseB-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight*counter) + "px";
    }
  } //  END WEEK 9

  // WEEK 10
  if (document.getElementById("courseB-Selector").selectedIndex == 10) {
    // console.log(Notes122B.W10);
    $("#courseB-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes122B.W10) {
      if (Notes122B.W10[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes122B.W10[day].split("_")[0];
        var link = Notes122B.W10[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseB-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseB-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight*counter) + "px";
    }
  } //  END WEEK 10

  // WEEK 11
  if (document.getElementById("courseB-Selector").selectedIndex == 11) {
    // console.log(Notes122B.W11);
    $("#courseB-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes122B.W11) {
      if (Notes122B.W11[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes122B.W11[day].split("_")[0];
        var link = Notes122B.W11[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseB-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseB-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight*counter) + "px";
    }
  } //  END WEEK 11

  // WEEK 12
  if (document.getElementById("courseB-Selector").selectedIndex == 12) {
    // console.log(Notes122B.W12);
    $("#courseB-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes122B.W12) {
      if (Notes122B.W12[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes122B.W12[day].split("_")[0];
        var link = Notes122B.W12[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseB-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseB-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight*counter) + "px";
    }
  } //  END WEEK 12

  // WEEK 13
  if (document.getElementById("courseB-Selector").selectedIndex == 13) {
    // console.log(Notes122B.W13);
    $("#courseB-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes122B.W13) {
      if (Notes122B.W13[day] != "") {
        counter++;
        var newSpan = document.createElement('span');
        var title = Notes122B.W13[day].split("_")[0];
        var link = Notes122B.W13[day].split("_")[1];
        newSpan.innerHTML = String(day) + ": " + '<a href=' + String(link) + ' target="_blank">' + String(title) + '</a>' + "<br/>";
        document.getElementById("courseB-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight) + "px";
      var newSpan = document.createElement('span');
      newSpan.innerHTML = "Nothing yet.";
      document.getElementById("courseB-Notes").appendChild(newSpan);
    } else {
      document.getElementById("courseB-Content").style.maxHeight = String(defaultHeightB + variableHeight*counter) + "px";
    }
  } //  END WEEK 13

}

function loadedTabletop() {
  $("#courseInfoTitle").html("<b>Course Information</b>");
  loadNotes();
}
