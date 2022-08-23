import React, {useState, useEffect} from 'react'
import Hookcountermouse from './Hookcountermouse'

function Hookmousecontainer() {
    const [display, setDisplay] = useState(true)

    return (
        <>
           <button onClick={()=> setDisplay(!display)}> toggle display</button>
           {display && <Hookcountermouse/>}
        </>
    )
}

export default Hookmousecontainer
