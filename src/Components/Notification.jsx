import React from 'react';
import  Alert  from 'react-bootstrap/Alert';
const Notification = ({message}) => {
  
  return (
    <div> {( message && <Alert> {message}</Alert>  )}
    
    </div>
  );
}

export default Notification;
