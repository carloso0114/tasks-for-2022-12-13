function humanReadable (timeinSeconds) {
  let hours = '';
  let minutes = '';
  let seconds = '';
  if (timeinSeconds <= 359999) {
    const h = Math.floor(timeinSeconds / 3600);
    const m = Math.floor((timeinSeconds % 3600) / 60);
    const s = timeinSeconds % 60;
    if (h < 10) {
      hours = `0${h}`;
    } else {
      hours = h;
    }
    if (m < 10) {
      minutes = `0${m}`;
    } else if (m < 60){
      minutes = m;
    }
    if (s < 10) {
      seconds = `0${s}`;
    } else if (s < 60){
      seconds = s;
    }
  }
  return `${hours}:${minutes}:${seconds}`;
}

console.log(humanReadable(359999))
