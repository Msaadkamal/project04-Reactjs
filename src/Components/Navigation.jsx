import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className ={`${styles.navigation} ${styles.container}`}>
    <div >
        <img src="" alt="No Show" /> 
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>



        </ul>
      
   

    </nav>
  )
}

export default Navigation
