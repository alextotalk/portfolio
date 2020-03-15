import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
  return (
    <div className={styles.contacts} id="3">
      <form className={styles.container}
            action="https://formspree.io/xbjoodrz"
            method="POST"
      >
        <span className={styles.spanContacts}>Contacts</span>
        <div className={styles.formItems}>
          <div className={styles.input}>
            <input name={'name'} placeholder='Name'/>
            <input name={'email'} placeholder='E-mail:'/>
          </div>
          <div className={styles.input}>
            <textarea name={'messages'} placeholder={'Enter your text'}/>
          </div>
        </div>
        <button type={'submit'} className={styles.buttonSend}>Send</button>
      </form>
    </div>
  );
}

export default Contacts;
