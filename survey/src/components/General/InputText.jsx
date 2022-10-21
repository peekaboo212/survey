import React from 'react'
// import CheckIcon from '@mui/icons-material/Check'

const styles = {
    containerTitle: {
        display: 'grid ',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '40px'
    },
    label:{
        fontFamily: 'Roboto',
        fontSize: '25px',
        fontWeight: '400',
        lineHeight: '29px',
        textAlign: 'left',
        width: '10%'
    },
    inputText: {
        gridArea: 'inputText',
        width: '96%',
        background: '#D5EFF5',
        border: '0',
        height: '100%',
        fontFamily: 'Roboto',
        fontSize: '25px',
        fontWeight: '400',
        textAlign: 'left',
        outline: 'none',
    },
    containerInput: {
        background: '#D5EFF5',
        padding: '10px 15px',
        width: '80%',
        borderRadius: '5px',
    },
    icon: {
        width:'10px'
    }

};

export const InputText = ({setTitle, title}) => {

    const changeTitle = ({target}) => {
        setTitle(target.value)
    }

    const clearInput = () => title==='Survey Title...' && setTitle('')

  return (
    <div style={styles.containerTitle}>
        <p style={styles.label}>Título: </p>
        <div style={styles.containerInput}>
            <input type="text" id='title' name='title' value={title} 
                onChange={changeTitle}
                onClick={clearInput}
                required style={styles.inputText}/>
            {/* <CheckIcon></CheckIcon> */}
        </div>
    </div>
  )
}
