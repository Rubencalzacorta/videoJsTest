import videojs from 'video.js';
import './node_modules/video.js/dist/video-js.css';
import 'videojs-offset';

var options = {};
var player = videojs('my-player', options, function onPlayerReady() {
  videojs.log('Your player is ready!');

  this.offset({
    start:10,
    end:15,
    restart_beginning: false
  })

  // In this context, `this` is the player that was created by Video.js.
  this.play();

  // How about an event listener?
  this.on('ended', function() {
    videojs.log('Awww...over so soon?!');
  });
});