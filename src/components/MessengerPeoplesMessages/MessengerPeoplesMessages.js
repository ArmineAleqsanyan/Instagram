import './MessengerPeoplesMessages.css'
import IMAGES from '../../images'
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'

function MessengerPeoplesMessages() {
const {usersData, currentUser}=useSelector(selectUsers)
  return (
	 <div className='Messenger-left-col-peoples-messages'>
		{
			usersData.filter(user=>user.id!=currentUser.id).map(el => 
			<MessengerPeoplesMessage
				 key={el.id}
				 img={'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png'}
				 id={el.id}
				 name={el.username}
				 active={el.active}/>)
		}
	 </div>
  )
}

export default MessengerPeoplesMessages
