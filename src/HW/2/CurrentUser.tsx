import { UserType } from './HW2';

type UserAddress = {
    street: string
    city: string
}

type UserPropsType = {
    id: number
    name: string
    age: number
    address: UserAddress
}

type CurrentUserPropsType = {
  user: UserPropsType// пропиши типизацию
};

export const CurrentUser = (props: CurrentUserPropsType) => {
  return (
    <li key={props.user.id} id={`hw02-user-${props.user.id}`}>
      <strong>{props.user.name}</strong> (Age: {props.user.age})<strong> Address: </strong>
      {props.user.address.street}, {props.user.address.city}
    </li>
  );
};
