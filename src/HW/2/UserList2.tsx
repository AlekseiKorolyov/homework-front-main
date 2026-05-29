import {CurrentUser} from './CurrentUser';
import {UsersObjectType, UserType} from "./HW2";

type AddressPropsType = {
	street: string,
	city: string,
}

type UserPropsType = {
	id: number;
	name: string;
	age: number;
	address: AddressPropsType;
}

type UsersType = {
	myFriends: UserPropsType[];
};

type UserList2PropsType = {
	users: UsersType // пропиши типизацию
	filterUsers: () => void // пропиши типизацию
};

export const UserList2 = (props: UserList2PropsType) => {
	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			<button id={'hw02-filter-button'} onClick={() => props.filterUsers()}>SHOW ME FRIENDS FROM LA</button>

			<ul>
			  {props.users.myFriends.map((user:any) => (
			    <CurrentUser user={user} />
			  ))}
			</ul>
		</div>
	);
};
