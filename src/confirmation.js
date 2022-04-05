import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
    display:flex;
    flex-wrap: wrap;
    height: 100vh;
    width: 100vw;
`
const StyledH1 = styled.h1`
    margin: 0 auto;
`
const StyledImg = styled.img`
  width: 100%;
`
const StyledButton = styled.button`
  margin-left: 1%;
  background-color: transparent;
  border: 0.125em solid #1A1A1A;
  border-radius: 0.9375em;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  height: 45px;
  width: 105px;
  min-width: 0;
  outline: none;
  padding: 2px 2px;
  text-align: center;
  text-decoration: none;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`
export default function Confirmation() {
    return (
        <StyledDiv>
            <StyledButton id="home-btn"><StyledLink to="/">Home</StyledLink></StyledButton>
            <StyledH1>🎊Congrats!🎊 🍕Your order is placed!🍕</StyledH1>
            <StyledImg className='home-image' src={require('.//Assets/Pizza.jpg')} alt='' />
        </StyledDiv>
    )
}