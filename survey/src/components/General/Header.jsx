import React from 'react'
import logo from '../../../public/logo.png'
import name from '../../../public/brand.png'

const styles = {
  header: {
    display: 'flex',
    width: '100%',
    background: '#0171C2'
  },
  logo: {
    height: '58px',
    margin: '10px 5px 10px 20px'
  },
  brand: {
    height: '58px',
    margin: '10px 20px 10px 5px'
  }
};

export const Header = () => {

  return (
    <div style={styles.header}>
        <img src={logo} style={styles.logo}></img>
        <img src={name} style={styles.brand}></img>
    </div>
  )
}
