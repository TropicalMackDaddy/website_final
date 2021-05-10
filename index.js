
import React, { Component } from 'react'
import Styled from 'styled-components'
import Navbar from '../components/navbar.js'

const Grid = Styled.div`
display: flex;
flex-direction: column;
`

const Header = Styled.h1`

top-padding: 30em;
color: mediumseagreen;
font-family: Technique Sans;
justify-content: center;
`

const Paragraph = Styled.p`
color: coral;
font-family: Technique Sans;
font-size: 6em;
`
const CheckItOut = Styled.p`
color: gold;
font-family: Technique Sans;
font-size: 3em;
`

const navlinks = [
    { name: "Home", to: "/"},
    { name: "Database", to: "/database"},
    { name: "Documentation", to: "/documentation"},
    { name: "About", to: "/about"}

];

const brand = { name: "MODIY", to: "/"};

export default class IndexPage extends Component {
render() {
    return (

        <Grid>

        <Navbar brand={brand} links= {navlinks} />

        <Header>
        <br/>
   Welcome to my final project. This website includes a landing page, 
    an aquatic plant database, 
    and a software-style documentation page for all the information I can find about aquariums. 
    Enjoy!
    </Header>

<Paragraph>SOON TO BE THE BIGGEST AQUATIC PLANT DATABASE</Paragraph>

    </Grid>

 
   
   
    );
}
}

