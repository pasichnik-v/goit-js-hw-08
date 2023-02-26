
// Імпорт
import throttle from "lodash.throttle";
import Player from '@vimeo/player';

// Викликав плеєр і зв'язав
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('Музика грає');
    });
    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

const STORAGE_KEY = 'videoplayer-current-time';
    // Додати подію відсліджування оновлення часу відтворення. Додаємо в сховище дані
const onPlay = function ({ duration, seconds, percent }) {
    if (percent < 1) {
    localStorage.setItem(STORAGE_KEY, seconds);    
    } else {
        console.log('чистити кеш');
        localStorage.removeItem(STORAGE_KEY);
    }
    
    
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = localStorage.getItem(STORAGE_KEY);
    // Відтворення даних стартуючи з currentTime.

player.setCurrentTime(currentTime).then(function(seconds) {
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


