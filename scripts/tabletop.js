var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/18RYAcvE1_zJRDzjXgJKkwgT9DPeCV30dVjMVvPkaJCM/edit?usp=sharing';

function init() {
  Tabletop.init( { key: publicSpreadsheetUrl,
                   callback: showInfo,
                   simpleSheet: false } )
}

// ***** COURSE TABLE ***** //
// Current 1 = MATH 129
// Current 2 = MATH 475A

var NotesCurrent1;
var NotesCurrent2;
const WEEKSCURRENT1 = 16;
const WEEKSCURRENT2= 16;

function showInfo(data, tabletop) {

  // ***** ANNOUNCEMENTS CONTROLLER ***** //

  console.log(data);

  // Current Course 1
  if (data["ANNOUNCEMENTS"].elements[0].Announcement129 == "None") {
    $("#announcementBodyCurrent1").html("Nothing yet.");
  } else {
    $("#announcementBodyCurrent1").html(String(data["ANNOUNCEMENTS"].elements[0].Announcement129));
  }

  // ***** EXCEL PROJECTS CONTROLLER ***** //

  // EXCEL PROJECT 1
  if (data["EXCEL PROJECTS"].elements[0].Project1 == "None") {
    $("#excel1").html("Excel Project #1");
  } else {
    $("#excel1").html('<a href=' + String(data["EXCEL PROJECTS"].elements[0].Project1) + ' target="_blank">' + "Excel Project #1" + '</a>');
  }

  // EXCEL PROJECT 2
  if (data["EXCEL PROJECTS"].elements[0].Project2 == "None") {
    $("#excel2").html("Excel Project #2");
  } else {
    $("#excel2").html('<a href=' + String(data["EXCEL PROJECTS"].elements[0].Project2) + ' target="_blank">' + "Excel Project #2" + '</a>');
  }

  // EXCEL PROJECT 3
  if (data["EXCEL PROJECTS"].elements[0].Project3 == "None") {
    $("#excel3").html("Excel Project #3");
  } else {
    $("#excel3").html('<a href=' + String(data["EXCEL PROJECTS"].elements[0].Project3) + ' target="_blank">' + "Excel Project #3" + '</a>');
  }

  // ***** CURRNET COURSE 1 HOMEWORK CONTROLLER ***** //

  // Week 1 Homework
  if (data["MATH 129 HOMEWORK"].elements[0].W1_Name == "" || data["MATH 129 HOMEWORK"].elements[0].W1_PDF == "") {
    $("#courseCurrent1-W1").html("Week 1");
  } else {
    $("#courseCurrent1-W1").html("Week 1: " + '<a href=' + String(data["MATH 129 HOMEWORK"].elements[0].W1_PDF) + ' target="_blank">' + String(data["MATH 129 HOMEWORK"].elements[0].W1_Name) + '</a>');
  }

  // Week 2 Homework
  if (data["MATH 129 HOMEWORK"].elements[0].W2_Name == "" || data["MATH 129 HOMEWORK"].elements[0].W2_PDF == "") {
    $("#courseCurrent1-W2").html("Week 2");
  } else {
    $("#courseCurrent1-W2").html("Week 2: " + '<a href=' + String(data["MATH 129 HOMEWORK"].elements[0].W2_PDF) + ' target="_blank">' + String(data["MATH 129 HOMEWORK"].elements[0].W2_Name) + '</a>');
  }

  // Week 3 Homework
  if (data["MATH 129 HOMEWORK"].elements[0].W3_Name == "" || data["MATH 129 HOMEWORK"].elements[0].W3_PDF == "") {
    $("#courseCurrent1-W3").html("Week 3");
  } else {
    $("#courseCurrent1-W3").html("Week 3: " + '<a href=' + String(data["MATH 129 HOMEWORK"].elements[0].W3_PDF) + ' target="_blank">' + String(data["MATH 129 HOMEWORK"].elements[0].W3_Name) + '</a>');
  }

  // Week 4 Homework
  if (data["MATH 129 HOMEWORK"].elements[0].W4_Name == "" || data["MATH 129 HOMEWORK"].elements[0].W4_PDF == "") {
    $("#courseCurrent1-W4").html("Week 4");
  } else {
    $("#courseCurrent1-W4").html("Week 4: " + '<a href=' + String(data["MATH 129 HOMEWORK"].elements[0].W4_PDF) + ' target="_blank">' + String(data["MATH 129 HOMEWORK"].elements[0].W4_Name) + '</a>');
  }

  // Week 5 Homework
  if (data["MATH 129 HOMEWORK"].elements[0].W5_Name == "" || data["MATH 129 HOMEWORK"].elements[0].W5_PDF == "") {
    $("#courseCurrent1-W5").html("Week 5");
  } else {
    $("#courseCurrent1-W5").html("Week 5: " + '<a href=' + String(data["MATH 129 HOMEWORK"].elements[0].W5_PDF) + ' target="_blank">' + String(data["MATH 129 HOMEWORK"].elements[0].W5_Name) + '</a>');
  }

  // Week 6 Homework
  if (data["MATH 129 HOMEWORK"].elements[0].W6_Name == "" || data["MATH 129 HOMEWORK"].elements[0].W6_PDF == "") {
    $("#courseCurrent1-W6").html("Week 6");
  } else {
    $("#courseCurrent1-W6").html("Week 6: " + '<a href=' + String(data["MATH 129 HOMEWORK"].elements[0].W6_PDF) + ' target="_blank">' + String(data["MATH 129 HOMEWORK"].elements[0].W6_Name) + '</a>');
  }

  // Week 7 Homework
  if (data["MATH 129 HOMEWORK"].elements[0].W7_Name == "" || data["MATH 129 HOMEWORK"].elements[0].W7_PDF == "") {
    $("#courseCurrent1-W7").html("Week 7");
  } else {
    $("#courseCurrent1-W7").html("Week 7: " + '<a href=' + String(data["MATH 129 HOMEWORK"].elements[0].W7_PDF) + ' target="_blank">' + String(data["MATH 129 HOMEWORK"].elements[0].W7_Name) + '</a>');
  }

  // Week 8 Homework
  if (data["MATH 129 HOMEWORK"].elements[0].W8_Name == "" || data["MATH 129 HOMEWORK"].elements[0].W8_PDF == "") {
    $("#courseCurrent1-W8").html("Week 8");
  } else {
    $("#courseCurrent1-W8").html("Week 8: " + '<a href=' + String(data["MATH 129 HOMEWORK"].elements[0].W8_PDF) + ' target="_blank">' + String(data["MATH 129 HOMEWORK"].elements[0].W8_Name) + '</a>');
  }

  // Week 9 Homework
  if (data["MATH 129 HOMEWORK"].elements[0].W9_Name == "" || data["MATH 129 HOMEWORK"].elements[0].W9_PDF == "") {
    $("#courseCurrent1-W9").html("Week 9");
  } else {
    $("#courseCurrent1-W9").html("Week 9: " + '<a href=' + String(data["MATH 129 HOMEWORK"].elements[0].W9_PDF) + ' target="_blank">' + String(data["MATH 129 HOMEWORK"].elements[0].W9_Name) + '</a>');
  }

  // Week 10 Homework
  if (data["MATH 129 HOMEWORK"].elements[0].W10_Name == "" || data["MATH 129 HOMEWORK"].elements[0].W10_PDF == "") {
    $("#courseCurrent1-W10").html("Week 10");
  } else {
    $("#courseCurrent1-W10").html("Week 10: " + '<a href=' + String(data["MATH 129 HOMEWORK"].elements[0].W10_PDF) + ' target="_blank">' + String(data["MATH 129 HOMEWORK"].elements[0].W10_Name) + '</a>');
  }

  // Week 11 Homework
  if (data["MATH 129 HOMEWORK"].elements[0].W11_Name == "" || data["MATH 129 HOMEWORK"].elements[0].W11_PDF == "") {
    $("#courseCurrent1-W11").html("Week 11");
  } else {
    $("#courseCurrent1-W11").html("Week 11: " + '<a href=' + String(data["MATH 129 HOMEWORK"].elements[0].W11_PDF) + ' target="_blank">' + String(data["MATH 129 HOMEWORK"].elements[0].W11_Name) + '</a>');
  }

  // Week 12 Homework
  if (data["MATH 129 HOMEWORK"].elements[0].W12_Name == "" || data["MATH 129 HOMEWORK"].elements[0].W12_PDF == "") {
    $("#courseCurrent1-W12").html("Week 12");
  } else {
    $("#courseCurrent1-W12").html("Week 12: " + '<a href=' + String(data["MATH 129 HOMEWORK"].elements[0].W12_PDF) + ' target="_blank">' + String(data["MATH 129 HOMEWORK"].elements[0].W12_Name) + '</a>');
  }

  // Week 13 Homework
  if (data["MATH 129 HOMEWORK"].elements[0].W13_Name == "" || data["MATH 129 HOMEWORK"].elements[0].W13_PDF == "") {
    $("#courseCurrent1-W13").html("Week 13");
  } else {
    $("#courseCurrent1-W13").html("Week 13: " + '<a href=' + String(data["MATH 129 HOMEWORK"].elements[0].W13_PDF) + ' target="_blank">' + String(data["MATH 129 HOMEWORK"].elements[0].W13_Name) + '</a>');
  }

  // Week 14 Homework
  if (data["MATH 129 HOMEWORK"].elements[0].W14_Name == "" || data["MATH 129 HOMEWORK"].elements[0].W14_PDF == "") {
    $("#courseCurrent1-W14").html("Week 14");
  } else {
    $("#courseCurrent1-W14").html("Week 14: " + '<a href=' + String(data["MATH 129 HOMEWORK"].elements[0].W14_PDF) + ' target="_blank">' + String(data["MATH 129 HOMEWORK"].elements[0].W14_Name) + '</a>');
  }

  // Week 15 Homework
  if (data["MATH 129 HOMEWORK"].elements[0].W15_Name == "" || data["MATH 129 HOMEWORK"].elements[0].W15_PDF == "") {
    $("#courseCurrent1-W15").html("Week 15");
  } else {
    $("#courseCurrent1-W15").html("Week 15: " + '<a href=' + String(data["MATH 129 HOMEWORK"].elements[0].W15_PDF) + ' target="_blank">' + String(data["MATH 129 HOMEWORK"].elements[0].W15_Name) + '</a>');
  }

  // Week 16 Homework
  if (data["MATH 129 HOMEWORK"].elements[0].W16_Name == "" || data["MATH 129 HOMEWORK"].elements[0].W16_PDF == "") {
    $("#courseCurrent1-W16").html("Week 16");
  } else {
    $("#courseCurrent1-W16").html("Week 16: " + '<a href=' + String(data["MATH 129 HOMEWORK"].elements[0].W16_PDF) + ' target="_blank">' + String(data["MATH 129 HOMEWORK"].elements[0].W16_Name) + '</a>');
  }

  // ***** CURRENT COURSE 2 HOMEWORK CONTROLLER ***** //

  // Week 1 Homework
  if (data["MATH 475A HOMEWORK"].elements[0].W1_Name == "" || data["MATH 475A HOMEWORK"].elements[0].W1_PDF == "") {
    $("#courseCurrent2-W1").html("Week 1");
  } else {
    $("#courseCurrent2-W1").html("Week 1: " + '<a href=' + String(data["MATH 475A HOMEWORK"].elements[0].W1_PDF) + ' target="_blank">' + String(data["MATH 475A HOMEWORK"].elements[0].W1_Name) + '</a>');
  }

  // Week 2 Homework
  if (data["MATH 475A HOMEWORK"].elements[0].W2_Name == "" || data["MATH 475A HOMEWORK"].elements[0].W2_PDF == "") {
    $("#courseCurrent2-W2").html("Week 2");
  } else {
    $("#courseCurrent2-W2").html("Week 2: " + '<a href=' + String(data["MATH 475A HOMEWORK"].elements[0].W2_PDF) + ' target="_blank">' + String(data["MATH 475A HOMEWORK"].elements[0].W2_Name) + '</a>');
  }

  // Week 3 Homework
  if (data["MATH 475A HOMEWORK"].elements[0].W3_Name == "" || data["MATH 475A HOMEWORK"].elements[0].W3_PDF == "") {
    $("#courseCurrent2-W3").html("Week 3");
  } else {
    $("#courseCurrent2-W3").html("Week 3: " + '<a href=' + String(data["MATH 475A HOMEWORK"].elements[0].W3_PDF) + ' target="_blank">' + String(data["MATH 475A HOMEWORK"].elements[0].W3_Name) + '</a>');
  }

  // Week 4 Homework
  if (data["MATH 475A HOMEWORK"].elements[0].W4_Name == "" || data["MATH 475A HOMEWORK"].elements[0].W4_PDF == "") {
    $("#courseCurrent2-W4").html("Week 4");
  } else {
    $("#courseCurrent2-W4").html("Week 4: " + '<a href=' + String(data["MATH 475A HOMEWORK"].elements[0].W4_PDF) + ' target="_blank">' + String(data["MATH 475A HOMEWORK"].elements[0].W4_Name) + '</a>');
  }

  // Week 5 Homework
  if (data["MATH 475A HOMEWORK"].elements[0].W5_Name == "" || data["MATH 475A HOMEWORK"].elements[0].W5_PDF == "") {
    $("#courseCurrent2-W5").html("Week 5");
  } else {
    $("#courseCurrent2-W5").html("Week 5: " + '<a href=' + String(data["MATH 475A HOMEWORK"].elements[0].W5_PDF) + ' target="_blank">' + String(data["MATH 475A HOMEWORK"].elements[0].W5_Name) + '</a>');
  }

  // Week 6 Homework
  if (data["MATH 475A HOMEWORK"].elements[0].W6_Name == "" || data["MATH 475A HOMEWORK"].elements[0].W6_PDF == "") {
    $("#courseCurrent2-W6").html("Week 6");
  } else {
    $("#courseCurrent2-W6").html("Week 6: " + '<a href=' + String(data["MATH 475A HOMEWORK"].elements[0].W6_PDF) + ' target="_blank">' + String(data["MATH 475A HOMEWORK"].elements[0].W6_Name) + '</a>');
  }

  // Week 7 Homework
  if (data["MATH 475A HOMEWORK"].elements[0].W7_Name == "" || data["MATH 475A HOMEWORK"].elements[0].W7_PDF == "") {
    $("#courseCurrent2-W7").html("Week 7");
  } else {
    $("#courseCurrent2-W7").html("Week 7: " + '<a href=' + String(data["MATH 475A HOMEWORK"].elements[0].W7_PDF) + ' target="_blank">' + String(data["MATH 475A HOMEWORK"].elements[0].W7_Name) + '</a>');
  }

  // Week 8 Homework
  if (data["MATH 475A HOMEWORK"].elements[0].W8_Name == "" || data["MATH 475A HOMEWORK"].elements[0].W8_PDF == "") {
    $("#courseCurrent2-W8").html("Week 8");
  } else {
    $("#courseCurrent2-W8").html("Week 8: " + '<a href=' + String(data["MATH 475A HOMEWORK"].elements[0].W8_PDF) + ' target="_blank">' + String(data["MATH 475A HOMEWORK"].elements[0].W8_Name) + '</a>');
  }

  // Week 9 Homework
  if (data["MATH 475A HOMEWORK"].elements[0].W9_Name == "" || data["MATH 475A HOMEWORK"].elements[0].W9_PDF == "") {
    $("#courseCurrent2-W9").html("Week 9");
  } else {
    $("#courseCurrent2-W9").html("Week 9: " + '<a href=' + String(data["MATH 475A HOMEWORK"].elements[0].W9_PDF) + ' target="_blank">' + String(data["MATH 475A HOMEWORK"].elements[0].W9_Name) + '</a>');
  }

  // Week 10 Homework
  if (data["MATH 475A HOMEWORK"].elements[0].W10_Name == "" || data["MATH 475A HOMEWORK"].elements[0].W10_PDF == "") {
    $("#courseCurrent2-W10").html("Week 10");
  } else {
    $("#courseCurrent2-W10").html("Week 10: " + '<a href=' + String(data["MATH 475A HOMEWORK"].elements[0].W10_PDF) + ' target="_blank">' + String(data["MATH 475A HOMEWORK"].elements[0].W10_Name) + '</a>');
  }

  // Week 11 Homework
  if (data["MATH 475A HOMEWORK"].elements[0].W11_Name == "" || data["MATH 475A HOMEWORK"].elements[0].W11_PDF == "") {
    $("#courseCurrent2-W11").html("Week 11");
  } else {
    $("#courseCurrent2-W11").html("Week 11: " + '<a href=' + String(data["MATH 475A HOMEWORK"].elements[0].W11_PDF) + ' target="_blank">' + String(data["MATH 475A HOMEWORK"].elements[0].W11_Name) + '</a>');
  }

  // Week 12 Homework
  if (data["MATH 475A HOMEWORK"].elements[0].W12_Name == "" || data["MATH 475A HOMEWORK"].elements[0].W12_PDF == "") {
    $("#courseCurrent2-W12").html("Week 12");
  } else {
    $("#courseCurrent2-W12").html("Week 12: " + '<a href=' + String(data["MATH 475A HOMEWORK"].elements[0].W12_PDF) + ' target="_blank">' + String(data["MATH 475A HOMEWORK"].elements[0].W12_Name) + '</a>');
  }

  // Week 13 Homework
  if (data["MATH 475A HOMEWORK"].elements[0].W13_Name == "" || data["MATH 475A HOMEWORK"].elements[0].W13_PDF == "") {
    $("#courseCurrent2-W13").html("Week 13");
  } else {
    $("#courseCurrent2-W13").html("Week 13: " + '<a href=' + String(data["MATH 475A HOMEWORK"].elements[0].W13_PDF) + ' target="_blank">' + String(data["MATH 475A HOMEWORK"].elements[0].W13_Name) + '</a>');
  }

  // Week 14 Homework
  if (data["MATH 475A HOMEWORK"].elements[0].W14_Name == "" || data["MATH 475A HOMEWORK"].elements[0].W14_PDF == "") {
    $("#courseCurrent2-W14").html("Week 14");
  } else {
    $("#courseCurrent2-W14").html("Week 14: " + '<a href=' + String(data["MATH 475A HOMEWORK"].elements[0].W14_PDF) + ' target="_blank">' + String(data["MATH 475A HOMEWORK"].elements[0].W14_Name) + '</a>');
  }

  // Week 15 Homework
  if (data["MATH 475A HOMEWORK"].elements[0].W15_Name == "" || data["MATH 475A HOMEWORK"].elements[0].W15_PDF == "") {
    $("#courseCurrent2-W15").html("Week 15");
  } else {
    $("#courseCurrent2-W15").html("Week 15: " + '<a href=' + String(data["MATH 475A HOMEWORK"].elements[0].W15_PDF) + ' target="_blank">' + String(data["MATH 475A HOMEWORK"].elements[0].W15_Name) + '</a>');
  }

  // Week 16 Homework
  if (data["MATH 475A HOMEWORK"].elements[0].W16_Name == "" || data["MATH 475A HOMEWORK"].elements[0].W16_PDF == "") {
    $("#courseCurrent2-W16").html("Week 16");
  } else {
    $("#courseCurrent2-W16").html("Week 16: " + '<a href=' + String(data["MATH 475A HOMEWORK"].elements[0].W16_PDF) + ' target="_blank">' + String(data["MATH 475A HOMEWORK"].elements[0].W16_Name) + '</a>');
  }

  // ***** CURRENT COURSE 1 HOMEWORK NOTES MANAGER ***** //

  // This for loop checks if there are any undefined weeks
  // (weeks without any notes yet), and if so, it creates
  // a template week so it doesn't return undefined
  for (var i = 0; i < WEEKSCURRENT1; i++) {
    if (data["MATH 129 NOTES"].elements[i] == undefined) {
      data["MATH 129 NOTES"].elements[i] = {
        Monday: "",
        Wednesday: "",
        Friday: ""
      }
    }
  }

  var NotesCurrent1Callback = {
    W1: data["MATH 129 NOTES"].elements[0],
    W2: data["MATH 129 NOTES"].elements[1],
    W3: data["MATH 129 NOTES"].elements[2],
    W4: data["MATH 129 NOTES"].elements[3],
    W5: data["MATH 129 NOTES"].elements[4],
    W6: data["MATH 129 NOTES"].elements[5],
    W7: data["MATH 129 NOTES"].elements[6],
    W8: data["MATH 129 NOTES"].elements[7],
    W9: data["MATH 129 NOTES"].elements[8],
    W10: data["MATH 129 NOTES"].elements[9],
    W11: data["MATH 129 NOTES"].elements[10],
    W12: data["MATH 129 NOTES"].elements[11],
    W13: data["MATH 129 NOTES"].elements[12],
    W14: data["MATH 129 NOTES"].elements[13],
    W15: data["MATH 129 NOTES"].elements[14],
    W16: data["MATH 129 NOTES"].elements[15]
  }

  NotesCurrent1 = NotesCurrent1Callback;

  // ***** CURRENT COURSE 2 HOMEWORK NOTES MANAGER ***** //

  for (var i = 0; i < WEEKSCURRENT2; i++) {
    if (data["MATH 475A NOTES"].elements[i] == undefined) {
      data["MATH 475A NOTES"].elements[i] = {
        Tuesday: "",
        Thursday: ""
      }
    }
  }

  var NotesCurrent2Callback = {
    W1: data["MATH 475A NOTES"].elements[0],
    W2: data["MATH 475A NOTES"].elements[1],
    W3: data["MATH 475A NOTES"].elements[2],
    W4: data["MATH 475A NOTES"].elements[3],
    W5: data["MATH 475A NOTES"].elements[4],
    W6: data["MATH 475A NOTES"].elements[5],
    W7: data["MATH 475A NOTES"].elements[6],
    W8: data["MATH 475A NOTES"].elements[7],
    W9: data["MATH 475A NOTES"].elements[8],
    W10: data["MATH 475A NOTES"].elements[9],
    W11: data["MATH 475A NOTES"].elements[10],
    W12: data["MATH 475A NOTES"].elements[11],
    W13: data["MATH 475A NOTES"].elements[12],
    W14: data["MATH 475A NOTES"].elements[13],
    W15: data["MATH 475A NOTES"].elements[14],
    W16: data["MATH 475A NOTES"].elements[15],
  }

  NotesCurrent2 = NotesCurrent2Callback;

  // ***** ONCE DONE, CALL THE LOADED FUNCTION ***** //

  loadedTabletop();

};

window.addEventListener('DOMContentLoaded', init);
