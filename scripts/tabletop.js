var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/18RYAcvE1_zJRDzjXgJKkwgT9DPeCV30dVjMVvPkaJCM/edit?usp=sharing';

function init() {
  Tabletop.init( { key: publicSpreadsheetUrl,
                   callback: showInfo,
                   simpleSheet: false } )
}

var Notes196L;
var Notes122B;
const WEEKS196L = 3;
const WEEKS122B = 13;

function showInfo(data, tabletop) {

  // ***** ANNOUNCEMENTS CONTROLLER ***** //

  console.log(data)

  if (data["ANNOUNCEMENTS"].elements[0].Announcement == "None") {
    $("#announcementBody").html("Nothing yet.");
  } else {
    $("#announcementBody").html(String(data["ANNOUNCEMENTS"].elements[0].Announcement));
  }

  // ***** MATH 196L HOMEWORK CONTROLLER ***** //

  // Week 1 Homework
  if (data["MATH 196L HOMEWORK"].elements[0].W1_Name == "" || data["MATH 196L HOMEWORK"].elements[0].W1_PDF == "") {
    $("#courseA-W1").html("Week 1");
  } else {
    $("#courseA-W1").html("Week 1: " + '<a href=' + String(data["MATH 196L HOMEWORK"].elements[0].W1_PDF) + ' target="_blank">' + String(data["MATH 196L HOMEWORK"].elements[0].W1_Name) + '</a>');
  }

  // Week 2 Homework
  if (data["MATH 196L HOMEWORK"].elements[0].W2_Name == "" || data["MATH 196L HOMEWORK"].elements[0].W2_PDF == "") {
    $("#courseA-W2").html("Week 2");
  } else {
    $("#courseA-W2").html("Week 2: " + '<a href=' + String(data["MATH 196L HOMEWORK"].elements[0].W2_PDF) + ' target="_blank">' + String(data["MATH 196L HOMEWORK"].elements[0].W2_Name) + '</a>');
  }

  // Week 3 Homework
  if (data["MATH 196L HOMEWORK"].elements[0].W3_Name == "" || data["MATH 196L HOMEWORK"].elements[0].W3_PDF == "") {
    $("#courseA-W3").html("Week 3");
  } else {
    $("#courseA-W3").html("Week 3: " + '<a href=' + String(data["MATH 196L HOMEWORK"].elements[0].W3_PDF) + ' target="_blank">' + String(data["MATH 196L HOMEWORK"].elements[0].W3_Name) + '</a>');
  }

  // Week 4 Homework
  if (data["MATH 196L HOMEWORK"].elements[0].W4_Name == "" || data["MATH 196L HOMEWORK"].elements[0].W4_PDF == "") {
    $("#courseA-W4").html("Week 4");
  } else {
    $("#courseA-W4").html("Week 4: " + '<a href=' + String(data["MATH 196L HOMEWORK"].elements[0].W4_PDF) + ' target="_blank">' + String(data["MATH 196L HOMEWORK"].elements[0].W4_Name) + '</a>');
  }

  // Week 5 Homework
  if (data["MATH 196L HOMEWORK"].elements[0].W5_Name == "" || data["MATH 196L HOMEWORK"].elements[0].W5_PDF == "") {
    $("#courseA-W5").html("Week 5");
  } else {
    $("#courseA-W5").html("Week 5: " + '<a href=' + String(data["MATH 196L HOMEWORK"].elements[0].W5_PDF) + ' target="_blank">' + String(data["MATH 196L HOMEWORK"].elements[0].W5_Name) + '</a>');
  }

  // Week 6 Homework
  if (data["MATH 196L HOMEWORK"].elements[0].W6_Name == "" || data["MATH 196L HOMEWORK"].elements[0].W6_PDF == "") {
    $("#courseA-W6").html("Week 6");
  } else {
    $("#courseA-W6").html("Week 6: " + '<a href=' + String(data["MATH 196L HOMEWORK"].elements[0].W6_PDF) + ' target="_blank">' + String(data["MATH 196L HOMEWORK"].elements[0].W6_Name) + '</a>');
  }

  // Week 7 Homework
  if (data["MATH 196L HOMEWORK"].elements[0].W7_Name == "" || data["MATH 196L HOMEWORK"].elements[0].W7_PDF == "") {
    $("#courseA-W7").html("Week 7");
  } else {
    $("#courseA-W7").html("Week 7: " + '<a href=' + String(data["MATH 196L HOMEWORK"].elements[0].W7_PDF) + ' target="_blank">' + String(data["MATH 196L HOMEWORK"].elements[0].W7_Name) + '</a>');
  }

  // Week 8 Homework
  if (data["MATH 196L HOMEWORK"].elements[0].W8_Name == "" || data["MATH 196L HOMEWORK"].elements[0].W8_PDF == "") {
    $("#courseA-W8").html("Week 8");
  } else {
    $("#courseA-W8").html("Week 8: " + '<a href=' + String(data["MATH 196L HOMEWORK"].elements[0].W8_PDF) + ' target="_blank">' + String(data["MATH 196L HOMEWORK"].elements[0].W8_Name) + '</a>');
  }

  // Week 9 Homework
  if (data["MATH 196L HOMEWORK"].elements[0].W9_Name == "" || data["MATH 196L HOMEWORK"].elements[0].W9_PDF == "") {
    $("#courseA-W9").html("Week 9");
  } else {
    $("#courseA-W9").html("Week 9: " + '<a href=' + String(data["MATH 196L HOMEWORK"].elements[0].W9_PDF) + ' target="_blank">' + String(data["MATH 196L HOMEWORK"].elements[0].W9_Name) + '</a>');
  }

  // Week 10 Homework
  if (data["MATH 196L HOMEWORK"].elements[0].W10_Name == "" || data["MATH 196L HOMEWORK"].elements[0].W10_PDF == "") {
    $("#courseA-W10").html("Week 10");
  } else {
    $("#courseA-W10").html("Week 10: " + '<a href=' + String(data["MATH 196L HOMEWORK"].elements[0].W10_PDF) + ' target="_blank">' + String(data["MATH 196L HOMEWORK"].elements[0].W10_Name) + '</a>');
  }

  // Week 11 Homework
  if (data["MATH 196L HOMEWORK"].elements[0].W11_Name == "" || data["MATH 196L HOMEWORK"].elements[0].W11_PDF == "") {
    $("#courseA-W11").html("Week 11");
  } else {
    $("#courseA-W11").html("Week 11: " + '<a href=' + String(data["MATH 196L HOMEWORK"].elements[0].W11_PDF) + ' target="_blank">' + String(data["MATH 196L HOMEWORK"].elements[0].W11_Name) + '</a>');
  }

  // Week 12 Homework
  if (data["MATH 196L HOMEWORK"].elements[0].W12_Name == "" || data["MATH 196L HOMEWORK"].elements[0].W12_PDF == "") {
    $("#courseA-W12").html("Week 12");
  } else {
    $("#courseA-W12").html("Week 12: " + '<a href=' + String(data["MATH 196L HOMEWORK"].elements[0].W12_PDF) + ' target="_blank">' + String(data["MATH 196L HOMEWORK"].elements[0].W12_Name) + '</a>');
  }

  // Week 13 Homework
  if (data["MATH 196L HOMEWORK"].elements[0].W13_Name == "" || data["MATH 196L HOMEWORK"].elements[0].W13_PDF == "") {
    $("#courseA-W13").html("Week 13");
  } else {
    $("#courseA-W13").html("Week 13: " + '<a href=' + String(data["MATH 196L HOMEWORK"].elements[0].W13_PDF) + ' target="_blank">' + String(data["MATH 196L HOMEWORK"].elements[0].W13_Name) + '</a>');
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

  // Week 7 Homework
  if (data["MATH 122B HOMEWORK"].elements[0].W7_Name == "" || data["MATH 122B HOMEWORK"].elements[0].W7_PDF == "") {
    $("#courseB-W7").html("Week 7");
  } else {
    $("#courseB-W7").html("Week 7: " + '<a href=' + String(data["MATH 122B HOMEWORK"].elements[0].W7_PDF) + ' target="_blank">' + String(data["MATH 122B HOMEWORK"].elements[0].W7_Name) + '</a>');
  }

  // Week 8 Homework
  if (data["MATH 122B HOMEWORK"].elements[0].W8_Name == "" || data["MATH 122B HOMEWORK"].elements[0].W8_PDF == "") {
    $("#courseB-W8").html("Week 8");
  } else {
    $("#courseB-W8").html("Week 8: " + '<a href=' + String(data["MATH 122B HOMEWORK"].elements[0].W8_PDF) + ' target="_blank">' + String(data["MATH 122B HOMEWORK"].elements[0].W8_Name) + '</a>');
  }

  // Week 9 Homework
  if (data["MATH 122B HOMEWORK"].elements[0].W9_Name == "" || data["MATH 122B HOMEWORK"].elements[0].W9_PDF == "") {
    $("#courseB-W9").html("Week 9");
  } else {
    $("#courseB-W9").html("Week 9: " + '<a href=' + String(data["MATH 122B HOMEWORK"].elements[0].W9_PDF) + ' target="_blank">' + String(data["MATH 122B HOMEWORK"].elements[0].W9_Name) + '</a>');
  }

  // Week 10 Homework
  if (data["MATH 122B HOMEWORK"].elements[0].W10_Name == "" || data["MATH 122B HOMEWORK"].elements[0].W10_PDF == "") {
    $("#courseB-W10").html("Week 10");
  } else {
    $("#courseB-W10").html("Week 10: " + '<a href=' + String(data["MATH 122B HOMEWORK"].elements[0].W10_PDF) + ' target="_blank">' + String(data["MATH 122B HOMEWORK"].elements[0].W10_Name) + '</a>');
  }

  // Week 11 Homework
  if (data["MATH 122B HOMEWORK"].elements[0].W11_Name == "" || data["MATH 122B HOMEWORK"].elements[0].W11_PDF == "") {
    $("#courseB-W11").html("Week 11");
  } else {
    $("#courseB-W11").html("Week 11: " + '<a href=' + String(data["MATH 122B HOMEWORK"].elements[0].W11_PDF) + ' target="_blank">' + String(data["MATH 122B HOMEWORK"].elements[0].W11_Name) + '</a>');
  }

  // Week 12 Homework
  if (data["MATH 122B HOMEWORK"].elements[0].W12_Name == "" || data["MATH 122B HOMEWORK"].elements[0].W12_PDF == "") {
    $("#courseB-W12").html("Week 12");
  } else {
    $("#courseB-W12").html("Week 12: " + '<a href=' + String(data["MATH 122B HOMEWORK"].elements[0].W12_PDF) + ' target="_blank">' + String(data["MATH 122B HOMEWORK"].elements[0].W12_Name) + '</a>');
  }

  // Week 13 Homework
  if (data["MATH 122B HOMEWORK"].elements[0].W13_Name == "" || data["MATH 122B HOMEWORK"].elements[0].W13_PDF == "") {
    $("#courseB-W13").html("Week 13");
  } else {
    $("#courseB-W13").html("Week 13: " + '<a href=' + String(data["MATH 122B HOMEWORK"].elements[0].W13_PDF) + ' target="_blank">' + String(data["MATH 122B HOMEWORK"].elements[0].W13_Name) + '</a>');
  }

  // ***** MATH 196L HOMEWORK NOTES MANAGER ***** //

  // This for loop checks if there are any undefined weeks
  // (weeks without any notes yet), and if so, it creates
  // a template week so it doesn't return undefined
  for (var i = 0; i < WEEKS196L; i++) {
    if (data["MATH 196L NOTES"].elements[i] == undefined) {
      data["MATH 196L NOTES"].elements[i] = {
        Monday: ""
      }
    }
  }

  var Notes196LCallback = {
    W1: data["MATH 196L NOTES"].elements[0],
    W2: data["MATH 196L NOTES"].elements[1],
    W3: data["MATH 196L NOTES"].elements[2],
    W4: data["MATH 196L NOTES"].elements[3],
    W5: data["MATH 196L NOTES"].elements[4],
    W6: data["MATH 196L NOTES"].elements[5],
    W7: data["MATH 196L NOTES"].elements[6],
    W8: data["MATH 196L NOTES"].elements[7],
    W9: data["MATH 196L NOTES"].elements[8],
    W10: data["MATH 196L NOTES"].elements[9],
    W11: data["MATH 196L NOTES"].elements[10],
    W12: data["MATH 196L NOTES"].elements[11],
    W13: data["MATH 196L NOTES"].elements[12]
  }

  Notes196L = Notes196LCallback;

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
    W11: data["MATH 122B NOTES"].elements[10],
    W12: data["MATH 122B NOTES"].elements[11],
    W13: data["MATH 122B NOTES"].elements[12],
  }

  Notes122B = Notes122BCallback;

  // ***** ONCE DONE, CALL THE LOADED FUNCTION ***** //

  loadedTabletop();

};

window.addEventListener('DOMContentLoaded', init);
