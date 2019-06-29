var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/18RYAcvE1_zJRDzjXgJKkwgT9DPeCV30dVjMVvPkaJCM/edit?usp=sharing';

function init() {
  Tabletop.init( { key: publicSpreadsheetUrl,
                   callback: showInfo,
                   simpleSheet: true } )
}

function showInfo(data, tabletop) {

  // Week 1 Homework
  if (data[0].W1_Name == "" || data[0].W1_PDF == "") {
    $("#courseA-W1").html("Week 1");
  } else {
    $("#courseA-W1").html("Week 1: " + '<a href=' + String(data[0].W1_PDF) + ' target="_blank">' + String(data[0].W1_Name) + '</a>');
  }

  // Week 2 Homework
  if (data[0].W2_Name == "" || data[0].W2_PDF == "") {
    $("#courseA-W2").html("Week 2");
  } else {
    $("#courseA-W2").html("Week 2: " + '<a href=' + String(data[0].W2_PDF) + ' target="_blank">' + String(data[0].W2_Name) + '</a>');
  }

  // Week 3 Homework
  if (data[0].W3_Name == "" || data[0].W3_PDF == "") {
    $("#courseA-W3").html("Week 3");
  } else {
    $("#courseA-W3").html("Week 3: " + '<a href=' + String(data[0].W3_PDF) + ' target="_blank">' + String(data[0].W3_Name) + '</a>');
  }

};

window.addEventListener('DOMContentLoaded', init)
