import styled from "styled-components";
import LoginForm from "../../components/LoginForm/LoginForm";
import { isAuthorized } from "../../services/auth";

const LoginPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
    background: url("https://images.unsplash.com/photo-1526510335242-248dc3765086?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    background-size: stretch;
    background-position: bottom;
`

const LoginPage = ({setLoggedIn}) => {
    //
    return (
        <LoginPageContainer>
            <LoginForm validate={isAuthorized} setLoggedIn={setLoggedIn}/>
        </LoginPageContainer>
    )
}

export default LoginPage