const startBtn = document.querySelector('#startTimer')
const stopBtn = document.querySelector('#stopTimer')
const resetBtn = document.querySelector('#resetTimer')
const timerDisplayEl = document.querySelector('#timerDisplay')
let milSec = 0
let sec = 0
let min = 0
let hour = 0
let int = null
let startingTime = 0
let deltaTime = 0

class StopWatch {
    constructor(startTime = 0, endTime = 0, duration = 0, ms = 0, s = 0, m = 0, h = 0) {
        this.startTime = startTime
        this.endTime = endTime
        this.duration = duration
        this.ms = ms
        this.s = s
        this.m = m
        this.h = h
    }
    start() {
        if (int !== null) {
            clearInterval(int);
        }
        if (this.startTime === 0) {
            this.startTime = new Date()
        } else {
            console.log("Time is already running")
        }
    }
    stop() {
        if (this.startTime !== 0) {
            this.endTime = new Date()
            this.duration += (this.endTime.getTime() - this.startTime.getTime()) / 1000
            this.startTime = 0
        } else {
            console.log("No time is running")
        }
    }
    reset() {
        this.startTime = 0
        this.endTime = 0
        this.duration = 0
        clearInterval(int);
        [milSec, sec, min, hour] = [0, 0, 0, 0]
        timerDisplayEl.innerHTML = '00 : 00 : 00 : 000'
    }
    displayTime() {
        let now = new Date()
        let currentTime = 0
        
        currentTime = now.getTime() - startingTime.getTime()
        console.log(currentTime)
        deltaTime = currentTime
        let fms = currentTime
        let fs = fms / 1000
        let fm = fs / 60
        let fh = fm / 60
        console.log(fms)
        console.log(fs)
        console.log(fm)
        console.log(fh)

        if (fms >= 1000) {
            fms = fms % 1000
        }
        if (fs >= 60) {
            fs = fs % 60
        }
        if (fm >= 60) {
            fm = fm % 60
        }
        console.log(`0${Math.floor(fh)} : 0${Math.floor(fm)} : 0${Math.floor(fs)} : ${fms}`)

        this.h = fh < 10 ? "0" + Math.floor(fh) : Math.floor(fh);
        this.m = fm < 10 ? "0" + Math.floor(fm) : Math.floor(fm);
        this.s = fs < 10 ? "0" + Math.floor(fs) : Math.floor(fs);
        this.ms = fms < 10 ? "00" + Math.floor(fms) : Math.floor(fms) < 100 ? "0" + Math.floor(fms) : Math.floor(fms)
        timerDisplayEl.innerHTML = ` ${this.h} : ${this.m} : ${this.s} : ${this.ms}`
    }
}

let sw = new StopWatch()

startBtn.addEventListener('click', () => {
    sw.start()
    if(!startingTime){
        startingTime = new Date()  
    }
    int = setInterval(sw.displayTime, 10)
})

stopBtn.addEventListener('click', () => {
    sw.stop()
    clearInterval(int)
    console.log(sw.duration)
})

resetBtn.addEventListener('click', () => {
    sw.reset()
    currentTime = 0
    deltaTime = 0
    startingTime = null
})


function figureOutTime(mils) {
    let fms = mils
    let fs = fms / 1000
    let fm = fs / 60
    let fh = fm / 60
    console.log(fms)
    console.log(fs)
    console.log(fm)
    console.log(fh)

    if (fms >= 1000) {
        fms = fms % 1000
    }
    if (fs >= 60) {
        fs = fs % 60
    }
    if (fm >= 60) {
        fm = fm % 60
    }
    console.log(`0${Math.floor(fh)} : 0${Math.floor(fm)} : 0${Math.floor(fs)} : ${fms}`)
}

figureOutTime(157)
figureOutTime(70956)
figureOutTime(543785)
figureOutTime(98265432)