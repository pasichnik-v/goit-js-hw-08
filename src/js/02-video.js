
import Player from '@vimeo/player';

  const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
    

player.setCurrentTime(30.456).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});




//     player.on('eventName', function(data) {
//     // data is an object containing properties specific to that event
//     duration: 61.857
//     percent: 0.049
//     seconds: 3.034
// });


// document.addEventListener("webkitfullscreenchange", function( event ) {
// 	console.log(88, event);
//     // The event object doesn't carry information about the fullscreen state of the browser,
//     // but it is possible to retrieve it through the fullscreen API
//     if ( document.fullscreen ) {
        
//         // The target of the event is always the document,
//         // but it is possible to retrieve the fullscreen element through the API
//         var el = document.fullscreenElement;
// 		console.log(el, 777);
//     }

// });