import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const SuccessMessage = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: green;
`;

const ErrorMessage = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: red;
`;

const SignIn = () => {
  const navigate = useNavigate();
  const [signInName, setSignInName] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/api/auth/signin", {
        name: signInName,
        password: signInPassword,
      });
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      await axios.post("/api/auth/signup", {
        name: signUpName,
        email: signUpEmail,
        password: signUpPassword,
      });
      setSuccessMessage("Signup successful! You can now login.");
      setErrorMessage("");
      // Clear input fields
      setSignUpName("");
      setSignUpEmail("");
      setSignUpPassword("");
    } catch (err) {
      dispatch(loginFailure());
      if (err.response && err.response.status === 400) {
        setErrorMessage(
          "User already exists. Please try with different credentials."
        );
      } else {
        setErrorMessage("Signup failed. Please try again.");
      }
    }
  };

  const signInWithGoogle = async () => {
    dispatch(loginStart());
    signInWithPopup(auth, provider)
      .then((result) => {
        axios
          .post("/api/auth/google", {
            name: result.user.displayName,
            email: result.user.email,
            img: result.user.photoURL,
          })
          .then((res) => {
            dispatch(loginSuccess(res.data));
            navigate("/");
          });
      })
      .catch((error) => {
        dispatch(loginFailure());
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to LamaTube</SubTitle>
        <Input
          placeholder="Username"
          value={signInName}
          onChange={(e) => setSignInName(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={signInPassword}
          onChange={(e) => setSignInPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Sign in</Button>
        <Title>or</Title>
        <Button onClick={signInWithGoogle}>Sign in with Google</Button>
        <Title>or</Title>
        <Input
          placeholder="Username"
          value={signUpName}
          onChange={(e) => setSignUpName(e.target.value)}
        />
        <Input
          placeholder="Email"
          value={signUpEmail}
          onChange={(e) => setSignUpEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={signUpPassword}
          onChange={(e) => setSignUpPassword(e.target.value)}
        />
        <Button onClick={handleSignin}>Sign up</Button>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Wrapper>
      <More>
        English(INDIA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
