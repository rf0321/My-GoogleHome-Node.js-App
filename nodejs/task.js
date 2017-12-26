const googlehome = require('google-home-notifier')
const morningMessage = 'おはようございます。今日も一日、圧倒的成長しましょう'
const nightMessage = '夜も遅くなってきましたね。睡眠をおすすめします。'
const celebrateMessage = '今日も12時間の生存おめでとうございます。種の保存のため、残り12時間も生きましょう。'

googlehome.device('Your Device Name'); 
googlehome.ip('Your ip address');
googlehome.language('ja');

const  twitter = require('twitter');
const ck ='xxxxxxx';
const cks = 'xxxxxxxx';
const ac = 'xxxxxxxx';
const ats = 'xxxxxxxx';


//  Authentication for Token when init Twitter npm lib
const client = new twitter({
    consumer_key: ck,
    consumer_secret: cks,
    access_token_key: ac,
    access_token_secret: ats
});

// Use API for search tweet which include My Account ID
client.stream( 'statuses/filter', { track : 'your twitter @ id' }, function( stream ) {
    stream.on( 'data', function( data ) {
        var text = data.text; //  Tweet text
        var textCleaned = 'ツイッターから'+text.replace( /your twitter @ id /g, "" )+'というリプライが届いています'; // Not need screenname
        googlehomeMessage(textCleaned);
    });
});

var schedule = require("node-schedule");

schedule.scheduleJob('00 07 ***',function(){
     googlehomeMessage(morningMessage);
});

schedule.scheduleJob('00 12 * * *', function () {
    googlehomeMessage(celebrateMessage);
});

schedule.scheduleJob('00 23 * * *', function () {
    googlehomeMessage(nightMessage);
});

function googlehomeMessage(message){
     googlehome.notify(message, function(res) {
         console.log(res);
      });  
}
