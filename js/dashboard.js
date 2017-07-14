let context = document.getElementById('mainTraffic');

let mainTraffic = new Chart(context, {
  type: 'line',
  data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26',
             '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
      label: 'TRAFFIC',
      data: [750, 1250, 1000, 1500, 2000, 1500,
             1750, 1250, 1750, 2250, 1750, 2250],
      borderColor: '#9d97c4',
      borderWidth: 2,
      lineTension: 0,
      pointStyle: 'circle',
      pointRadius: 5,
      pointHoverRadius: 10,
      pointBackgroundColor: '#e2d2fa',
      fill: true,
      backgroundColor: 'rgba(164, 151, 247, 0.1)'
    }]
  },
    options: {
      scales: {
        xAxes: [{
          gridLines: {
            offsetGridLines: true,
            drawOnChartArea: true,
            drawTicks: false
          }
        }],
        yAxes: [{
          // display: false,
          gridLines: {
            offsetGridLines: true,
            drawOnChartArea: true,
            drawTicks: false
          }
        }]
      },
      title: {
        display: true,
        text: 'TRAFFIC',
        position: 'top'
      },
      legend: {
        display: false
      },
      layout: {
            padding: 15
        }
    }

});
