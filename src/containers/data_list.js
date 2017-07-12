import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';

class DataList extends Component {
  renderDataChart(ebayData) {
    if (ebayData == true) {
      return (
        <div>
        <div className="loader"></div>
        </div>
      );
    } else {
    var price = createArray(ebayData);
    return (
      <Chart data={price} color="orange" />
    );
  }
}

  render() {
    return (
        <div>
         {this.renderDataChart(this.props.ebayData)}
         </div>
    );
  }
}

function createArray(json) {
    var array = [];
    var returnObjects = [];
    var returnData = [];
    var monthlyData = [];
    var shippingCost = [];
    var freeShipping = [0, 0];
    for (var k = 0; k < 12; k++) {
        monthlyData.push([]);
    }
    for (var i = 0; i < json.length; i++) {
        array.push(json[i].sellingStatus[0].currentPrice[0].__value__);
    }
    const average = _.round(_.sum(array) / array.length);
    for (var j = array.length - 1; j >= 0; j--) {
        if (array[j] > average / 3) {
            returnData.push(array[j]);
            returnObjects.push(json[j]);
        }
    }
    for (var l = 0; l < returnObjects.length; l++) {
        monthlyData[parseInt(returnObjects[l].listingInfo[0].endTime[0].slice(5, 7))].push(returnObjects[l].sellingStatus[0].currentPrice[0].__value__);
        if (returnObjects[l].shippingInfo[0].shippingServiceCost) {
            if (returnObjects[l].shippingInfo[0].shippingServiceCost[0].__value__ == 0) {
                freeShipping[1]++;
            } else {
                shippingCost.push(returnObjects[l].shippingInfo[0].shippingServiceCost[0].__value__);
                freeShipping[0]++;
            }
        }
    }
    const freeShippingPercent = _.round(freeShipping[1] / (freeShipping[0] + freeShipping[1]) * 100);

    return [returnData, monthlyData, returnObjects, shippingCost, freeShippingPercent];
}

function mapDispatchToProps({ ebayData }) {
  return { ebayData };
}

export default connect(mapDispatchToProps)(DataList);
