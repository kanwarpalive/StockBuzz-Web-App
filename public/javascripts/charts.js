/**
 * Created by kanwarpalmehra on 5/22/17.
 */
var request=require('request');
var fs=require('fs');

var csv=require('csv');
var CHARTURL = "http://chartapi.finance.yahoo.com/instrument/1.0/";
var CHARTPARAM = "/chartdata;type=quote";
var CHARTRANGE = ";range=";

if (Name != null) {
    console.log(CHARTURL + quotevalue + CHARTPARAM + CHARTRANGE + "1d/json");
    request(CHARTURL + quotevalue + CHARTPARAM + CHARTRANGE + "1d/json", function (err, response, body) {
        var jsondata = body;

        jsondata = jsondata.replace('finance_charts_json_callback( ', '');
        jsondata = jsondata.replace(')', '');
        var obj = JSON.parse(jsondata);
        var list = [];
        for (var i = 0; i < obj.series.length; i++) {
            var arr = [];
            arr.push(obj.series[i].Timestamp);
            arr.push(obj.series[i].open);
            list.push(arr);
        }
        var object = {'key': 'series', 'values': list};
        var fullarray = [object];

        var str = JSON.stringify(fullarray);

        createFile("../public/javascripts/data.json", str);

    });

}else {
    console.log('API stopped working');
}