$(function(){
  circle('#full-1', '#fill-1', '#fix-1', 58);
  circle('#full-2', '#fill-2', '#fix-2', 75);
  circle('#full-3', '#fill-3', '#fix-3', 28);
  circle('#full-4', '#fill-4', '#fix-4', 97);
  // checkResChange();
});

// player statistic circle animations
function circle(e1,e2,e3, perc) {
  var transform_styles = ['-webkit-transform', '-ms-transform', 'transform'];
  var rotation = Math.floor((perc * 0.01) * 180);
  var fill_rotation = rotation;
  var fix_rotation = rotation * 2;
  clipping();
  for (i in transform_styles) {
    $(e1 + ',' + e2).css(transform_styles[i], 'rotate(' + fill_rotation + 'deg)');
    $(e3).css(transform_styles[i], 'rotate(' + fix_rotation + 'deg)');
  };

};

// Add clipping
function clipping() {
  var measure = document.getElementById('fill-1');
  var elemWidth = getWidth(measure);
  var diameter = (Math.ceil(elemWidth) + 5) + 'px';
  var diamHalf = (elemWidth / 2) + 'px';
  // add clipping to circle
  $('.fill').css('clip', 'rect(0px,' + diamHalf + ',' + diameter + ', 0px)');
  $('.cover').css('clip', 'rect(0px,' + diameter + ', ' + diameter + ', ' + diamHalf + ')');    
};

// to get width of div for clipping 
function getWidth(e) {
  return parseFloat(window.getComputedStyle(e).width);
};

// chart
var acpData = {
  labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
  datasets: [
    {
      fillColor: "rgba(41,125,125,0.04)",
      strokeColor: "#297d7d",
      pointColor: "#f3f3f3",
      pointStrokeColor: "#297d7d",
      pointHighlightFill: "#297d7d",
      pointHighlightStroke: "#297d7d",
      data: [40, 25, 30, 50, 34, 27, 22]
    }
  ]
};
var actData = {
  labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
  datasets: [
    {
      fillColor: "rgba(226, 226, 226,0.6)",
      strokeColor: "#37363a",
      pointColor: "#f3f3f3",
      pointStrokeColor: "#37363a",
      pointHighlightFill: "#37363a",
      pointHighlightStroke: "#37363a",
      data: [350, 700, 620, 890, 500, 600, 300]
    }
  ]
};

var players = document.getElementById('player-chart').getContext('2d');
var tourneys = document.getElementById('tourneys-chart').getContext('2d');
var options = {
  scaleOverride: true,
  scaleSteps: 6,
  scaleStartValue: 0,
  scaleStepWidth: 10,
  scaleLineColor: "rgba(197, 197, 196, 0.8)",
  scaleLineWidth: 1,
  scaleFontFamily: 'Avenir Next LT Pro Regular',
  scaleFontSize: 13.69,
  scaleFontStyle: 'bold',
  scaleLabel: "<%= ' ' + value%>",
  scaleFontColor: '#979ca2',
  tooltipTemplate: "<%if (label){%><%}%><%= value %>",
  tooltipFontSize: 10,
  tooltipXOffset: 5,
  pointDotRadius : 5, 
  pointDotStrokeWidth : 2,
  tooltipCaretSize: 3,
  tooltipFillColor: '#297d7d',
  bezierCurve: false,
  scaleGridLineColor: "#eaeaea",
  datasetFill: true
};
var options_2 = {
  scaleOverride: true,
  scaleSteps: 6,
  scaleStartValue: 0,
  scaleStepWidth: 150,
  scaleLineColor: "rgba(197, 197, 196, 0.8)",
  scaleLineWidth: 1,
  scaleFontFamily: 'Avenir Next LT Pro Regular',
  scaleFontSize: 13.69,
  scaleFontStyle: 'bold',
  scaleLabel: "<%= ' ' + value%>",
  scaleFontColor: '#979ca2',
  tooltipFillColor: '#37363a',
  tooltipTemplate: "<%if (label){%><%}%><%= value %>",
  tooltipFontSize: 10,
  tooltipXOffset: 5,
  pointDotRadius : 5, 
  pointDotStrokeWidth : 2,
  tooltipCaretSize: 3,
  bezierCurve: false,
  scaleGridLineColor: "#eaeaea",
  datasetFill: true
};
var playerChart = new Chart(players).Line(acpData, options);
var tourneyChart = new Chart(tourneys).Line(actData, options_2);
playerChart;
