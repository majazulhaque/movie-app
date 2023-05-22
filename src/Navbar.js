import React from "react";
import styled from "styled-components";

const Nav = styled.div`
    height:70px;
    background:linear-gradient(170deg,#1bc059, #0d47a1);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    position:relative;
`;

const Title = styled.div`
    font-size: 30px;
    color: #fff;
    font-weight: 600;
    font-family: "Times New Roman",Times,serif;
    text-transform: uppercase;
    margin-left: 20px;
    &:hover{color: #0f0};
`;
const CartCount = styled.span`
background: ${(props) => props.color};
border-radius:50%;
padding: 4px 8px;
position: absolute;
right: 10px;
top: -5px;
font-size: 12px;
`

class Navbar extends React.Component {
  render() {
    return (
      <>
        <Nav>
          <Title>Movie App</Title>
          <div style={styles.cartContainer}>
            <img
              style={styles.cartIcon}
              src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"
              alt="cart-icon"
            />
            <CartCount color="yellow">0</CartCount>
          </div>
        </Nav>
      </>
    );
  }
}

const styles = {
  nav: {
    height: 70,
    backgroundColor: "#4267b2",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    AlignItems: "center",
    position: "relative",
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: 600,
    fontFamily: '"Montserrat","san-serif"',
    textTransform: "uppercase",
    marginLeft: 20,
  },
  cartContainer: {
    position: "relative",
    cursor: "pointer",
  },
  cartIcon: {
    height: 48,
    marginRight: 20,
  },
  cartCount: {
    background: "orange",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 10,
    top: -5,
    fontSize: 12
  },
};

export default Navbar;
