import React from 'react';

import Card from '../../UI/Card/Card';

import './Notification.css';

const Notification = ({ notificationLists }) => {
	let today = {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	};

	return (
		<Card>
			<div className='card-content'>
				<ul className='notifications'>
					{notificationLists &&
						notificationLists.map((item) => {
							return (
								<li key={item.id}>
									<span className='text-info'>{item.user} </span>
									<span>{item.content}</span>
									<div className='note-date text-info'>
										{item.time.toDate().toLocaleDateString('en-US', today)}
									</div>
								</li>
							);
						})}
				</ul>
			</div>
		</Card>
	);
};

export default Notification;
