import React from 'react';
import { remove } from '../actions';

const UserItem = ({onClick, user}) => {
	return (
		<li key={user.id}>{user.username}(<a href="mailto:aa">{user.email}</a>)<button onClick={onClick}>Xóa</button></li>
	);
};
export default UserItem;
