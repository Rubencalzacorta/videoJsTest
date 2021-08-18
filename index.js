import videojs from 'video.js';
import './node_modules/video.js/dist/video-js.css';
import offset from  'videojs-offset';
videojs.registerPlugin("offset", offset)

var options = {};
var player = videojs('my-player')

player.ready(() => {
  videojs.log('Your player is ready!')
  player.offset({
    start:100,
    end:150,
  })

})
