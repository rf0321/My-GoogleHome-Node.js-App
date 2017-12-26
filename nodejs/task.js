const googlehome = require('google-home-notifier')
const morningMessage = 'おはようございます。今日も一日、圧倒的成長しましょう'
const nightMessage = '夜も遅くなってきましたね。睡眠をおすすめします。'
const celebrateMessage = '今日も12時間の生存おめでとうございます。種の保存のため、残り12時間も生きましょう。'


googlehome.device('your device name'); 
googlehome.ip('xxxxx');
googlehome.language('ja');

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