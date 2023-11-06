import styled from 'styled-components';

export const FriendListWrapper = styled('ul')(() => {
  return {
    display: 'block',
    width: '350px',
    listStyleType: 'none',
    margin: '0 auto',
    backgroundColor: '#fafafa',
    boxShadow: '5px 5px 10px #dee1ec',
    borderRadius: '5px',
    borderColor: 'lightgray',
    marginTop: '40px',
  };
});

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

export const FriendStatus = styled('span')(({ isOnline }) => {
  return {
    display: 'block',
    width: '20px',
    height: '20px',
    backgroundColor: isOnline ? 'green' : 'red',
    borderRadius: '50%',
  };
});
