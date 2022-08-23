import React, {useState, useEffect} from 'react'

function Hookcounteref() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState(' ')

    useEffect(() => {
        console.log(' updating content')
        document.title = ' you clicked ${count} times'

    })
    return (
        <div>
            <input type='text' value={name} onChange={e =>setName (e.target.value)}></input>
            <button onClick={() => setCount (count + 1) }> click {count} </button>
        </div>
    )
}

export default Hookcounteref
