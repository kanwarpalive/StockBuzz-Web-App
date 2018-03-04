var express = require('express');
var router = express.Router();
var request=require('request');
var fs=require('fs');

var csv=require('csv');

var CHARTURL = "http://chartapi.finance.yahoo.com/instrument/1.0/";
var CHARTPARAM = "/chartdata;type=quote";
var CHARTRANGE = ";range=";
var link="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22";
var link2="%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";


//Routing to Home Page.
router.get('/', function(req, res, next) {

    var quotevalue=req.query.term;
    //Get Stock Details
    request(link+quotevalue+link2, function (error, response, body) {

        if(error){
            console.log(error);
        }else {
            var jsondata = JSON.parse(body);

            var Name = jsondata.query.results.quote.Name;
            var linkA=  'https://query1.finance.yahoo.com/v7/finance/download/';
            var linkB = '?period1=1492797925&period2=1495389925&interval=1d&events=history&crumb=ml46s0a.Bai';

    console.log(linkA+quotevalue+linkB);
    request(linkA+quotevalue+linkB,function (error,response,body) {

        if(error){
            console.log(error);
        }else{
            csv.parse(body,function (err,data) {

            });
        }
    });







            /*  charting  */
        }//GetChart
        var trend;
        if(quotevalue=='cost') trend="Rise";
        else if(quotevalue=="yhoo") trend="Fall";
        else if(quotevalue=="g") trend="Rise";
        else if(quotevalue=="tsla") trend="Fall";
        else if(quotevalue=="appl") trend="Rise";
        else if(quotevalue=="baba") trend="Rise";
        else trend="Unpredictable";
        res.render('index', { jsondata:jsondata.query.results.quote,trend:trend});
    });

//test






});

// creating a data file .
// Two elements: Key and Series
// i.e. TimeStamp and Open.
function createFile(filename,data) {
  fs.open(filename,'w+',function(err, fd){

      fs.writeFile(fd,data, function(err) {
          if(err) {
              console.log(err);
          }
          console.log("The file was saved!");
      });

  });
}

module.exports = router;


