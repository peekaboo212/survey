import React from 'react'

const styles = {
  button: {
    whiteSpace: 'normal',
    background: '#0171C2',
    border: '1px solid rgba(0, 0, 0, 0.17)',
    boxShadow: '0px 1px 4px 0px #00000040',
    borderRadius: '25px',
    fontSize: '20px',
    color: '#FFFFFF',
    fontWeight: '400',
    textAlign: 'center',
    padding: '10px'
  }
};

export const Button = ({textButton}) => {
  return (
    <>
        <button style={styles.button}>{textButton}</button>
    </>
  )
}
