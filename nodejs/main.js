const googlehome = require('google-home-notifier')
const language = 'ja';

googlehome.device('リビング', language); 

googlehome.notify('こんにちは。私はグーグルホームです。', function(res) {
  console.log(res);
});
