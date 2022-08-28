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
// Current 1 = MATH 646

var NotesCurrent1;
const WEEKSCURRENT1 = 15;

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

  // ***** CURRNET COURSE 1 HOMEWORK CONTROLLER ***** //

  // Week 1 Homework
  for (var i = 0; i < WEEKSCURRENT1; i++) {
      if (data[i]["MATH150_HW_Name"] == "" || data[i]["MATH150_HW_PDF"] == "") {
        $("#courseCurrent1" + "-W" + String(i+1)).html("Week " + String(i+1));
        // $("#courseCurrent1" + "-W" + String(i+1)).hide();
      } else {
        if (debug) console.log(data[i]["MATH150_HW_PDF"]);
        $("#courseCurrent1" + "-W" + String(i+1)).html("Week " + String(i+1) + ": " + '<a href=' + String(data[i]["MATH150_HW_PDF"]) + ' target="_blank">' + String(data[i]["MATH150_HW_Name"]) + '</a>');
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
  }

  // This for loop checks if there are any undefined weeks
  // (weeks without any notes yet), and if so, it creates
  // a template week so it doesn't return undefined
  for (var i = 0; i < WEEKSCURRENT1; i++) {
    var tempWeek = {
      Monday: data[i]["MATH150_Notes_M"],
      Tuesday: data[i]["MATH150_Notes_T"],
      Thursday: data[i]["MATH150_Notes_TH"],
      Friday: data[i]["MATH150_Notes_F"]
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
  }

  NotesCurrent1 = NotesCurrent1Callback;

  // ***** ONCE DONE, CALL THE LOADED FUNCTION ***** //

  loadNotes();

};

window.addEventListener('DOMContentLoaded', init);
