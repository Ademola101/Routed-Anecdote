import React from 'react';


const Anecdote = ({anecdote}) => {

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
