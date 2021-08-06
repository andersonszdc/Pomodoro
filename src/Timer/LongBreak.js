import React from 'react'
import Timer from '../Components/Timer'
import Head from '../Head'

const LongBreak = () => {
    return (
        <div>
            <Head title="Long Break" description="Essa é a hora do descanso longo" />
            <Timer minutesPattern={0} secondsPattern={2} />
        </div>
    )
}

export default LongBreak
