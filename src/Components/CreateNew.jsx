import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useField} from '../hooks/index'


const CreateNew = ({addNew}) => {
  const {reset:contentRest, ...content} = useField('text')
  const {reset: authorReset, ...author}  = useField('text')
  const {reset: infoReset, ...info} = useField('text')
  const {reset: voteReset, ...votes} = useField('text')
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

  const handleReset = (e) => {
    e.preventDefault()
    contentRest()
    authorReset()
    infoReset()
    voteReset()
    
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit} >
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
        <input required type="reset" value= 'Reset' onClick={handleReset} />
        <input type="submit" value= 'Create' />
      </form>

      
    </div>
  )

}

export default CreateNew