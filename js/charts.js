let contextMain = document.getElementById('mainTraffic');
let mainTraffic = new Chart(contextMain, {
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
            // offsetGridLines: true,
            drawOnChartArea: true,
            drawTicks: false,
          },
          ticks: {
            // beginAtZero: true,
            min: 500,
            max: 2500,
            stepSize: 500
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

let contextDaily = document.getElementById('traffic');
let traffic = new Chart(contextDaily, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
      data: [75, 100, 175, 125, 225, 200, 100],
      backgroundColor: '#7733ff',
      barPercentage: 0.5
    }]
  },
    options: {
      scales: {
        xAxes: [{
          gridLines: {
            offsetGridLines: true,
            drawTicks: false
          }
        }],
        yAxes: [{
          // display: false,
          gridLines: {
            drawTicks: false
          },
          ticks: {
            min: 50,
            max: 250,
            stepSize: 50
          }
        }]
      },
      title: {
        display: true,
        text: 'DAILY TRAFFIC',
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

let contextUsers = document.getElementById('mobileUsers');
let mobileUsers = new Chart(contextUsers, {
  type: 'doughnut',
  data: {
    labels: ['Phones', 'Tablets', 'Desktop'],
    datasets: [{
      data: [20, 20, 60],
      backgroundColor: ['#7733ff', '#400080', '#8080ff']
    }]
  },
    options: {
      legend: {
        position: 'right'
      },
      title: {
        display: true,
        text: 'MOBILE USER',
        position: 'top'
      },
      layout: {
            padding: 15
        }
    }

});
