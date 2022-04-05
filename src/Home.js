import React from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { Link } from "react-router-dom";

// Styled Components //

const StyledHeaderDiv = styled.div`
 font-size:2rem;
 text-align: center;
`
const StyledNavLinks = styled.div`
    display:flex;
    justify-content:center;
`
const StyledH1 = styled.h1`
  justify-content:center
  font-size: 3rem;
  color:white
`
const StyledH2 = styled.h2`
  text-align: center;
  font-size: 2rem;
  padding-bottom: 5%;
  color:white;
  
`
const StyledButton = styled.button`
  margin-left: 1%;
  background-color: transparent;
  border: 0.125em solid #1A1A1A;
  border-radius: 0.9375em;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  height: 45px;
  width: 105px;
  outline: none;
  padding: 2px 2px;
  text-align: center;
  text-decoration: none;
  justify-content: space-between;
 `
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`
const StyledA = styled.a`
  text-decoration: none;
  color: white;
`
const StyledImg = styled.img`
  width: 100%;
  height: 100vh;
  z-index: -1;
  position:absolute;
  top: 0;
 `
const StyledDiv = styled.div`
    background-color: rgb(0,0,0,0.4)
   
`

export default function Home() {
    const history = useHistory();
    const routeToOrderForm = () => {
        history.push("/pizza");
    }
    return (
        <StyledDiv className='home-wrapper'>
            
            <StyledImg className='home-image' src={require('.//Assets/Pizza.jpg')} alt=''  />

            <StyledHeaderDiv>
                <StyledH1>BloomTech Pizza Co.</StyledH1>
                <StyledH2>The BEST pizza in the entire 🌎</StyledH2>
            </StyledHeaderDiv>

            <StyledNavLinks className='nav-links'>
                <StyledButton><StyledLink to="/">Home</StyledLink></StyledButton>
                <StyledButton onClick={routeToOrderForm} id="order-pizza">Order online</StyledButton>
                <StyledButton><StyledA href="tel:555-555-5555">Call in an order</StyledA></StyledButton>
            </StyledNavLinks>


        </StyledDiv>
    )
}