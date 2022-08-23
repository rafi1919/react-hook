import React,{useState} from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={()=> setCount(count+1)}>plus</button>
            <div>{count}</div>
            <button onClick={()=> setCount(count-1)}>minus</button>
        </div>
    )
}

export default HookCounter
