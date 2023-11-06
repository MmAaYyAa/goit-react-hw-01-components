import styled from 'styled-components';

export const Table = styled('table')(() => {
  return {
    width: '600px',
    border: '1px solid lightgray',
    boxShadow: '5px 5px 10px #dee1ec',
    borderCollapse: 'collapse',
    margin: 'auto',
    'tr:nth-child(even)': {
      backgroundColor: 'rgba(173, 216, 230, 0.2)',
    },

    th: {
      width: '200px',
      backgroundColor: 'rgba(147, 216, 230, 1)',
      paddingTop: '14px',
      paddingBottom: '14px',
      color: 'white',
      textTransform: 'uppercase',
    },

    td: {
      border: '1px solid lightgray',
      padding: '10px',
      paddingLeft: '12%',
      color: '#50717b',
      textAlign: 'start',
      '&:first-letter': {
        textTransform: 'uppercase',
      },
    },
  };
});
