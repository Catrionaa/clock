import './styles/style.styl';

const bigHand = document.getElementById('big-hand'),
      smallHand = document.getElementById('small-hand'),
      hours = new Date().getHours(),
      minutes = new Date().getMinutes(),
      percentageMinutes = Math.floor(minutes/60*100),
      minuteResult = (percentageMinutes/100) * 360,
      transform =   `rotateZ(${minuteResult}deg)`;

smallHand.style.transform = transform;
smallHand.style.webkitTransform = transform;
