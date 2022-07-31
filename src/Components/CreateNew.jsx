import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useField} from '../hooks/index'


const CreateNew = ({addNew}) => {
  const content = useField('text')
  const author  = useField('text')
  const info = useField('text')
  const votes = useField('text')
  const navigate = useNavigate()
  



  const handleSubmit = (e) => {
    e.preventDefault()
    addNew({
      content: content.value,
      author: author.value,
      info : info.value,
      votes: votes.value
    })

    navigate('/')
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
           <label htmlFor="content"> content
           <input {...content}/>
           </label>
          
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...info} />
        </div>
        <button>create</button>
      </form>

      
    </div>
  )

}

export default CreateNew