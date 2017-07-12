import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

export function fetchData(item_name) {
    const apiKey = 'SamXu-EbayMark-PRD-67a8f6fb5-f4fa7d8b';
    const url1 = `https://uxsamcors.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=${apiKey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${item_name}&itemFilter(0).name=SoldItemsOnly&itemFilter(0).value=true&sortOrder=BestMatch&outputSelector=PictureURLSuperSize&paginationInput.pageNumber=1`;
    const url2 = `https://uxsamcors.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=${apiKey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${item_name}&itemFilter(0).name=SoldItemsOnly&itemFilter(0).value=true&sortOrder=BestMatch&outputSelector=PictureURLSuperSize&paginationInput.pageNumber=2`;
    const url3 = `https://uxsamcors.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=${apiKey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${item_name}&itemFilter(0).name=SoldItemsOnly&itemFilter(0).value=true&sortOrder=BestMatch&outputSelector=PictureURLSuperSize&paginationInput.pageNumber=3`;
    const url4 = `https://uxsamcors.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=${apiKey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${item_name}&itemFilter(0).name=SoldItemsOnly&itemFilter(0).value=true&sortOrder=BestMatch&outputSelector=PictureURLSuperSize&paginationInput.pageNumber=4`;
    const url5 = `https://uxsamcors.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=${apiKey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${item_name}&itemFilter(0).name=SoldItemsOnly&itemFilter(0).value=true&sortOrder=BestMatch&outputSelector=PictureURLSuperSize&paginationInput.pageNumber=5`;
    const url6 = `https://uxsamcors.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=${apiKey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${item_name}&itemFilter(0).name=SoldItemsOnly&itemFilter(0).value=true&sortOrder=BestMatch&outputSelector=PictureURLSuperSize&paginationInput.pageNumber=6`;
    const url7 = `https://uxsamcors.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=${apiKey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${item_name}&itemFilter(0).name=SoldItemsOnly&itemFilter(0).value=true&sortOrder=BestMatch&outputSelector=PictureURLSuperSize&paginationInput.pageNumber=7`;
    const url8 = `https://uxsamcors.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=${apiKey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${item_name}&itemFilter(0).name=SoldItemsOnly&itemFilter(0).value=true&sortOrder=BestMatch&outputSelector=PictureURLSuperSize&paginationInput.pageNumber=8`;
    const url9 = `https://uxsamcors.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=${apiKey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${item_name}&itemFilter(0).name=SoldItemsOnly&itemFilter(0).value=true&sortOrder=BestMatch&outputSelector=PictureURLSuperSize&paginationInput.pageNumber=9`;
    const url10 = `https://uxsamcors.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=${apiKey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${item_name}&itemFilter(0).name=SoldItemsOnly&itemFilter(0).value=true&sortOrder=BestMatch&outputSelector=PictureURLSuperSize&paginationInput.pageNumber=10`;
    const url11 = `https://uxsamcors.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=${apiKey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${item_name}&itemFilter(0).name=SoldItemsOnly&itemFilter(0).value=true&sortOrder=BestMatch&outputSelector=PictureURLSuperSize&paginationInput.pageNumber=11`;
    const url12 = `https://uxsamcors.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=${apiKey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${item_name}&itemFilter(0).name=SoldItemsOnly&itemFilter(0).value=true&sortOrder=BestMatch&outputSelector=PictureURLSuperSize&paginationInput.pageNumber=12`;
    const url13 = `https://uxsamcors.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=${apiKey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${item_name}&itemFilter(0).name=SoldItemsOnly&itemFilter(0).value=true&sortOrder=BestMatch&outputSelector=PictureURLSuperSize&paginationInput.pageNumber=13`;
    const url14 = `https://uxsamcors.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=${apiKey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${item_name}&itemFilter(0).name=SoldItemsOnly&itemFilter(0).value=true&sortOrder=BestMatch&outputSelector=PictureURLSuperSize&paginationInput.pageNumber=14`;
    const url15 = `https://uxsamcors.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=${apiKey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${item_name}&itemFilter(0).name=SoldItemsOnly&itemFilter(0).value=true&sortOrder=BestMatch&outputSelector=PictureURLSuperSize&paginationInput.pageNumber=15`;
    const url16 = `https://uxsamcors.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=${apiKey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${item_name}&itemFilter(0).name=SoldItemsOnly&itemFilter(0).value=true&sortOrder=BestMatch&outputSelector=PictureURLSuperSize&paginationInput.pageNumber=16`;
    const request = axios.all([axios.get(url1), axios.get(url2), axios.get(url3),
        axios.get(url4), axios.get(url5), axios.get(url6),
        axios.get(url7), axios.get(url8), axios.get(url9),
        axios.get(url10), axios.get(url11), axios.get(url12),
        axios.get(url13), axios.get(url14), axios.get(url15),
        axios.get(url16)
    ]);
    return {
        type: FETCH_DATA,
        payload: request
    };
}

export function isFetching() {
    return {
        type: 'IS_FETCHING',
        payload: true
    }
}
