const startBtn = document.querySelector('#startTimer')
const stopBtn = document.querySelector('#stopTimer')
const resetBtn = document.querySelector('#resetTimer')
const timerDisplayEl = document.querySelector('#timerDisplay')
let milSec = 0
let sec = 0
let min = 0
let hour = 0
let int = null

class StopWatch{
    constructor(startTime = 0, endTime = 0, duration = 0, ms = 0, s = 0, m = 0, h = 0){
        this.startTime = startTime
        this.endTime = endTime
        this.duration = duration
        this.ms = ms
        this.s = s
        this.m = m
        this.h = h
    }
    start(){
        if(int!==null){
            clearInterval(int);
        }
        if(this.startTime === 0){
            this.startTime = new Date()
        }else{
            console.log("Time is already running")
        }
    }
    stop(){
        if(this.startTime !== 0 ){
            this.endTime = new Date()
            this.duration += (this.endTime.getTime() - this.startTime.getTime()) / 1000
            this.startTime = 0
        }else{
            console.log("No time is running")
        }
    }
    reset(){
        this.startTime = 0
        this.endTime = 0
        this.duration = 0
        clearInterval(int);
        [milSec,sec,min,hour] = [0,0,0,0]
        timerDisplayEl.innerHTML = '00 : 00 : 00 : 00 '
    }
    displayTime(){
        milSec += 10
        if(milSec == 1000){
            milSec = 0
            sec++
        }else if(sec == 60){
            sec = 0
            min++
        }else if(min == 60){
            min = 0
            hour++
        }
        
        this.h = hour < 10 ? "0" + hour  : hour ;
        this.m = min < 10 ? "0" + min : min;
        this.s = sec < 10 ? "0" + sec : sec;
        this.ms = milSec < 10 ? "00" + milSec : milSec < 100 ? "0" + milSec : milSec 
        timerDisplayEl.innerHTML = ` ${this.h} : ${this.m} : ${this.s} : ${this.ms}`
    }
}

let sw = new StopWatch()

startBtn.addEventListener('click', () => {
    sw.start()
    int = setInterval(sw.displayTime, 10)
})

stopBtn.addEventListener('click', () => {
    sw.stop()
    clearInterval(int)
    console.log(sw.duration)
})

resetBtn.addEventListener('click', ()=> {
    sw.reset()
})