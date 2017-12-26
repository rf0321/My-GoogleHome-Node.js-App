# My-Google-Home
My google home Node.js operation system
# Set up

```
npm install
```
After that, please set your googlehome and twitter oauth info in ```nodejs/task.js```
```javascript
googlehome.device('your device name'); 
googlehome.ip('xxxxx');
googlehome.language('your lang'); //exsample 'en', 'ja' 

const ck='your consumer key';
const cks='your consumer secret key';
const ac='your access token';
const ats='your access token secret';
```
# Run
```
cd nodejs && node task.js
```
Have fun!
