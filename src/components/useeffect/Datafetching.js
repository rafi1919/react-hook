import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Datafetching() {
const [post, setPost] = useState({})
const [id, setId] = useState(1)
const [idbutton, setIdbutton] = useState(1)

const handleClick =() =>{
    setIdbutton(id)
}

    useEffect(() =>{
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idbutton}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idbutton])


    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick} >submit</button>
            <p>title:</p>
            <div style={{width: "400 px"}}>{post.title}</div>
            <p>body:</p>
            <div style={{width: "400 px"}}>{post.body}</div>


           {/* <ul>
               {
                   post.map(post=> <li key={post.id}>{post.title}</li>)
               }
            </ul>  */}
        </div>
    )
}


export default Datafetching
