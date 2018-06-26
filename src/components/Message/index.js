// export { default } from './Message';
import './Message.css';
import React from 'react';

function Message (props) {
  return(
    <span className='message'>{props.text}</span>
  )
}

export default Message;
