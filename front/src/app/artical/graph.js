$(function () {
  $('#container').highcharts({
    chart: {
      type: 'column',
      margin: 75,
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 500
      }
    },
    plotOptions: {
      column: {
        depth: 40,
        stacking: true,
        grouping: false,
        groupZPadding: 100
      }
    },
    series: [{
      data: [1, 2, 4, 3, 2, 4],
      stack: 0
    }, {
      data: [5, 6, 3, 4, 1, 2],
      stack: 0
    }, {
      data: [7, 9, 8, 7, 5, 8],
      stack: 1
    }]
  });
});

window.alert("hi");

$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});
