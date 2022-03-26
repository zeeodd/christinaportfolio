function pianogramDraw(scope, element) {

  // load angular variables
  var data = scope.data;

  // watch for changes on scope.data
  scope.$watch("data", function() {
    var data = scope.data;
    update(data);
  });


  // set parameters
  var keyWidth = 30;
  var keyHeight = keyWidth * 3.5;
  var keyWidthRatio = 0.7;
  var keyHeightRatio = 0.6;
  var margin = {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10
  };
  var svgWidth = 400;
  var svgHeight = 150;
  var width = svgWidth - margin.left - margin.right;
  var height = svgHeight - margin.top - margin.bottom;

  // create scales
  var yScale = d3.scale.linear()
    .domain([0, d3.max(data, function(d) {
      return d.count;
    })])
    .range([0, height - keyHeight]);

  // create tooltip div
  var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  // create SVG element
  var svg = d3.select(element[0])
    .append("svg")
    .attr("id", "pianogram")
    .attr("viewBox", "110 0 " + svgWidth + " " + svgHeight);

  // create keys
  var keys = svg.append("g").selectAll("rect")
    .data(data).enter()
    .append("rect")
    .classed("keys", true)
    .attr("stroke", "black")
    .attr("stroke-width", 1.5)
    .attr("fill", colorKey)
    .attr("x", drawKeyPosition)
    .attr("y", function(d) {
      return height - keyHeight;
    })
    .on("mouseover", function(d, i) {
      d3.select(this).attr("fill", "#007bff");
      d3.select(this).style("cursor", "pointer");
      // tooltipShow(d);
    })
    .on("mouseout", function(d, i) {
      d3.select(this).attr("fill", colorKey);
      d3.select(this).style("cursor", "default");
      // tooltipHide();
    })
    .on("click", function(d) {
      new Audio(playSound(d)).play();
    })
    .attr("width", drawKeyWidth)
    .transition().delay(function(d, i) {
      return i * 10;
    })
    .attr("height", function(d) {
      var height = 0;
      if (d.exists) {
        height = d.white ? keyHeight : keyHeight * keyHeightRatio;
      }
      return height;
    });

  // create bars
  var bars = svg.append("g").selectAll("rect")
    .data(data).enter()
    .append("rect")
    .classed("bars", true)
    .attr("stroke", "black")
    .attr("fill", colorKey)
    .attr("x", drawKeyPosition)
    .attr("y", function(d) {
      return height - keyHeight;
    })
    .attr("width", drawKeyWidth)
    .attr("height", 0)
    .transition().delay(function(d, i) {
      return i * 10;
    })
    .attr("y", function(d) {
      return height - keyHeight - yScale(d.count);
    })
    .attr("height", function(d) {
      if (d.exists) return yScale(d.count);
    });


  // helper function update
  function update(data) {
    // update yScale
    var yScale = d3.scale.linear()
      .domain([0, d3.max(data, function(d) {
        return d.count;
      })])
      .range([0, height - keyHeight]);

    // update keys
    svg.selectAll(".keys").data(data);

    // update bars
    svg.selectAll(".bars").data(data)
      .transition().delay(function(d, i) {
        return i * 10;
      })
      .attr("y", function(d) {
        return height - keyHeight - yScale(d.count);
      })
      .attr("height", function(d) {
        if (d.exists) return yScale(d.count);
      });
  }

  var whitetext = svg.append("g").selectAll("rect")
    .data(data).enter()
    .append("text")
    .attr("class", "piano-keys-text")
    .attr("font-size", 10)
    .attr("color", "black")
    .attr("x", drawKeyNotePosition)
    .attr("y", function(d) {
      return height - 5;
    })
    .on("mouseover", function(d) {
      d3.select(this).style("cursor", "pointer");
    })
    .on("mouseout", function(d) {
      d3.select(this).style("cursor", "default");
    })
    .on("click", function(d) {
      new Audio(playSound(d)).play();
    })
    .text(drawKeyText);

  var blacktext = svg.append("g").selectAll("rect")
    .data(data).enter()
    .append("text")
    .attr("class", "piano-keys-text")
    .attr("font-size", 10)
    .attr("color", "white")
    .style('fill', 'white')
    .attr("x", drawBlackKeyNotePosition)
    .attr("y", function(d) {
      return height - 45;
    })
    .on("mouseover", function(d) {
      d3.select(this).style("cursor", "pointer");
    })
    .on("mouseout", function(d) {
      d3.select(this).style("cursor", "default");
    })
    .on("click", function(d) {
      new Audio(playSound(d)).play();
    })
    .text(drawBlackKeyText);

  // helper function drawKeyPosition
  function drawKeyPosition(d) {
    return d.position * keyWidth;
  }

  function playSound(d) {
    if (d.position == 7) return "audio/piano_middle_C.wav";
    if (d.position == 7.5) return "audio/piano_C_sharp.wav";
    if (d.position == 8) return "audio/piano_D.wav";
    if (d.position == 8.5) return "audio/piano_D_sharp.wav";
    if (d.position == 9) return "audio/piano_E.wav";
    if (d.position == 10) return "audio/piano_F.wav";
    if (d.position == 10.5) return "audio/piano_F_sharp.wav";
    if (d.position == 11) return "audio/piano_G.wav";
    if (d.position == 11.5) return "audio/piano_G_sharp.wav";
    if (d.position == 12) return "audio/piano_A.wav";
    if (d.position == 12.5) return "audio/piano_A_sharp.wav";
    if (d.position == 13) return "audio/piano_B.wav";
  }

  function drawKeyNotePosition(d) {
    console.log(d);
    if (d.position == 7 || d.position == 8 || d.position == 9 || d.position == 10 || d.position == 11 || d.position == 12 || d.position == 13) return d.position * keyWidth + 4;
  }

  function drawBlackKeyNotePosition(d) {
    if (d.position == 7 || d.position == 8 || d.position == 10 || d.position == 11 || d.position == 12) return d.position * keyWidth + 17.5;
  }

  function drawKeyText(d) {
    if (d.position == 7) return "1";
    if (d.position == 8) return "3";
    if (d.position == 9) return "5";
    if (d.position == 10) return "6";
    if (d.position == 11) return "8";
    if (d.position == 12) return "10";
    if (d.position == 13) return "12";
  }

  function drawBlackKeyText(d) {
    if (d.position == 7) return "2";
    if (d.position == 8) return "4";
    if (d.position == 10) return "7";
    if (d.position == 11) return "9";
    if (d.position == 12) return "11";
  }

  // helper function drawKeyWidth
  function drawKeyWidth(d) {
    return d.white ? keyWidth : keyWidth * keyWidthRatio;
  }

  // helper function colorKey
  function colorKey(d) {
    return d.white ? "white" : "black";
  }

  // helper function tooltipShow
  function tooltipShow(d) {
    tooltip.style("opacity", 0.9)
      .html("<strong>Note</strong>: " + d.keyId + "<br />" +
        "<strong>Octave</strong>: " + d.octave + "<br />" +
        "<strong>Count</strong>: " + Math.round(d.count))
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY + keyHeight) + "px");
  }

  // helper function tooltipHide
  function tooltipHide() {
    tooltip.style("opacity", 0);
  }
}
