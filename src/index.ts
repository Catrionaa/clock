import './styles/style.styl';

// const bigHand = document.getElementById('big-hand'),
//     smallHand = document.getElementById('small-hand'),
//     hours = new Date().getHours(),
//     minutes = new Date().getMinutes(),
//     percentageMinutes = Math.floor(minutes / 60 * 100),
//     minuteResult = (percentageMinutes / 100) * 360,
//     transform = `rotateZ(${minuteResult}deg)`;
//
// smallHand.style.transform = transform;
// smallHand.style.webkitTransform = transform;


class Clock {

    setDate: Date;
    minutes: number;
    hours: number;
    seconds: number;
    bigHand: HTMLElement;
    smallHand: HTMLElement;
    secondHand: HTMLElement;

    constructor() {
        this.setDate = new Date()
        this.minutes = this.setDate.getMinutes()
        this.hours = this.setDate.getHours()
        this.seconds = this.setDate.getSeconds()
        this.bigHand = document.getElementById('big-hand')
        this.smallHand = document.getElementById('small-hand')
        this.secondHand = document.getElementById('second-hand')
    }

    setTimes() {
        this.setDate = new Date()
        this.minutes = this.setDate.getMinutes()
        this.hours = this.setDate.getHours()
        this.seconds = this.setDate.getSeconds()
        this.setSeconds()
        this.setMinutes()
        this.setHours()

    }

    setHours(){
        console.log(this.hours)
    }

    setMinutes(){
        const percentageMinutes = Math.floor(this.minutes / 60 * 100),
            minuteResult = (percentageMinutes / 100) * 360,
            transform = `rotateZ(${minuteResult}deg)`;

        this.smallHand.style.transform = transform;
        this.smallHand.style.webkitTransform = transform;
    }

    setSeconds(){

        const percentageSeconds = Math.floor(this.seconds / 60 * 100),
            minuteResult = (percentageSeconds / 100) * 360,
            transform = `rotateZ(${minuteResult}deg)`;


        this.secondHand.style.transform = transform;
        this.secondHand.style.webkitTransform = transform;
    }


    start() {
        this.setTimes()
        setInterval(this.setTimes.bind(this), 1000)
    }

}

let clock = new Clock()
clock.start()

