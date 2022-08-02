import {useNavigate} from 'react-router-dom'
import {useField} from '../hooks/index'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const CreateNew = ({addNew}) => {
  const {reset:contentRest, ...content} = useField('text')
  const {reset: authorReset, ...author}  = useField('text')
  const {reset: infoReset, ...info} = useField('text')
  const navigate = useNavigate()
  



  const handleSubmit = (e) => {
    e.preventDefault()
    addNew({
      content: content.value,
      author: author.value,
      info : info.value,
      
    })

    navigate('/')
  }

  const handleReset = (e) => {
    e.preventDefault()
    contentRest()
    authorReset()
    infoReset()
    
    
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <Form onSubmit={handleSubmit} >
        <Form.Group>
        <div>
           <Form.Label htmlFor="content"> content : </Form.Label>
           <Form.Control {...content}/>
           
          
        </div>
        <div>
           <Form.Label> author</Form.Label>
          <Form.Control {...author} />
        </div>
        <div>
        <Form.Label>url for more info</Form.Label>  
          <Form.Control {...info} />
        </div>
        <Button variant = 'danger' type="reset" onClick={handleReset} > Reset</Button>
        <Button variant = 'primary' type="submit"  > Create </Button>
        
        </Form.Group>
      </Form>

      
    </div>
  )

}

export default CreateNew