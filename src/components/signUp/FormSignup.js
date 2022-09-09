import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';

import { FormsCont , UserName ,PasswordComp, ConfirmPs,Btn, Contact, Location} from './SignUpPage.styled';
import { Link } from 'gatsby';


const FormSignup = (props) => {
  console.log(props)
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
            placeholder=' FIRST NAME'
            value={values.FirstName}
            onChange={handleChange}
          />
          {/* {errors.username && <p>{errors.username}</p>} */}
        </div>
        <div className='form-inputs'>
         
          <input
            className='form-input'
            type='text'
            name='lastname'
            placeholder=' LAST NAME'
            value={values.lastname}
            onChange={handleChange}
          />
          {/* {errors.username && <p>{errors.username}</p>} */}
        </div>
        </UserName>
        <Contact>
        <div>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
         <div>
          <input
          
            
            type='number'
            name='number'
            placeholder='Enter your number'
            value={values.number}
            onChange={handleChange}
           
          />
          {errors.email && <p>{errors.email}</p>}
       </div>
        </Contact>
        <PasswordComp>
       
          <input
          
            className='form-input'
            type='password'
            name='password'
            placeholder='PASSWORD'
            value={values.password}
            onChange={handleChange}
          />
          {/* {errors.password && <p>{errors.password}</p>} */}
        </PasswordComp>
        <ConfirmPs>
      
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='CONFIRM PASSWORD'
            value={values.password2}
            onChange={handleChange}
          />
          {/* {errors.password2 && <p>{errors.password2}</p>} */}
        </ConfirmPs>
          <Location>
        <div className='form-inputs'>
         
          <input
            className='form-input'
            type='text'
            name='region'
            placeholder='  REGION'
            value={values.region}
            onChange={handleChange}
          />
          {/* {errors.username && <p>{errors.username}</p>} */}
        </div>
        <div className='form-inputs'>
         
          <input
            className='form-input'
            type='text'
            name='city'
            placeholder='  CITY'
            value={values.city}
            onChange={handleChange}
          />
          {/* {errors.username && <p>{errors.username}</p>} */}
        </div>
        </Location>
       <Btn>
         <button className='form-input-btn' type='submit'>
          Sign up
       
        </button>
        
        </Btn>
        <span className='form-input-login'>
          Already have an account? Login <Link to='/login'>here</Link>
        </span>
      </form>
      </FormsCont>
  
  );
};

export default FormSignup;



