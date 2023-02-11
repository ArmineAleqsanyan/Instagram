import { useSelector } from 'react-redux'
import { selectMessages } from '../../store/slices/messages/messagesSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
import './MessengerChat.css'

function MessengerChat() {
  const {currentDialog}=useSelector(selectMessages)
  const {currentUser}=useSelector(selectUsers)
  return (
	 <div className='MessengerChat'>
		{
      currentDialog.map(message=>(
        <h1 key={message.id}  
        style={{backgroundColor:message.fromID===currentUser.id? 'grey': 'blue'}}>
          {message.txt}
        </h1>
      ))
    }
	 </div>
  )
}

export default MessengerChat
