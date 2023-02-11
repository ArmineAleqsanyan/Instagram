import './MessengerChatForm.css'
import IMAGES from '../../images'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import { addNewMessage } from '../../store/slices/messages/messagesSlice'

function MessengerChatForm() {
	const {currentUser}=useSelector(selectUsers)
	const dispatch=useDispatch()
	const formRef=useRef(null)
	const handleSubmit=(e)=>{
		e.preventDefault()
		const txt=formRef.current[0].value
		dispatch(addNewMessage({
			txt,
			fromID:currentUser.id
		}))
		formRef.current.reset()

	}
  return (
	 <div className='Chat-input'>
		<form ref={formRef} onSubmit={handleSubmit}>
		<input type='text' placeholder='Message...'/>
		<img src={IMAGES.like} alt=''/>
		</form>
	 </div>
  )
}

export default MessengerChatForm
