var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRqqiiJKWDSu9SVghfGJZPfZoMLsf2aw8tYFCYtfKf0IuWJXwMJlutxCHD5ByqcGQEtplyZwT2jaH-x/pub?output=csv';
var debug = false;

function init() {
  Papa.parse(publicSpreadsheetUrl, {
  download: true,
  header: true,
  complete: function(results) {
    var data = results.data
    showInfo(results.data);
  }
})
}

// ***** COURSE TABLE ***** //
// Current 1 = MATH 150
// Current 2 = MATH 260

var NotesCurrent1;
const WEEKSCURRENT1 = 17;

var NotesCurrent2;
const WEEKSCURRENT2 = 17;

function showInfo(data) {

  // ***** ANNOUNCEMENTS CONTROLLER ***** //

  if (debug) console.log(data);

  // Current Course 1
  var course1Announcement = data[0]["Announcement150"];
  if (course1Announcement == "None") {
    $("#announcementBodyCurrent1").html("Nothing yet.");
  } else {
    $("#announcementBodyCurrent1").html(String(course1Announcement));
  }

  // Current Course 2
  var course1Announcement = data[0]["Announcement260"];
  if (course1Announcement == "None") {
    $("#announcementBodyCurrent2").html("Nothing yet.");
  } else {
    $("#announcementBodyCurrent2").html(String(course1Announcement));
  }

  // ***** CURRNET COURSE 1 HOMEWORK CONTROLLER ***** //

  // Weekly Homework
  for (var i = 0; i < WEEKSCURRENT1; i++) {
      if (data[i]["MATH150FA_HW_Name"] == "" || data[i]["MATH150FA_HW_PDF"] == "") {
        $("#courseCurrent1" + "-W" + String(i+1)).html("Week " + String(i+1));
        // $("#courseCurrent1" + "-W" + String(i+1)).hide();
      } else {
        // if (debug) console.log(data[i]["MATH150_HW_PDF"]);
        $("#courseCurrent1" + "-W" + String(i+1)).html("Week " + String(i+1) + ": " + '<a href=' + String(data[i]["MATH150FA_HW_PDF"]) + ' target="_blank">' + String(data[i]["MATH150FA_HW_Name"]) + '</a>');
      }
    }

  // ***** CURRENT COURSE 1 HOMEWORK NOTES MANAGER ***** //
  var NotesCurrent1Callback = {
    W1: "",
    W2: "",
    W3: "",
    W4: "",
    W5: "",
    W6: "",
    W7: "",
    W8: "",
    W9: "",
    W10: "",
    W11: "",
    W12: "",
    W13: "",
    W14: "",
    W15: "",
    W16: "",
    W17: ""
  }

  // This for loop checks if there are any undefined weeks
  // (weeks without any notes yet), and if so, it creates
  // a template week so it doesn't return undefined
  for (var i = 0; i < WEEKSCURRENT1; i++) {
    var tempWeek = {
      Monday: data[i]["MATH150FA_Notes_M"],
      Tuesday: data[i]["MATH150FA_Notes_T"],
      Thursday: data[i]["MATH150FA_Notes_TH"],
      Friday: data[i]["MATH150FA_Notes_F"]
    }
    if (i == 0) NotesCurrent1Callback.W1 = tempWeek;
    else if (i == 1) NotesCurrent1Callback.W2 = tempWeek;
    else if (i == 2) NotesCurrent1Callback.W3 = tempWeek;
    else if (i == 3) NotesCurrent1Callback.W4 = tempWeek;
    else if (i == 4) NotesCurrent1Callback.W5 = tempWeek;
    else if (i == 5) NotesCurrent1Callback.W6 = tempWeek;
    else if (i == 6) NotesCurrent1Callback.W7 = tempWeek;
    else if (i == 7) NotesCurrent1Callback.W8 = tempWeek;
    else if (i == 8) NotesCurrent1Callback.W9 = tempWeek;
    else if (i == 9) NotesCurrent1Callback.W10 = tempWeek;
    else if (i == 10) NotesCurrent1Callback.W11 = tempWeek;
    else if (i == 11) NotesCurrent1Callback.W12 = tempWeek;
    else if (i == 12) NotesCurrent1Callback.W13 = tempWeek;
    else if (i == 13) NotesCurrent1Callback.W14 = tempWeek;
    else if (i == 14) NotesCurrent1Callback.W15 = tempWeek;
    else if (i == 15) NotesCurrent1Callback.W16 = tempWeek;
    else if (i == 16) NotesCurrent1Callback.W17 = tempWeek;
  }

  NotesCurrent1 = NotesCurrent1Callback;

  // ***** CURRNET COURSE 2 HOMEWORK CONTROLLER ***** //

  // Weekly Homework
  for (var i = 0; i < WEEKSCURRENT2; i++) {
      if (data[i]["MATH260FA_HW_Name"] == "" || data[i]["MATH260FA_HW_PDF"] == "") {
        $("#courseCurrent2" + "-W" + String(i+1)).html("Week " + String(i+1));
      } else {
        if (debug) console.log(data[i]["MATH260FA_HW_PDF"]);
        $("#courseCurrent2" + "-W" + String(i+1)).html("Week " + String(i+1) + ": " + '<a href=' + String(data[i]["MATH260FA_HW_PDF"]) + ' target="_blank">' + String(data[i]["MATH260FA_HW_Name"]) + '</a>');
      }
    }

  // ***** CURRENT COURSE 2 HOMEWORK NOTES MANAGER ***** //
  var NotesCurrent2Callback = {
    W1: "",
    W2: "",
    W3: "",
    W4: "",
    W5: "",
    W6: "",
    W7: "",
    W8: "",
    W9: "",
    W10: "",
    W11: "",
    W12: "",
    W13: "",
    W14: "",
    W15: "",
    W16: "",
    W17: ""
  }

  // This for loop checks if there are any undefined weeks
  // (weeks without any notes yet), and if so, it creates
  // a template week so it doesn't return undefined
  for (var i = 0; i < WEEKSCURRENT2; i++) {
    var tempWeek = {
      Monday: data[i]["MATH260FA_Notes_M"],
      Tuesday: data[i]["MATH260FA_Notes_T"],
      Thursday: data[i]["MATH260FA_Notes_TH"],
      Friday: data[i]["MATH260FA_Notes_F"]
    }
    if (i == 0) NotesCurrent2Callback.W1 = tempWeek;
    else if (i == 1) NotesCurrent2Callback.W2 = tempWeek;
    else if (i == 2) NotesCurrent2Callback.W3 = tempWeek;
    else if (i == 3) NotesCurrent2Callback.W4 = tempWeek;
    else if (i == 4) NotesCurrent2Callback.W5 = tempWeek;
    else if (i == 5) NotesCurrent2Callback.W6 = tempWeek;
    else if (i == 6) NotesCurrent2Callback.W7 = tempWeek;
    else if (i == 7) NotesCurrent2Callback.W8 = tempWeek;
    else if (i == 8) NotesCurrent2Callback.W9 = tempWeek;
    else if (i == 9) NotesCurrent2Callback.W10 = tempWeek;
    else if (i == 10) NotesCurrent2Callback.W11 = tempWeek;
    else if (i == 11) NotesCurrent2Callback.W12 = tempWeek;
    else if (i == 12) NotesCurrent2Callback.W13 = tempWeek;
    else if (i == 13) NotesCurrent2Callback.W14 = tempWeek;
    else if (i == 14) NotesCurrent2Callback.W15 = tempWeek;
    else if (i == 15) NotesCurrent2Callback.W16 = tempWeek;
    else if (i == 16) NotesCurrent2Callback.W17 = tempWeek;
  }

  NotesCurrent2 = NotesCurrent2Callback;

  // ***** ONCE DONE, CALL THE LOADED FUNCTION ***** //

  loadNotes();

};

window.addEventListener('DOMContentLoaded', init);
