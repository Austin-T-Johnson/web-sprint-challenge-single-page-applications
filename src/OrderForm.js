import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


// Styled Components //

const StyledH1 = styled.h1`
  font-size: 5rem;
  z-index: 3;
  position: absolute;
  top: 25%;
  left: 25%;
`
const Styledh2 = styled.h2`
    font-size: 1.75rem;
    // position: absolute;
    // bottom: 8%;
    // left: 39%;
    text-align: center;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
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
 const StyledButton2 = styled.button`
  margin: 1% 47%;
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
const StyledImg = styled.img`
  width: 100%;
  
`
const StyledNameDiv = styled.div`
    display:flex;
    flex-direction: column;
`
const StyledNameInput = styled.input`
    text-align: center;
    width: 200px;
    min-height: 25px;
    margin: 0 auto;
    
 `
const StyledNameP = styled.p`
   font-size:1.3rem;
    margin: 1% auto;
`
const StyledSizeLabel = styled.label`
    display:block;
    font-size: 1.3rem;
    background-color:#E0DFE0;
    height: 40px;
    margin-top: 25px;
    text-align:center;
    padding: 5px 5px;
`
const StyledSelect = styled.select`
    background-color: #4799CD;
    color: white;
    padding: 2px 2px;
    height: 40px;
    margin-left: 45%;
    margin-top: 1%;
`
const StyledToppingsContainer = styled.div`
    display:flex
    
`
const StyledToppingsDiv = styled.div`
    height: 100%;
    width: 15%;
   margin-left: 40%;
   margin-top: 5%;
   line-height: 35px;
`
const StyledToppingsDiv2 = styled.div`
    height:100%;
    width: 20%;
   margin-top: 5%;
   line-height: 35px;
`
const StyledToppings = styled.input`
    font-size: 1.6rem;
    margin-bottom:1%;
`
const StyledInstructions = styled.input`
    margin-top: 3%;
    margin-left: 40%;
    text-align: center;
    height: 15%;
    width: 20%;
`
// Function //

export default function OrderForm(props) {
    const {
        values,
        submit,
        update,
    } = props
  
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value
        update(name, valueToUse);
        if (name === "name") {
            if (value.length < 2) {
                props.setFormError("name must be at least 2 characters")
                return;
            } else {
                props.setFormError("")
            }
        }
    }

    return (
        <div className="Order-wrapper">

            <StyledImg className='home-image' src={require('.//Assets/Pizza.jpg')} alt='' />
            <StyledH1>BloomTech Pizza Co.</StyledH1>
            <StyledButton id="home-btn"><StyledLink to="/">Home</StyledLink></StyledButton>
            <Styledh2>🍕Build Your Own Pizza🍕</Styledh2>
            


            {/* Name Input */}
            <form id="pizza-form" onSubmit={onSubmit}>
                <StyledNameDiv>
                    <StyledNameP>Name for order</StyledNameP>
                    <StyledNameInput
                        id="name-input"
                        type="text"
                        placeholder="Enter your name"
                        onChange={onChange}
                        value={values.name}
                        name="name"
                    />
                </StyledNameDiv>

                {/* Size of pizza choice */}

                <StyledSizeLabel>Choice of size </StyledSizeLabel>
                <StyledSelect id="size-dropdown" value={values.size} name="size" onChange={onChange}>
                    <option value="">-- Select size of pizza --</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="extra-large">Extra Large</option>
                </StyledSelect>


                {/* Choose toppings */}

                <StyledSizeLabel>Add Toppings<br></br><br></br><p>Choose up to 5</p></StyledSizeLabel>
                <StyledToppingsContainer>
                    <StyledToppingsDiv>
                        <StyledToppings
                            type="checkbox"
                            name="pepperoni"
                            onChange={onChange}
                            checked={values.pepperoni}
                        />
                        <label>Pepperoni</label>
                        <br></br>

                        <StyledToppings
                            type="checkbox"
                            name="sausage"
                            onChange={onChange}
                            checked={values.sausage}
                        />
                        <label>Sausage </label>
                        <br></br>

                        <StyledToppings
                            type="checkbox"
                            name="spicyItalianSausage"
                            onChange={onChange}
                            checked={values.spicyItalianSausage}
                        />
                        <label>Spicy Italian Sausage</label>
                        <br></br>

                        <StyledToppings
                            type="checkbox"
                            name="grilledChicken"
                            onChange={onChange}
                            checked={values.grilledChicken}
                        />
                        <label>Grilled Chicken  </label>
                        <br></br>

                        <StyledToppings
                            type="checkbox"
                            name="canadianBacon"
                            onChange={onChange}
                            checked={values.canadianBacon}
                        />
                        <label>Canadian Bacon</label>
                        <br></br>
                    </StyledToppingsDiv>

                    <StyledToppingsDiv2>
                        <StyledToppings
                            type="checkbox"
                            name="dicedTomatos"
                            onChange={onChange}
                            checked={values.dicedTomatos}
                        />
                        <label>Diced Tomatos</label>
                        <br></br>

                        <StyledToppings
                            type="checkbox"
                            name="blackolives"
                            onChange={onChange}
                            checked={values.blackolives}
                        />
                        <label>Black Olives</label>
                        <br></br>

                        <StyledToppings
                            type="checkbox"
                            name="jalapenos"
                            onChange={onChange}
                            checked={values.jalapenos}
                        />
                        <label>Jalapenos</label>
                        <br></br>

                        <StyledToppings
                            type="checkbox"
                            name="roastedGarlic"
                            onChange={onChange}
                            checked={values.roastedGarlic}
                        />
                        <label>Roasted Garlic</label>
                        <br></br>

                        <StyledToppings
                            type="checkbox"
                            name="pineapple"
                            onChange={onChange}
                            checked={values.pineapple}
                        />
                        <label>Pineapple</label>
                        <br></br>

                    </StyledToppingsDiv2>
                </StyledToppingsContainer>

                {/* Special Instructions Input */}

                <StyledSizeLabel>Special Instructions</StyledSizeLabel>

                <StyledInstructions
                    id="special-text"
                    type="text"
                    placeholder="Any special instructions?"
                    name="instructions"
                    value={values.instructions}
                    onChange={onChange}
                />
                <br></br>

                {/* Submit Button */}
                <StyledButton2 id="order-button"><StyledLink to="/confirmation">Submit Order</StyledLink></StyledButton2>

            </form>
        </div>
    )
}