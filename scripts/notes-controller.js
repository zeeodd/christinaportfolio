function loadNotes() {

  // *** MATH 122A NOTES MANAGER *** //

  // DEFAULT
  // if (document.getElementById("courseA-Selector").selectedIndex == 0) {
  //   $("#courseA-Notes").html("");
  //   document.getElementById("courseA-Content").style.maxHeight = "347px";
  // }

  // WEEK 1
  if (document.getElementById("courseA-Selector").selectedIndex == 1) {
    // console.log(Notes122A.W1);
    $("#courseA-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes122A.W1) {
      if (Notes122A.W1[day] != "") {
        counter++;
        var newSpan = document.createElement('span')
        newSpan.innerHTML = String(day) + ": " + String(Notes122A.W1[day]) + "<br/>";
        document.getElementById("courseA-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseA-Content").style.maxHeight = "347px";
    } else if (counter == 1) {
      document.getElementById("courseA-Content").style.maxHeight = "372px";
    } else if (counter == 2) {
      document.getElementById("courseA-Content").style.maxHeight = "397px";
    } else if (counter == 3) {
      document.getElementById("courseA-Content").style.maxHeight = "422px";
    } else if (counter == 4) {
      document.getElementById("courseA-Content").style.maxHeight = "447px";
    } else if (counter == 5) {
      document.getElementById("courseA-Content").style.maxHeight = "472px";
    }
  } //  END WEEK 1

  // WEEK 2
  if (document.getElementById("courseA-Selector").selectedIndex == 2) {
    console.log(Notes122A.W2);
    $("#courseA-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes122A.W2) {
      if (Notes122A.W2[day] != "") {
        counter++;
        var newSpan = document.createElement('span')
        newSpan.innerHTML = String(day) + ": " + String(Notes122A.W2[day]) + "<br/>";
        document.getElementById("courseA-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseA-Content").style.maxHeight = "347px";
    } else if (counter == 1) {
      document.getElementById("courseA-Content").style.maxHeight = "372px";
    } else if (counter == 2) {
      document.getElementById("courseA-Content").style.maxHeight = "397px";
    } else if (counter == 3) {
      document.getElementById("courseA-Content").style.maxHeight = "422px";
    } else if (counter == 4) {
      document.getElementById("courseA-Content").style.maxHeight = "447px";
    } else if (counter == 5) {
      document.getElementById("courseA-Content").style.maxHeight = "472px";
    }
  } // END WEEK 2

  // WEEK 3
  if (document.getElementById("courseA-Selector").selectedIndex == 3) {
    // console.log(Notes122A.W3);
    $("#courseA-Notes").html(""); // clear current html
    var counter = 0;
    for (var day in Notes122A.W3) {
      if (Notes122A.W3[day] != "") {
        counter++;
        var newSpan = document.createElement('span')
        newSpan.innerHTML = String(day) + ": " + String(Notes122A.W3[day]) + "<br/>";
        document.getElementById("courseA-Notes").appendChild(newSpan);
      }
    } // END for-loop
    if (counter == 0) {
      document.getElementById("courseA-Content").style.maxHeight = "347px";
    } else if (counter == 1) {
      document.getElementById("courseA-Content").style.maxHeight = "372px";
    } else if (counter == 2) {
      document.getElementById("courseA-Content").style.maxHeight = "397px";
    } else if (counter == 3) {
      document.getElementById("courseA-Content").style.maxHeight = "422px";
    } else if (counter == 4) {
      document.getElementById("courseA-Content").style.maxHeight = "447px";
    } else if (counter == 5) {
      document.getElementById("courseA-Content").style.maxHeight = "472px";
    }
  } // END WEEK 3

}

function loadedTabletop() {
  loadNotes();
}
