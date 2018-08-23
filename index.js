console.log("hello");
const express = require('express');
const app = express();
var port =process.env.PORT || 3000;
var connect = app.listen(port);
if(connect){
    console.log(port);
}

    var allowCrossDomain = function(req, res, next) {
 
    }
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', '*');

    next();
});
var condig_data=[{
    connections:[
      {
        status:'connected',
        time:'01:25',
        day:12,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'disconnected',
        time:'14:30',
        day:12,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'connected',
        time:'01:25',
        day:16,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'disconnected',
        time:'18:30',
        day:16,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'connected',
        time:'01:25',
        day:17,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'disconnected',
        time:'02:30',
        day:17,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'connected',
        time:'04:25',
        day:17,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'disconnected',
        time:'06:30',
        day:17,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'connected',
        time:'10:25',
        day:17,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'disconnected',
        time:'10:55',
        day:17,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'connected',
        time:'12:25',
        day:17,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'disconnected',
        time:'15:50',
        day:17,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'connected',
        time:'19:30',
        day:17,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'disconnected',
        time:'22:45',
        day:17,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'connected',
        time:'22:55',
        day:17,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
    ],
    sessions:[
      {
        status:'connected',
        time:'10:25',
        day:16,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'disconnected',
        time:'16:30',
        day:16,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'connected',
        time:'01:25',
        day:17,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'disconnected',
        time:'03:30',
        day:17,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'connected',
        time:'06:25',
        day:17,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'disconnected',
        time:'10:10',
        day:17,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'connected',
        time:'12:25',
        day:17,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'disconnected',
        time:'15:10',
        day:17,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'connected',
        time:'17:30',
        day:17,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'disconnected',
        time:'22:45',
        day:17,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
      {
        status:'connected',
        time:'23:00',
        day:17,
        year:2018,
        month:'Aug',
        date:'2015-10-23T13:28:06.419Z'
      },
    ],
    sms:[
      {
        status:'in',
        time: "12:25",
        day: 17,
        year: 2018,
        month:'Aug',
        date: "2015-10-23T13:28:06.419Z"
      },
      {
        status:'in',
        time: "12:29",
        day: 17,
        year: 2018,
        month:'Aug',
        date: "2015-10-23T13:28:06.419Z"
      },
      {
        status:'in',
        time: "12:59",
        day: 17,
        year: 2018,
        month:'Aug',
        date: "2015-10-23T13:28:06.419Z"
      },
      {
        status:'out',
        time: "05:25",
        day: 17,
        year: 2018,
        month:'Aug',
        date: "2015-10-23T13:28:06.419Z"
      },

    ],
    simstatus:[
      {
        status:'inventorytest',
        time:'00:01',
        day:'17',
        year:'2018',
        month:'Aug'
      },
      {
        status:'inventory',
        time:'03:04',
        day:'17',
        year:'2018',
        month:'Aug'
      },
      {
        status:'pre-active',
        time:'05:20',
        day:'17',
        year:'2018',
        month:'Aug'
      },
      {
        status:'activated',
        time:'09:01',
        day:'17',
        year:'2018',
        month:'Aug'
      },
      {
        status:'idle',
        time:'11:01',
        day:'17',
        year:'2018',
        month:'Aug'
      },
      {
        status:'retired',
        time:'18:01',
        day:'17',
        year:'2018',
        month:'Aug'
      },
      {
        status:'suspended',
        time:'22:01',
        day:'17',
        year:'2018',
        month:'Aug'
      },
      {
        status:'nill',
        time:'00:01',
        day:'18',
        year:'2018',
        month:'Aug'
      }
    ],
    locationupdate:[
      {
        status:'in',
        time: "02:25",
        day: 17,
        year: 2018,
        month:'Aug',
        date: "2015-10-23T13:28:06.419Z"
      },
      {
        status:'in',
        time: "10:29",
        day: 17,
        year: 2018,
        month:'Aug',
        date: "2015-10-23T13:28:06.419Z"
      },
      {
        status:'in',
        time: "12:59",
        day: 17,
        year: 2018,
        month:'Aug',
        date: "2015-10-23T13:28:06.419Z"
      },
      {
        status:'out',
        time: "13:25",
        day: 17,
        year: 2018,
        month:'Aug',
        date: "2015-10-23T13:28:06.419Z"
      },
    ],
    credit:[
      {
        status:'exhausted',
        time:'00:01',
        day:'17',
        year:'2018',
        month:'Aug'
      },
      {
        status:'out-of-bundle',
        time:'12:04',
        day:'17',
        year:'2018',
        month:'Aug'
      },
      {
        status:'in-bundle',
        time:'18:20',
        day:'17',
        year:'2018',
        month:'Aug'
      },
      {
        status:'nill',
        time:'00:20',
        day:'18',
        year:'2018',
        month:'Aug'
      },
    ],
  }];
app.get('/conndata',(req,res)=>{
    res.send(condig_data);
})