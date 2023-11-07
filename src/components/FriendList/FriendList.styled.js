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
