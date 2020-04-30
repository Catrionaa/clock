import './styles/style.styl';


class Clock {

    setDate: Date;
    minutes: number;
    hours: number;
    seconds: number;
    bigHand: HTMLElement;
    smallHand: HTMLElement;
    secondHand: HTMLElement;
    minuteHourRange: number;

    constructor() {
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

        const percentageHours = (this.hours % 12) * 30,
            transform = `rotateZ(${percentageHours + this.minuteHourRange}deg)`;

        this.bigHand.style.transform = transform;
        this.bigHand.style.webkitTransform = transform;

    }

    setMinutes(){
        const percentageMinutes = Math.floor(this.minutes / 60 * 100),
            minuteResult = (percentageMinutes / 100) * 360,
            transform = `rotateZ(${minuteResult}deg)`;

       this.minuteHourRange = (percentageMinutes/ 10)* 3;

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

