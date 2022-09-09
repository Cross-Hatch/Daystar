import React, { useState } from 'react';

import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

//   function submitForm() {
//     setIsSubmitted(true);
//   }

  function sendForm( ){
    setIsSubmitted(true)
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
         
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={sendForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;