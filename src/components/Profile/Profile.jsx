import React from 'react';
import {
  Wrapper,
  Description,
  Image,
  UserName,
  LocationTag,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';
const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Wrapper className="profile">
      <Description className="description">
        <Image src={avatar} alt="User avatar" className="avatar" />
        <UserName className="name">{username}</UserName>
        <LocationTag className="tag">@{tag}</LocationTag>
        <LocationTag className="location">{location}</LocationTag>
      </Description>
      <Stats className="stats">
        <StatsItem>
          <Label className="label">Followers </Label>
          <Quantity className="quantity">{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label className="label">Views </Label>
          <Quantity className="quantity">{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label className="label">Likes </Label>
          <Quantity className="quantity">{likes}</Quantity>
        </StatsItem>
      </Stats>
    </Wrapper>
  );
};

export default Profile;
