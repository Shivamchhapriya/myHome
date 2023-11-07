import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  MutedLink,
  SubmitButton,
  // SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from './accountContext';


export function LoginForm(props) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    var data = formData;
    setFormData({...data,[name]:value});
    console.log('Form Data:', formData); // Add this line
  };

  const handleSubmit = (e) => {
    console.log('Form submitted:', formData);
  };

  const { switchToSignup } = useContext(AccountContext);
  
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Email" name="email" onChange={handleChange} />
        {errors.email && <p className="form-terms">*{errors.email}*</p>}
        <Input type="password" placeholder="Password" name="password" onChange={handleChange} />
        {errors.password && <p className="form-terms">*{errors.password}*</p>}
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      {/* <button type="button" onClick={handleSubmit} >Signin</button> */}  <SubmitButton type="submit" onClick={handleSubmit} >Signin</SubmitButton>
      <Marginer direction="vertical" margin="5px" />
      <LineText>
        Don't have an account?{" "}
        <BoldLink onClick={switchToSignup} href="#">
          Signup
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}
