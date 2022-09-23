import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

const CURRENTTIME_KEY = "videoplayer-current-time"


// Отримуємо  значенння
// записуемо в сховище
const onPlay = function(data) {
    const currentTimeValue = data;

    if (currentTimeValue) {
        localStorage.setItem(CURRENTTIME_KEY, JSON.stringify(currentTimeValue));
    };
 
};
player.on('timeupdate', throttle(onPlay, 1000));



//Отримуемо значення із сховища

const itemTime = localStorage.getItem(CURRENTTIME_KEY);
//  const seconds = JSON.parse(itemTime)?.seconds || 0;
const seconds = itemTime ===  null ? 0 : JSON.parse(itemTime).seconds;

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
