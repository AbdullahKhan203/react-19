import React from 'react'
import styled from 'styled-components';
const StyledComponent = () => {
 // CSS styles (above the return statement)
const ContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    // background-color: ${(props)=>props.primary ? "blue":"red"};
  `;
  
  const HeaderStyle = styled.header`
     background-color: ${(props)=>props.primary ? "blue":"red"};
    color: white;
    padding: 20px;
    width: 100%;
    text-align: center;
    border-radius: 5px;
  `;
  
  const CardStyle = styled.div`
    background: white;
    padding: ${(props)=>props.padding == "10" ? "10px" :"20px" };
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
  `;
  
  const ButtonStyle = styled.button`
    background-color: #ff5722;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    
    &:hover{
    background-color: ${(props)=>props.hover? "purple":""};
    }

  `;
  
  return (
    <>
<ContainerStyle >
      <HeaderStyle primary>
        <h1>Welcome to My Styled Page</h1>
      </HeaderStyle>
      
      <CardStyle padding={"10"}>
        <h2>Styled Card</h2>
        <p>This is a simple card with text.</p>
        <ButtonStyle hover>Click Me</ButtonStyle>
      </CardStyle>
    </ContainerStyle>
    </>
  )
}

export default StyledComponent