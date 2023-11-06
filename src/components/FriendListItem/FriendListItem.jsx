import {
  FriendListWrapper,
  FriendItem,
  FriendStatus,
} from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendListWrapper className="friend-list">
      <FriendItem className="item" key={id}>
        <FriendStatus className="status">{isOnline}</FriendStatus>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </FriendItem>
    </FriendListWrapper>
  );
};

export default FriendListItem;
