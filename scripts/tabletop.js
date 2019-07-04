var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/18RYAcvE1_zJRDzjXgJKkwgT9DPeCV30dVjMVvPkaJCM/edit?usp=sharing';

function init() {
  Tabletop.init( { key: publicSpreadsheetUrl,
                   callback: showInfo,
                   simpleSheet: false } )
}

var Notes122A;
var Notes122B;
const WEEKS122A = 3;
const WEEKS122B = 13;

function showInfo(data, tabletop) {

  // ***** MATH 122A HOMEWORK CONTROLLER ***** //

  // Week 1 Homework
  if (data["MATH 122A HOMEWORK"].elements[0].W1_Name == "" || data["MATH 122A HOMEWORK"].elements[0].W1_PDF == "") {
    $("#courseA-W1").html("Week 1");
  } else {
    $("#courseA-W1").html("Week 1: " + '<a href=' + String(data["MATH 122A HOMEWORK"].elements[0].W1_PDF) + ' target="_blank">' + String(data["MATH 122A HOMEWORK"].elements[0].W1_Name) + '</a>');
  }

  // Week 2 Homework
  if (data["MATH 122A HOMEWORK"].elements[0].W2_Name == "" || data["MATH 122A HOMEWORK"].elements[0].W2_PDF == "") {
    $("#courseA-W2").html("Week 2");
  } else {
    $("#courseA-W2").html("Week 2: " + '<a href=' + String(data["MATH 122A HOMEWORK"].elements[0].W2_PDF) + ' target="_blank">' + String(data["MATH 122A HOMEWORK"].elements[0].W2_Name) + '</a>');
  }

  // Week 3 Homework
  if (data["MATH 122A HOMEWORK"].elements[0].W3_Name == "" || data["MATH 122A HOMEWORK"].elements[0].W3_PDF == "") {
    $("#courseA-W3").html("Week 3");
  } else {
    $("#courseA-W3").html("Week 3: " + '<a href=' + String(data["MATH 122A HOMEWORK"].elements[0].W3_PDF) + ' target="_blank">' + String(data["MATH 122A HOMEWORK"].elements[0].W3_Name) + '</a>');
  }

  // ***** MATH 122B HOMEWORK CONTROLLER ***** //

  // Week 1 Homework
  if (data["MATH 122B HOMEWORK"].elements[0].W1_Name == "" || data["MATH 122B HOMEWORK"].elements[0].W1_PDF == "") {
    $("#courseB-W1").html("Week 1");
  } else {
    $("#courseB-W1").html("Week 1: " + '<a href=' + String(data["MATH 122B HOMEWORK"].elements[0].W1_PDF) + ' target="_blank">' + String(data["MATH 122B HOMEWORK"].elements[0].W1_Name) + '</a>');
  }

  // Week 2 Homework
  if (data["MATH 122B HOMEWORK"].elements[0].W2_Name == "" || data["MATH 122B HOMEWORK"].elements[0].W2_PDF == "") {
    $("#courseB-W2").html("Week 2");
  } else {
    $("#courseB-W2").html("Week 2: " + '<a href=' + String(data["MATH 122B HOMEWORK"].elements[0].W2_PDF) + ' target="_blank">' + String(data["MATH 122B HOMEWORK"].elements[0].W2_Name) + '</a>');
  }

  // Week 3 Homework
  if (data["MATH 122B HOMEWORK"].elements[0].W3_Name == "" || data["MATH 122B HOMEWORK"].elements[0].W3_PDF == "") {
    $("#courseB-W3").html("Week 3");
  } else {
    $("#courseB-W3").html("Week 3: " + '<a href=' + String(data["MATH 122B HOMEWORK"].elements[0].W3_PDF) + ' target="_blank">' + String(data["MATH 122B HOMEWORK"].elements[0].W3_Name) + '</a>');
  }

  // Week 4 Homework
  if (data["MATH 122B HOMEWORK"].elements[0].W4_Name == "" || data["MATH 122B HOMEWORK"].elements[0].W4_PDF == "") {
    $("#courseB-W4").html("Week 4");
  } else {
    $("#courseB-W4").html("Week 4: " + '<a href=' + String(data["MATH 122B HOMEWORK"].elements[0].W4_PDF) + ' target="_blank">' + String(data["MATH 122B HOMEWORK"].elements[0].W4_Name) + '</a>');
  }

  // Week 5 Homework
  if (data["MATH 122B HOMEWORK"].elements[0].W5_Name == "" || data["MATH 122B HOMEWORK"].elements[0].W5_PDF == "") {
    $("#courseB-W5").html("Week 5");
  } else {
    $("#courseB-W5").html("Week 5: " + '<a href=' + String(data["MATH 122B HOMEWORK"].elements[0].W5_PDF) + ' target="_blank">' + String(data["MATH 122B HOMEWORK"].elements[0].W5_Name) + '</a>');
  }

  // Week 6 Homework
  if (data["MATH 122B HOMEWORK"].elements[0].W6_Name == "" || data["MATH 122B HOMEWORK"].elements[0].W6_PDF == "") {
    $("#courseB-W6").html("Week 6");
  } else {
    $("#courseB-W6").html("Week 6: " + '<a href=' + String(data["MATH 122B HOMEWORK"].elements[0].W6_PDF) + ' target="_blank">' + String(data["MATH 122B HOMEWORK"].elements[0].W6_Name) + '</a>');
  }

  // ...
  // ...
  // ...

  // ***** MATH 122A HOMEWORK NOTES MANAGER ***** //

  // This for loop checks if there are any undefined weeks
  // (weeks without any notes yet), and if so, it creates
  // a template week so it doesn't return undefined
  for (var i = 0; i < WEEKS122A; i++) {
    if (data["MATH 122A NOTES"].elements[i] == undefined) {
      data["MATH 122A NOTES"].elements[i] = {
        Monday: "",
        Tuesday: "",
        Wednesday: "",
        Thursday: "",
        Friday: ""
      }
    }
  }

  var Notes122ACallback = {
    W1: data["MATH 122A NOTES"].elements[0],
    W2: data["MATH 122A NOTES"].elements[1],
    W3: data["MATH 122A NOTES"].elements[2]
  }

  Notes122A = Notes122ACallback;

  // ***** MATH 122B HOMEWORK NOTES MANAGER ***** //

  for (var i = 0; i < WEEKS122B; i++) {
    if (data["MATH 122B NOTES"].elements[i] == undefined) {
      data["MATH 122B NOTES"].elements[i] = {
        Monday: "",
        Tuesday: "",
        Wednesday: "",
        Thursday: "",
        Friday: ""
      }
    }
  }

  var Notes122BCallback = {
    W1: data["MATH 122B NOTES"].elements[0],
    W2: data["MATH 122B NOTES"].elements[1],
    W3: data["MATH 122B NOTES"].elements[2],
    W4: data["MATH 122B NOTES"].elements[3],
    W5: data["MATH 122B NOTES"].elements[4],
    W6: data["MATH 122B NOTES"].elements[5],
    W7: data["MATH 122B NOTES"].elements[6],
    W8: data["MATH 122B NOTES"].elements[7],
    W9: data["MATH 122B NOTES"].elements[8],
    W10: data["MATH 122B NOTES"].elements[9],
  }

  Notes122B = Notes122BCallback;

  // ***** ONCE DONE, CALL THE LOADED FUNCTION ***** //

  loadedTabletop();

};

window.addEventListener('DOMContentLoaded', init)
