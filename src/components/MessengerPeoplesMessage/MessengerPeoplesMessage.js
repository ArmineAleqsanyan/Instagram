import { useDispatch, useSelector } from 'react-redux'
import { selectMessages, toggleActiveUser } from '../../store/slices/messages/messagesSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
import './MessengerPeoplesMessage.css'

function MessengerPeoplesMessage({name,id,img}) {
	const dispatch = useDispatch()
	const {activeUserId}=useSelector(selectMessages)
	const {currentUser}=useSelector(selectUsers)
  return (
	 <div onClick={()=>dispatch(toggleActiveUser({id, fromId:currentUser.id	}))} 
	 style={{backgroundColor: activeUserId===id? 'darkgray': ''}} 
	 className='Messenger-left-col-people-message'>
		<div className='Messsage-img'>
			<img src={img} alt=''/>
		</div>
		<div className='Message-info'>
			<p>{name}</p>
		</div>
	 </div>
  )
}

export default MessengerPeoplesMessage
