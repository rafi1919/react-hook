import React, {useState, useEffect} from 'react'

function Hookcountermouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useeffect called')
        window.addEventListener('mousemove', logMousePosition)
        
        return ()=>{
            console.log('component unmount')
            window.removeEventListener('mousemoe', logMousePosition)
        }
    },[])

    return (
        <div>
            Hooks X -{x} Y -{y}
        </div>
    )
}

export default Hookcountermouse
