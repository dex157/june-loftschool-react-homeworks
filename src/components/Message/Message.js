import React from 'react';
import './Message.css';
const Message = props => {
  return (
    <div>
      <span className="message">{props.text}</span>
    </div>
  );
};

// class Message extends Component {
//   render() {
//     return (
//       <div>
//         <span className="message" onClick={console.log('Hello')}>
//           Hello
//         </span>
//       </div>
//     );
//   }
// }
export default Message;
