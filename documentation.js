import React, { useRef, useState, useEffect, } from 'react'
import Toc from '../components/toc.js'
import Styled from 'styled-components'
import Navbar from '../components/navbar.js'

// A hook to close the ToC if it's currently in an open state
// and close it, when the user clicks or touches somewhere
// outside the component (only used on small screens).
import { useOnClickOutside } from '../components/hooks/onclickoutside.js'

const Grid = Styled.div`
display: flex;
margin-top: 3em;
`
const DocumentationContainer = Styled.div`
border-width: 0.2;
color: #212529;
width: 100%;
padding: 20px;
flex-direction: column;
`
const ToCContainer = Styled.aside`

border-width: 0.2;
  height: max-content;
  max-height: 100vh;
  z-index: 3;
  line-height: 2.2em;
  right: 1em;
  max-width: 20em;
  overscroll-behavior: none;
  grid-row: span 10;
  nav {
    max-height: 78vh;
    overflow-y: scroll;
  }

`
const Text = Styled.body`
font-size: 1em;
color: #212529;
text-align: left-justify;
font-family: Helvetica, Arial, sans-serif;
`
const Headone = Styled.h1`
font-size: 1em;
color: #212529;
text-align: justify-left;
font-family: Helvetica, Arial, sans-serif;
`
const Headtwo = Styled.h2`
font-size: .75em;
color: #212529;
text-align: justify-left;
font-family: Helvetica, Arial, sans-serif;
`

const TocLink = Styled.a`
  cursor: pointer;
  color: ${p => (p.active ? `var(--color-c)` : `var(--color-gray)`)};
  font-weight: ${props => props.active && `bold`};
  display: block;
  margin-left: ${props => props.depth + `em`};
`


const navlinks = [
  { name: "Home", to: "/"},
  { name: "Database", to: "/database"},
  { name: "Documentation", to: "/documentation"},
  { name: "About", to: "/about"}

];

const brand = { name: "MODIY", to: "/"};


const DocumentationPage = () => ( 


  <Grid>
  <Navbar brand={brand} links= {navlinks} />

  <ToCContainer>
    <Toc/>
  </ToCContainer>

  <DocumentationContainer>

    <Headone>Purpose of this documentation</Headone> 

    <Headone>Aquatic plants</Headone>

    <Headtwo>Aquatic plant information online</Headtwo>

    <Headtwo>Aquatic plant databases</Headtwo>

    <Headtwo>Places to buy aquatic plants online</Headtwo>

    <Headtwo>Aquatic plant forums</Headtwo>

    <Headtwo>Medicinal use</Headtwo>

    <Headtwo>plant look-alikes</Headtwo>

    <Headone>Aquascaping</Headone>

    <Headtwo>Dutch</Headtwo>

    <Headtwo>Iwagumi</Headtwo>

    <Headtwo>Nature/Amano</Headtwo>

    <Headtwo>Biotope</Headtwo>

    <Headone>Carbon dioxide ( CO<sup>2</sup> )</Headone>

    <Text>Plants need CO2  For photosynthesis.  
To get the CO2  into the tank, there are a few different methods that you can use. 
There are two main ways: yeast reactors and pressurized CO2 canisters. 
Pressurized canisters have been the most reliable method for consistently injecting CO2 into the water. 
Yeast reactors are making a come back from the MODIY yeast system design (I hope).</Text>

    <Headone>Substrate</Headone>

    

    <Headone>Light</Headone>

    <Headtwo>Photosynthetically available radiation (PAR)</Headtwo>

    <Headone>Salts as fertilizer</Headone>

   <Text>
     Currently humans usually use salts as a fertilizer for plants. The most common ways are:
     <ul>
      <li>Pre-made water solution with the dissolved salts</li>
      <li>addition of dry fertilizer salts directly to the water</li>
      <li>adding fertilizer to the substrate</li>
      <li>use of substrate that contains nutrients</li>
    </ul>
     In our aquariums we can either buy a pre-made water solution with the dissolved salts,
     or by adding dry fertilizer salts directly to the water.  
   </Text>


    </DocumentationContainer>
   
  </Grid>
    
  )


export default DocumentationPage