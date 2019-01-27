window.onload = () => {
  const secondsHand = document.querySelector('div.second-hand');
  const minutesHand = document.querySelector('div.min-hand');
  const hoursHand = document.querySelector('div.hour-hand');

  setInterval(() => {
    const currentTime = new Date();
    //plus 90 for the initial rotate of 90 degrees
    const secondsInDeg = calcTimeToDeg(currentTime.getSeconds(), 60) + 90;
    applyRotatin(secondsHand, secondsInDeg);

    const minutesInDeg = calcTimeToDeg(currentTime.getMinutes(), 60) + 90;
    applyRotatin(minutesHand, minutesInDeg);

    const hoursInDeg = calcTimeToDeg(currentTime.getHours(), 12) + 90;
    applyRotatin(hoursHand, hoursInDeg);
  }, 1000);

  const calcTimeToDeg = (time, type) => {
    return (time / type) * 360;
  };

  const applyRotatin = (el, deg) => {
    el.style.transform = `rotate(${deg}deg)`;
  };
};
