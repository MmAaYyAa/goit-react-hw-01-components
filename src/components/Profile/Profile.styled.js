import styled from 'styled-components';

export const Wrapper = styled('div')(() => {
  return {
    width: '500px',
    border: '1px solid #f6f5f5',
    borderRadius: '15px',
    margin: '40px auto',
    backgroundColor: '#eeeeee',
    boxShadow: '2px 3px 5px #dee1ec',
  };
});

export const Description = styled('div')(() => {
  return {
    margin: 'auto',
    width: '100%',
    textAlign: 'center',
    padding: '15px',
  };
});

export const Image = styled('img')(() => {
  return {
    width: '400px',
    margin: '12px',
  };
});

export const UserName = styled('p')(() => {
  return {
    fontSize: '22px',
    fontWeight: '700',
    color: '#233142',
  };
});

export const LocationTag = styled('p')(() => {
  return {
    color: '#85a6b1',
  };
});

export const Stats = styled('ul')(() => {
  return {
    display: 'flex',
    margin: '0',
    padding: '0',
    justifyContent: 'space-evenly',
    listStyleType: 'none',
    backgroundColor: '#e3e3e3',
  };
});

export const StatsItem = styled('li')(() => {
  return {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ccc',
    paddingTop: '25px',
    paddingBottom: '25px',
  };
});

export const Label = styled('span')(() => {
  return {
    fontSize: '16px',
    color: '#85a6b1',
    paddingBottom: '8px',
  };
});

export const Quantity = styled('span')(() => {
  return {
    fontWeight: '700',
    color: '#3a4750',
  };
});
