import React from 'react'
import { Card } from './Card'
import { Button } from '../General/Button'

const styles = {
    content: {
    display: 'flex',
    width: '100%',
    marginTop: '200px',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
};

export const CreateSurvey = () => {
  return (
    <div style={styles.content}>
      <Card/>
      <Button textButton='Agregar preguntas'/> 
    </div>
  )
}
