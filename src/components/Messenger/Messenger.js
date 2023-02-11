import './Messenger.css'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage';
import MessengerPeoplesMessages from '../MessengerPeoplesMessages/MessengerPeoplesMessages';
import MessengerChatSection from '../MessengerChatSection/MessengerChatSection';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from '../../store/slices/users/usersSlice';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { reset } from '../../store/slices/messages/messagesSlice';


function Messenger() {
	const dispatch=useDispatch()
	const {currentUser}=useSelector(selectUsers)
	const navigate=useNavigate()
	useEffect(()=>{
		return()=>{
			dispatch(reset())

		}
	}, [])
	useEffect(()=>{
		if (!currentUser) {
			navigate ('/login')
			
		}
	},
	[currentUser])
  return (
	 <div className='Messenger'>
		<div className='Messenger-auto'>
			<div className='Messenger-left-col'>
				<div className='Messenger-left-col-direct'>
					<p>Direct</p>
					<i className="fa-duotone fa-pen-to-square"></i>
				</div>
				<div className='Messenger-left-col-peoples'>
					<div className='Primary-General'>
						<p>Primary</p>
						<p>General</p>
					</div>
					<MessengerPeoplesMessages />
				</div>
			</div>
				<MessengerChatSection />
		</div>
	 </div>
  )
}

export default Messenger
