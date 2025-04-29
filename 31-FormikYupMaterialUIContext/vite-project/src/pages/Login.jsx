import React from 'react';
import { useFormik } from 'formik';
import schema from "../yup";  
import { TextField } from '@mui/material';


const Login = () => {

  const { values, handleSubmit, handleChange , errors, resetForm} = useFormik({
    initialValues: { 
      name: "",
      email: "",
      password: ""
    },
    validationSchema:schema,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <form onSubmit={handleSubmit} style={{display:'flex', gap:'20px',flexDirection:'column' ,justifyContent:'center',alignItems:'center',marginTop:'100px'}}>
      
      <div>

      <TextField id="outlined-basic" label="Email" variant="outlined"
       type="email" 
       name="email"
       onChange={handleChange}
       value={values.email}
       />
        {errors.email}
      </div>

      <div>
      <TextField id="outlined-basic" label="Password" variant="outlined"
       type="password" 
       name="password"
       onChange={handleChange}
       value={values.password}
       />
        {errors.password}
      </div>

      <button type="submit">Sign in</button>
    </form>
  );
};

export default Login;
