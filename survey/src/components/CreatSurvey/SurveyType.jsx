import React, {useState, useEffect} from 'react'
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

    const [dog, setDog] = useState('')

    useEffect(() => {
      getUser(); //CONSOLE
    }, []);
   
      async function getUser() {
        try {
          const response = await fetch('http://localhost:3000/answeredSurvey');
      
          if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
          }
      
          const result = await response.json();
          return result;
        } catch (err) {
          console.log(err);
        }
      }
    


  return (
    <>
        <InputText setTitle={[setTitle, title]}/>
        &nbsp;
        <p required style={styles.text}>{dog}</p>
        &nbsp;

        
    </>
  )
}
