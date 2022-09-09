import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import { FormsCont , UserName,Email,PasswordComp, ConfirmPs,Btn } from './SignUpPage.styled';


const FormSignup = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
   // sendForm,
    validate
  );

  return (
  
       <FormsCont>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <UserName>
        <div className='form-inputs'>
         
          <input
            className='form-input'
            type='text'
            name='FirstName'
            placeholder='Enter your First Name'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
         
          <input
            className='form-input'
            type='text'
            name='lastname'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        </UserName>
        <Email>
         
          <input
          
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
           
          />
          {errors.email && <p>{errors.email}</p>}
        </Email>
        <PasswordComp>
       
          <input
          
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </PasswordComp>
        <ConfirmPs>
      
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </ConfirmPs>
       <Btn>
         <button className='form-input-btn' type='submit'>
          Sign up
       
        </button>
        
        </Btn>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
      </FormsCont>
  
  );
};

export default FormSignup;