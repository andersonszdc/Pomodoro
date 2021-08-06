import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import styles from './Timer.module.css'
import music from '../Music/bell-ring.mp3'
import { useNavigate } from 'react-router-dom'

const Timer = (props) => {
    const minutesPattern = props.minutesPattern
    const secondsPattern = props.secondsPattern
    const circumference = 185*2*Math.PI
    const [minutes, setMinutes] = useState(minutesPattern)
    const [seconds, setSeconds] = useState(secondsPattern)
    const [active, setActive] = useState(false)
    const [text, setText] = useState('Start')
    const [progress, setProgress] = useState(circumference)
    const audio = useRef()
    const navigate = useNavigate()

    useEffect(() => {

        if (active) {
            let total = minutesPattern*60 + secondsPattern
            let divisao = circumference/total
            let intervalWork = setInterval(() => {
                clearInterval(intervalWork)
                if (seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59)
                        setMinutes(minutes - 1)
                    } else {
                        setActive(false)
                    }
                } else {
                    setSeconds(seconds - 1)
                }
                setProgress(progress - divisao)
            }, 1000);
        }
        if(minutes===0 && seconds===0) {
            setText('Start')
            setProgress(0)
            audio.current.play()        
        }

    }, [seconds, minutes, minutesPattern, secondsPattern, active, circumference, progress, navigate])

    function handleClick () {
        if (!active) {
            setActive(true)
            setText('Pause')
        } else {
            setActive(false)
            setText('Start')
        }
        
    }

    function handleRestart () {
        setActive(false)
        let intervalWork = setInterval(() => {
            clearInterval(intervalWork)
            setMinutes(minutesPattern)
            setSeconds(secondsPattern)
            setProgress(circumference)
            setText('Start')
        }, 1000)
    }

    const atualMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const atualSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div className={styles.circle} >
            {`${atualMinutes}:${atualSeconds}`}
            <Button className={styles.start} onClick={handleClick} text={text} />
            <Button className={styles.restart} onClick={handleRestart} text='Restart' />
            <svg className={styles.svg} height="450" width="450">
                <circle
                    className={styles.circle}
                    strokeWidth="12"
                    stroke="#E56275"
                    strokeDasharray={circumference}
                    strokeDashoffset={progress}
                    fill="transparent"
                    r="185"
                    cx="225"
                    cy="225"
                />
            </svg>
            <audio preload="true" ref={audio} src={music} ></audio>
        </div>
    )
}

export default Timer
