new Morris.Line({
  element: 'myfirstchart',
  lineColors : ['orange'],
  data: [
    { year: '2008', value: 200 },
    { year: '2009', value: 100 },
    { year: '2010', value: 300 },
    { year: '2011', value: 500},
    { year: '2012', value: 400}
  ],
  xkey: 'year',
  ykeys: ['value'],
  labels: ['Value']
});


Chart.pluginService.register({
  beforeDraw: function (chart) {
    if (chart.config.options.elements.center) {
     
      var ctx = chart.chart.ctx;
      
      var centerConfig = chart.config.options.elements.center;
      var fontStyle = centerConfig.fontStyle || 'Arial';
      var txt = centerConfig.text;
      var color = centerConfig.color || '#000';
      var sidePadding = centerConfig.sidePadding || 20;
      var sidePaddingCalculated = (sidePadding/100) * (chart.innerRadius * 2)
      ctx.font = "30px " + fontStyle;
      
      var stringWidth = ctx.measureText(txt).width;
      var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;
      var widthRatio = elementWidth / stringWidth;
      var newFontSize = Math.floor(30 * widthRatio);
      var elementHeight = (chart.innerRadius * 2);
      var fontSizeToUse = Math.min(newFontSize, elementHeight);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
      var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
      ctx.font = fontSizeToUse+"px " + fontStyle;
      ctx.fillStyle = color;
      ctx.fillText(txt, centerX, centerY);
    }
  }
});

  var config = {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [65,35],
        backgroundColor: [
          "#04AA6D",
          "#ddd"
        ]
      }]
    },
  options: {
    elements: {
      center: {
        text: '65%',
        color: '#808080', 
        fontStyle: 'Arial', 
        sidePadding: 40
      }
    }
  }
};

  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, config);


const ctx3 = document.getElementById('myChart3').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
          label: '# of Dev',
            data: [12, 19, 3, 5],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        display: false
    },
    
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var xValues = [0,60,70,80,90,100,110,120];
var yValues = [7,8,8,9,9,9,10];

new Chart("myChart2", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(241,173,64,1)",
      borderColor: "rgba(82,155,175,1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    
    scales: {
      yAxes: [{
        display: false
    }],
    xAxes: [{
      ticks: {
          display: false 
      }
  }]
    }
  }
});

  
  