import React from 'react';
import styles from './button.module.css'
    

const ButtonHor = ({text,isOutline,...rest}) => {
  return (
    <div >  
        <button {...rest} className={ isOutline? styles.outlinebtn: styles.button}>{text}</button>
      
    </div>
  )
}

export default ButtonHor
