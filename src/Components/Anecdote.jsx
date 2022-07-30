import React from 'react';
import {useParams} from 'react-router-dom'

const Anecdote = ({anecdotes}) => {

  const id  = useParams().id
  const anecdote = anecdotes.find(a => a.id === Number(id))
  return (
    <div>
      <h2>{anecdote.content}</h2>

      <div>
        By {anecdote.author}
      </div>
      <div>
        info {anecdote.info}
      </div>
      <div>
        Votes : {anecdote.votes}
      </div>
    </div>
  );
}

export default Anecdote;
