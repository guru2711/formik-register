import React from 'react'
import { Button,Form} from 'react-bootstrap';
import {useFormik} from "formik"
export const Forms = () => {

  const validate = values => {
    const errors = {}
    if(!values.email){
      errors.email = "Required"
    }
    else if (values.email.length < 4){
      errors.email = "Must be 5 Characters or more"
    }

    if(!values.password){
      errors.password = "Required"
    }
    else if (values.password){
      errors.password = "Must be 8 Characters or more"
    } else if ( values.password === "12345678"){
      errors.password = "Must not be 12345678!!!"
    }
    
    if(!values.repassword){
      errors.repassword = "Required"
    }
    else if(values.repassword !== values.password){
      errors.repassword = "second password doesn't match"
    }
return errors

  }

  const formik = useFormik({
        initialValues:{
    email:"",
    password:"",
    repassword:""
       },
       validate,
       onsubmit: values => {
         alert(JSON.stringify(values,null,2))
       }
   })

    return (
        <div>
            <h1>Register</h1>
            
            <Form onSubmit={formik.handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" onChange={formik.handleChange}
         value={formik.values.email}/>
        {formik.errors.email ?<div> {formik.errors.email}</div>: null}
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  name="password" autoComplete="on" onChange={formik.handleChange}
         value={formik.values.password}/>
         {formik.errors.Password ?<div> {formik.errors.Password}</div>: null}
  </Form.Group>
  {/* <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password again</Form.Label>
    <Form.Control type="password" placeholder="Password again"  name="repassword" autoComplete="on" onChange={formik.handleChange}
         value={formik.values.repassword}/>
         {formik.errors.repassword ?<div> {formik.errors.repassword}</div>: null}
  </Form.Group> */}
  <Button variant="primary" type="submit">
    Register
  </Button>
  </Form>
           
            
        </div>
    )
}
