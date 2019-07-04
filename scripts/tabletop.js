var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/18RYAcvE1_zJRDzjXgJKkwgT9DPeCV30dVjMVvPkaJCM/edit?usp=sharing';

function init() {
  Tabletop.init( { key: publicSpreadsheetUrl,
                   callback: showInfo,
                   simpleSheet: false } )
}

var Notes122A;

function showInfo(data, tabletop) {

  // console.log(data["MATH 122A HOMEWORK"].elements[0].W1_PDF);

  // *** MATH 122A HOMEWORK CONTROLLER *** //

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

  // *** MATH 122A HOMEWORK NOTES MANAGER *** //

  console.log(document.getElementById("courseA-Selector").selectedIndex);

  console.log(data["MATH 122A NOTES"].elements);

  var Notes122ACallback = {
    W1: data["MATH 122A NOTES"].elements[0],
    W2: data["MATH 122A NOTES"].elements[1],
    W3: data["MATH 122A NOTES"].elements[2]
  }

  Notes122A = Notes122ACallback;

  loadedTabletop();

};

window.addEventListener('DOMContentLoaded', init)
