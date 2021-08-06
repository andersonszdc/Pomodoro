import React from 'react'
import Timer from '../Components/Timer'
import Head from '../Head'

const ShortBreak = () => {
    return (
        <div>
            <Head title="Short Break" description="Essa é a hora do descanso curto" />
            <Timer minutesPattern={0}secondsPattern={3} />
        </div>
    )
}

export default ShortBreak
