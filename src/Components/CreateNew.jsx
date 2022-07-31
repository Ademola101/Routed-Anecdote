import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useField} from '../hooks/index'


const CreateNew = ({addNew}) => {
  const content = useField('text')
  const navigate = useNavigate()
  
  const [author, setAuthor] = useState('')
  const [info, setInfo] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    addNew({
      content: content.value,
      author,
      info,
      votes: 0
    })

    navigate('/')
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
           <label htmlFor="content"> content
           <input type={content.type} name='content' value={content.value} onChange={content.onChange}/>
           </label>
          
        </div>
        <div>
          author
          <input name='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          url for more info
          <input name='info' value={info} onChange={(e)=> setInfo(e.target.value)} />
        </div>
        <button>create</button>
      </form>

      
    </div>
  )

}

export default CreateNew