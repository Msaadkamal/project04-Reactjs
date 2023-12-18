import ButtonHor from './button';
import React from 'react';
import { useState } from 'react';
import styles from './ContactForm.module.css';


const ContactForm = () => {
  let[name,setname]=useState("MuhammadSaadKamal");
  let [email,setemail]=useState('saadkaml100@gmail.com');
  let [text,settext]=useState("adsjasdjasdjsdj");
  const OnSubmitform=(event)=>{

    event.preventDefault();
    setname(event.target[0].value);
    setemail(event.target[1].value);
    settext(event.target[2].value);
    
  }
  return ( <section className={styles.container}>
    <div className={styles.ContactForm}>
      <div className={styles.Headbutton}> 
      <ButtonHor text="view support and Chat"></ButtonHor>
      <ButtonHor text="Via Call"></ButtonHor> 
       </div>
      <ButtonHor isOutline={true} text="VIA EMAIL FORM"></ButtonHor> 
      <form 
      onSubmit={OnSubmitform}
      >
        <div className={styles.FormControler}>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' />
        </div>
        <div className={styles.FormControler}>
        <label htmlFor="email">Email</label>
        <input type="email" name='email' />
        </div>
        <div className={styles.FormControler}>
        <label htmlFor="text">Text</label>
        <input type="text"   name='text' />
        <div style={{
          display:'flex',
          justifyContent:'end'}}>
        <ButtonHor text="Submit"></ButtonHor> 
        </div>
        <div>{name +"    " + email +"   " + text + "   "}</div>
        </div>
      </form>
        </div>
    <div className={styles.contactImage}></div>


  </section>

    
  )
}

export default ContactForm
