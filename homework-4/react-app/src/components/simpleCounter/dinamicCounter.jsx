import { useEffect } from "react"
import { useState } from "react"

export function DynamicCounter() {

    const [count, setCount] = useState(0)
    const [backgroundColour, setBackgroundColour] = useState('white')

    useEffect(() => {
        if (count > 0) {
            setBackgroundColour('green')
        } else if (count < 0) {
            setBackgroundColour('red')
        } else {
            setBackgroundColour('white')
        }
    }, [count])

    const resetButton = () => {
        setCount(0)
    }

    const negativeValue = () => {
        if (count > -16)
            setCount(count -1)
    }
    return (
        <div style={{ backgroundColor: backgroundColour}}>
            <h1>Dynamic Counter</h1>
            <h2>Increment</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>

            <h2>Decrement</h2>
            <button onClick={negativeValue}>Decrease</button>

            <h2>Reset</h2>
            <button onClick={resetButton}>RESET</button>
            <p style={{backgroundColor: "white"}}>The number is {count}</p>
        </div>
    )
}