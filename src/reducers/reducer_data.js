import { FETCH_DATA } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_DATA:
    var dataWrap = [];
    for (var i = 0; i < 16; i++) {
      if (action.payload[i].data.findCompletedItemsResponse[0].searchResult[0].item) {
        dataWrap = dataWrap.concat(action.payload[i].data.findCompletedItemsResponse[0].searchResult[0].item);
      }
    }
    return dataWrap;
  case 'IS_FETCHING':
    return action.payload;
  }
  return state;
}
