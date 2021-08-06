import React from 'react'
import Timer from '../Components/Timer'
import Head from '../Head'

const Pomodoro = () => {
    return (
        <div>
            <Head title="Pomodoro" description="Essa é a hora do trabalho" />
            <Timer minutesPattern={0} secondsPattern={4} />
        </div>
    )
}

export default Pomodoro
