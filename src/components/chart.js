import _ from 'lodash';
import React from 'react';
import {Line, Pie, Bar} from 'react-chartjs-2';
import CountUp from 'react-countup';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

function dataLength(data) {
  return data.length;
}

export default (props) => {
    var monthlySaleLabel = [];
    var monthlySaleNum = [];
    var monthlyPrice = [];
    var month = "";
    var lowIndex = props.data[0].indexOf(_.min(props.data[0]));
    var highIndex = props.data[0].indexOf(_.max(props.data[0]));
    var lowestItemPic = '';
    var lowestItemName = '';
    var lowestItemDate = '';
    var lowestItemSoldStatus = '';
    var lowestItemUrl = '';
    if (props.data[2][lowIndex]) {
        lowestItemPic = props.data[2][lowIndex].pictureURLSuperSize[0];
        lowestItemName = props.data[2][lowIndex].title[0];
        lowestItemDate = props.data[2][lowIndex].listingInfo[0].endTime[0].slice(0, 10);
        lowestItemUrl = props.data[2][lowIndex].viewItemURL[0];
        if (props.data[2][lowIndex].sellingStatus[0].bidCount) {
            lowestItemSoldStatus = props.data[2][lowIndex].sellingStatus[0].bidCount[0] + ' bids';
        } else {
            lowestItemSoldStatus = 'Buy It Now';
        }
    }
    var highestItemPic = '';
    var highestItemName = '';
    var highestItemDate = '';
    var highestItemSoldStatus = '';
    var highestItemUrl = '';
    if (props.data[2][highIndex]) {
        highestItemPic = props.data[2][highIndex].pictureURLSuperSize[0];
        highestItemName = props.data[2][highIndex].title[0];
        highestItemDate = props.data[2][highIndex].listingInfo[0].endTime[0].slice(0, 10);
        highestItemUrl = props.data[2][highIndex].viewItemURL[0];
        if (props.data[2][highIndex].sellingStatus[0].bidCount) {
            highestItemSoldStatus = props.data[2][highIndex].sellingStatus[0].bidCount[0] + ' bids';
        } else {
            highestItemSoldStatus = 'Buy It Now';
        }
    }
    var plusSign = "";
    if (props.data[0].length == 1000) {
        plusSign = "+";
    }
    var max = 0;
    for (var i = 0; i < props.data[1].length; i++) {
        if (props.data[1][i].length != 0) {
            if (props.data[1][i].length > max) {
                max = props.data[1][i].length;
            }
            switch (i) {
                case 1:
                    month = "January";
                    break;
                case 2:
                    month = "February";
                    break;
                case 3:
                    month = "March";
                    break;
                case 4:
                    month = "April";
                    break;
                case 5:
                    month = "May";
                    break;
                case 6:
                    month = "June";
                    break;
                case 7:
                    month = "July";
                    break;
                case 8:
                    month = "August";
                    break;
            }
            monthlySaleLabel.push(month);
            monthlySaleNum.push(props.data[1][i].length);
            monthlyPrice.push(_.round(average(props.data[1][i])));
        }
    }
    max = max + _.round(max / 6);
    max = max + (10 - max % 10);
    var maxMonthlyPrice = _.max(monthlyPrice) + _.round(_.max(monthlyPrice) / 15);
    maxMonthlyPrice = maxMonthlyPrice + (10 - maxMonthlyPrice % 10);

    const monthlySaleData = {
        labels: ['Seller Pays Shipping', 'Buyer Pays Shipping'],
        datasets: [{
            data: [props.data[4], 100 - props.data[4]],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };

    var pieOptions = {
        events: false,
        animation: {
            duration: 500,
            easing: "easeOutQuart",
            onComplete: function() {
                var ctx = this.chart.ctx;
                ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                this.data.datasets.forEach(function(dataset) {
                    for (var i = 0; i < dataset.data.length; i++) {
                        var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                            total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                            mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
                            start_angle = model.startAngle,
                            end_angle = model.endAngle,
                            mid_angle = start_angle + (end_angle - start_angle) / 2;
                        var x = mid_radius * Math.cos(mid_angle);
                        var y = mid_radius * Math.sin(mid_angle);
                        ctx.fillStyle = '#fff';
                        if (i == 3) { // Darker text color for lighter background
                            ctx.fillStyle = '#444';
                        }
                        var val = dataset.data[i];
                        var percent = String(Math.round(val / total * 100)) + "%";
                        if (val != 0) {
                            // Display percent in another line, line break doesn't work for fillText
                            ctx.fillText(percent, model.x + x, model.y + y + 15);
                        }
                    }
                });
            }
        }
    };

    const barData = {
        labels: monthlySaleLabel,
        datasets: [{
            backgroundColor: ['rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            hoverBackgroundColor: ['rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            hoverBorderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            data: monthlySaleNum
        }]
    };

    const barOptions = {
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    max: max,
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        },
        animation: {
            duration: 0,
            onComplete: function() {
                // render the value of the chart above the bar
                var ctx = this.chart.ctx;
                ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
                ctx.fillStyle = this.chart.config.options.defaultFontColor;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                this.data.datasets.forEach(function(dataset) {
                    for (var i = 0; i < dataset.data.length; i++) {
                        var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
                        ctx.fillText(dataset.data[i], model.x, model.y - 5);
                    }
                });
            }
        },
        hover: {
            animationDuration: 0
        }
    };

    const Linedata = {
        labels: monthlySaleLabel,
        datasets: [{
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: monthlyPrice
        }]
    };

    const LineOptions = {
        events: false,
        tooltips: {
            enabled: false
        },
        hover: {
            animationDuration: 0
        },
        animation: {
            duration: 1,
            onComplete: function() {
                var chartInstance = this.chart,
                    ctx = chartInstance.ctx;
                ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                ctx.fillStyle = '#444';
                this.data.datasets.forEach(function(dataset, i) {
                    var meta = chartInstance.controller.getDatasetMeta(i);
                    meta.data.forEach(function(bar, index) {
                        var data = dataset.data[index];
                        ctx.fillText(data, bar._model.x, bar._model.y - 5);
                    });
                });
            }
        },
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    max: maxMonthlyPrice
                }
            }]
        },
        legend: {
            display: false
        }
    };

  if (props.data[0][0]) {
    return (
      <div>
      <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 third">
              <div className="border">
                  <div>
                      <div className="textContainer">
                          <h5>Sold Items</h5>
                          <h2>
                              <CountUp start={0} end={dataLength(props.data[0])} duration={2} />{plusSign}</h2>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 third">
              <div className="border">
                  <div>
                      <div className="textContainer">
                          <h5>Average Sold Price</h5>
                          <h2>$
                              <CountUp start={0} end={average(props.data[0])} duration={2} /> USD</h2>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 third">
              <div className="border">
                  <div>
                      <div className="textContainer">
                          <h5>Average Shipping Cost</h5>
                          <h2>$
                              <CountUp start={0} end={average(props.data[3])} duration={2} /> USD</h2>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 third">
              <div className="border">
                  <div className="catagory">
                      <p>Monthly Sold Items</p>
                  </div>
                  <div>
                      <div className="chartContainer">
                          <Bar data={barData} height={165} options={barOptions} />
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 third">
              <div className="border">
                  <div className="catagory">
                      <p>Average Price by Months</p>
                  </div>
                  <div>
                      <div className="chartContainer">
                          <Line data={Linedata} height={165} options={LineOptions} />
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 third">
              <div className="border">
                  <div className="catagory">
                      <p>Free Shipping</p>
                  </div>
                  <div>
                      <div className="chartContainer">
                          <Pie data={monthlySaleData} height={165} options={pieOptions} />
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-lg-12 third">
              <div className="itemBorder">
                  <div className="catagory">
                      <p>Lowest Price Item Sold</p>
                  </div>
                  <div>
                      <div className="col-xs-12 col-md-3 itemImage third">
                          <img src={lowestItemPic} />
                      </div>
                      <div className="col-xs-12 col-md-offset-2 col-md-7 col-lg-offset-1 col-lg-8 textToLeft">
                          <p>
                              {lowestItemName}
                          </p>
                          <div className="col-xs-6 col-lg-6 noPadding">
                              <h3>
                                  ${props.data[0][lowIndex]} USD
                              </h3>
                          </div>
                          <div className="col-xs-6 col-lg-6 noPadding">
                              {lowestItemDate}
                          </div>
                          <div className="col-xs-12 col-lg-12 noPadding textToLeft soldstatus">
                              <div className="col-xs-6 col-lg-6 noPadding textToLeft soldstatus">
                                  {lowestItemSoldStatus}
                              </div>
                              <div className="col-xs-6 col-lg-6 noPadding textToLeft">
                                  <a href={lowestItemUrl} target="_blank">
                    <button type="button" className="btn btn-danger">View Listing</button>
                    </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-lg-12 third">
              <div className="itemBorder">
                  <div className="catagory">
                      <p>Highest Price Item Sold</p>
                  </div>
                  <div>
                      <div className="col-xs-12 col-md-3 itemImage third">
                          <img src={highestItemPic} />
                      </div>
                      <div className="col-xs-12 col-md-offset-2 col-md-7 col-lg-offset-1 col-lg-8 textToLeft">
                          <p>
                              {highestItemName}
                          </p>
                          <div className="col-xs-6 col-lg-6 noPadding">
                              <h3>
                                  ${props.data[0][highIndex]} USD
                              </h3>
                          </div>
                          <div className="col-xs-6 col-lg-6 noPadding">
                              {highestItemDate}
                          </div>
                          <div className="col-xs-12 col-lg-12 noPadding textToLeft">
                              <div className="col-xs-6 col-lg-6 noPadding textToLeft soldstatus">
                                  {highestItemSoldStatus}
                              </div>
                              <div className="col-xs-6 col-lg-6 noPadding textToLeft">
                                  <a href={highestItemUrl} target="_blank">
                                    <button type="button" className="btn btn-danger">View Listing</button>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="infoList">
          <br></br>
      </div>
  </div>
  )
} else {
  return (
<div>

</div>
  )
  }
}
