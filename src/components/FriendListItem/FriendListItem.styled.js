import styled from 'styled-components';

export const FriendItem = styled('li')(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '20px',
    fontSize: '22px',
    fontWeight: '500',
  };
});

export const FriendStatus = styled('span')(({ $isOnline }) => {
  return {
    display: 'block',
    width: '20px',
    height: '20px',
    backgroundColor: $isOnline === true ? 'green' : 'red',
    borderRadius: '50%',
  };
});
