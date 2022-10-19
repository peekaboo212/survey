import React, {useState} from 'react'
import {InputText} from '../General/InputText'

const styles = {
    inputText: {
        width: '80%',
        background: '#D5EFF5',
        border: '0',
        height: '100%',
        fontFamily: 'Roboto',
        fontSize: '25px',
        fontWeight: '400',
        textAlign: 'left',
        padding: '10px 15px'
    }
}

export const SurveyType = () => {

    const [title, setTitle] = useState('Survey Title...')


  return (
    <>
        <InputText setTitle={[setTitle, title]}/>
        &nbsp;
        <p required style={styles.text}>Descripción:</p>
        &nbsp;
    </>
  )
}
