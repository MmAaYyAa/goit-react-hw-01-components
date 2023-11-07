import { FriendItem, FriendStatus } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <ul className="friend-list">
      <FriendItem className="item" key={id}>
        <FriendStatus isOnline={isOnline}></FriendStatus>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </FriendItem>
    </ul>
  );
};

export default FriendListItem;
