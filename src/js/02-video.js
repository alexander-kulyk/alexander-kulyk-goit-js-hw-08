import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

const CURRENTTIME_KEY = "videoplayer-current-time"


// Отримуємо  значенння
// записуемо в сховище
const onPlay = function(data) {
    const currentTimeValue = JSON.stringify(data);
    
    localStorage.setItem(CURRENTTIME_KEY, currentTimeValue)
    
};

player.on('timeupdate', throttle(onPlay, 1000));



//Отримуемо значення із сховища
const getItemTime = localStorage.getItem(CURRENTTIME_KEY);
const seconds = JSON.parse(getItemTime).seconds;

player.setCurrentTime(seconds).then(function(seconds) {
    
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
