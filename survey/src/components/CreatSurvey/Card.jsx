import React from 'react'
import { SurveyType } from './SurveyType'

const styles = {
    card: {
        width: '60%',
        height: '300px',
        background: '##F8F9FA',
        border: '1px solid rgba(0, 0, 0, 0.17)',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        
    }
};

export const Card = () => {
  return (
    <div style={styles.card}>
        < SurveyType />
    </div>
  )
}
