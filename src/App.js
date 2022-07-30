import { useState } from 'react'
import CreateNew from './Components/CreateNew'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import About from './Components/About'
import Footer from './Components/Footer'
import Anecdote from './Components/Anecdote'
import Notification from './Components/Notification'

const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  return (
    // <div>
    //   <a href='#' style={padding}>anecdotes</a>
    //   <a href='#' style={padding}>create new</a>
    //   <a href='#' style={padding}>about</a>
    // </div>

    <div>

      <Link style={padding} to = '/' > Anecdote </Link>
      <Link style={padding} to = '/about' > About </Link>
      <Link style={padding} to = '/create-new' > Create new </Link>
    </div>
  )
}

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map(anecdote => <li key={anecdote.id} >
        <Link to={`/anecdotes/${anecdote.id}`}>
        {anecdote.content}
        </Link>
        </li>)}
    </ul>
  </div>
)


const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))

    setNotification(`${anecdote.content} created`)

    setTimeout(() => {
      setNotification('')
    }, 5000)
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  return (
    <Router>
<div>
      <h1>Software anecdotes</h1>
      <Menu />
       </div>
<Notification message={notification}/>
    <Routes>

      <Route path='/' element ={<AnecdoteList anecdotes={anecdotes}/>}/>
      <Route path='/anecdotes/:id' element ={<Anecdote anecdotes={anecdotes}/>}/>
      <Route path='/about' element ={<About/>}/>
      <Route path='/create-new' element ={<CreateNew addNew={addNew} />}/>
    </Routes>
<Footer/>
    </Router>
    
  )
}

export default App
