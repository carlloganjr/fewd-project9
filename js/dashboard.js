// $('.alertClose').on('click', function() {
//   $('.mainAlert').css('display', 'none');
// });

const chartDiv =  document.getElementById('chart-buttons');
const chartList = chartDiv.children;
const sendButton = document.getElementById('userButton');
const sent = document.getElementById('sent');
const closeAlert = document.getElementsByClassName('alertClose');
const mainAlertDiv = document.getElementById('theAlert')

// closeAlert.addEventListener('click', function(e) {
//       mainAlertDiv.style.display = 'none';
// });

//====================================
// Hourly set to default on load
function defaultButton() {
  chartList[0].classList.add('chart-button-color');
}

defaultButton();

//======================================
// line chart button --> class toggle
chartDiv.addEventListener('click', function(e) {
  for (let i = 0; i < chartList.length; i++) {
    let chartButton = chartList[i];
    let chartClass = chartButton.classList;
    if (e.target === chartButton) {
      chartClass.add('chart-button-color');
    } else {
      chartClass.remove('chart-button-color');
    } // end if statement
  } // end for loop
}); // end event

//=====================================
// hourly, daily, weekly & monthly functions
// added via 'onclick' attribute in HTML
function hourlyChart() {
  mainTraffic.data.datasets[0].data.splice(
    0, 12, // index, how many
    750, 1250, 1000, 1500, 2000, 1500,
    1750, 1250, 1750, 2250, 1750, 2250
  ); // end data splice
  mainTraffic.data.labels.splice(
    0, 11, // index, how many
    '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm',
    '2 pm', '3 pm', '4 pm', '5 pm', '6 pm'
  ); // end labels splice
  mainTraffic.update();
} // end function

function dailyChart() {
  mainTraffic.data.datasets[0].data.splice(
    0, 12, // index, how many
    550, 2300, 850, 1400, 700, 1150,
    1050, 1850, 1000, 2250, 1250, 1500
  ); // end data splice
  mainTraffic.data.labels.splice(
    0, 11, // index, how many
    '7/7', '7/8', '7/9', '7/10', '7/11', '7/12',
    '7/13', '7/14', '7/15', '7/16', '7/17'
  ); // end labels splice
  mainTraffic.update();
} // end function

function weeklyChart() {
  mainTraffic.data.datasets[0].data.splice(
    0, 12, // index, how many
    950, 1250, 1000, 1250, 700, 1200,
    800, 1250, 1200, 2100, 750, 1000
  ); // end data splice
  mainTraffic.data.labels.splice(
    0, 11, // index, how many
    'May 8', 'May 15', 'May 22', 'May 29', 'June 5', 'June 12',
    'June 19', 'June 26', 'July 3', 'July 10', 'July 17'
  ); // end labels splice
  mainTraffic.update();
} // end function

function monthlyChart() {
  mainTraffic.data.datasets[0].data.splice(
    0, 12, // index, how many
    1050, 1950, 800, 1200, 2300, 1700,
    1750, 1350, 1150, 1250, 2150, 2000
  );  // end data splice
  mainTraffic.data.labels.splice(
    0, 11, // index, how many
    'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb',
    'Mar', 'Apr', 'May', 'June', 'July'
  ); // end labels splice
  mainTraffic.update();
} // end function

//===================================
// form event starts
sendButton.addEventListener('click', function(e) {
  e.preventDefault();
  if (e.target == sendButton) {
    sent.classList.add('show');
  }
});