import React, {useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const increment5 =() =>{
        for(let i = 0; i<5 ; i++){
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            count :{count}
            <button onClick={() =>setCount(initialCount)}>reset</button>
            <button onClick={() =>setCount(count + 1)}>increment</button>
            <button onClick={() =>setCount(count - 1)}>decrement</button>
            <button onClick={increment5}>increase5 </button>
        </div>
    )
}

export default HookCounterTwo
