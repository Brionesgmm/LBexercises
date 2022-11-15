const startBtn = document.querySelector('#startTimer')
const stopBtn = document.querySelector('#stopTimer')
const resetBtn = document.querySelector('#resetTimer')
const timerDisplayEl = document.querySelector('#timerDisplay')

class StopWatch {
    constructor(startTime = 0, endTime = 0, duration = 0, ms = 0, s = 0, m = 0, h = 0) {
        this.startTime = startTime
        this.endTime = endTime
        this.duration = duration
        this.running = false
        this.int = null
        this.previousTime = 0
        this.ms = ms
        this.s = s
        this.m = m
        this.h = h
    }
    start() {
        if(!this.running){
            this.startTime = new Date()
            this.running = true
            this.int = setInterval(() => this.displayTime(), 10)
        }
    }
    stop() {
        if(this.running) {
            clearInterval(this.int)
            this.previousTime += new Date().getTime() - this.startTime.getTime()
            this.running = false
        }
    }
    reset() {
        this.startTime = 0
        this.endTime = 0
        this.duration = 0
        this.previousTime = 0
        this.running = false
        clearInterval(this.int)
        timerDisplayEl.innerHTML = '00 : 00 : 00 : 000'
    }
    displayTime() {
        let nowTime = new Date()
        let currentTime = 0
        currentTime = nowTime.getTime() - this.startTime.getTime() + this.previousTime
        let fms = currentTime
        let fs = fms / 1000
        let fm = fs / 60
        let fh = fm / 60

        if (fms >= 1000) {
            fms = fms % 1000
        }
        if (fs >= 60) {
            fs = fs % 60
        }
        if (fm >= 60) {
            fm = fm % 60
        }

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
})

stopBtn.addEventListener('click', () => {
    sw.stop()
})

resetBtn.addEventListener('click', () => {
    sw.reset()
})