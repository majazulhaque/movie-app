import React from "react";

class Navbar extends React.Component{
    render(){
        return(
            <>
                <div style={styles.nav}>
                    <div style={styles.title}>Movie App</div>
                    <div style={styles.cartContainer}>
                        <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" alt="cart-icon" />
                        <span style={styles.cartCount}>0</span>
                    </div>
                    
                </div>
            </>
        )
    }
}


const styles = {
    nav:{
        height:70,
        backgroundColor:"#4267b2",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        AlignItems:"center",
        position:"relative"
    },
    title:{
        fontSize: 30,
        color: "#fff",
        fontWeight:600,
        fontFamily:'"Montserrat","san-serif"',
        textTransform:"uppercase",
        marginLeft: 20
    },
    cartContainer:{
        position: "relative",
        cursor:"pointer"
    },
    cartIcon:{
        height:48,
        marginRight:20
    },
    cartCount:{
        background:"orange",
        borderRadius:"50%",
        padding:"4px 8px",
        position:"absolute",
        right:10

    }
}

export default Navbar;