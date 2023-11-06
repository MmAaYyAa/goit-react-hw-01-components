import styled from 'styled-components';
import getRandomHexColor from '../helpers/randomColor.js';

export const StatisticWrapper = styled('section')(() => {
  return {
    display: 'block',
    width: '500px',
    border: '1px solid #dbd8e3',
    borderRadius: '15px',
    boxShadow: '5px 5px 10px #dee1ec',
    margin: 'auto',
    marginBottom: '20px',
    textAlign: 'center',
    overflow: 'hidden',
  };
});

export const StatisticsTitle = styled('h2')(() => {
  return {
    display: 'block',
    fontSize: '24px',
    fontWeight: '700',
    color: '#233142',
  };
});

export const StatList = styled('ul')(() => {
  return {
    display: 'flex',
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  };
});

export const StatItem = styled('li')(() => {
  return {
    display: 'flex',
    flex: '1',
    gap: '5px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '20px',
    paddingTop: '20px',
    border: '1px solid #ccc',
    color: '#fafafa',
    backgroundColor: getRandomHexColor(),
  };
});

export const StatPercentage = styled('span')(() => {
  return {
    fontSize: '18px',
    fontWeight: '700',
  };
});
