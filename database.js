import React, { useState } from 'react'
import Styled from 'styled-components'

import Navbar from '../components/navbar.js'
import plantArray from '../components/plants.js'

const Grid = Styled.div`
flex-direction: column;
justify-content: center;
margin-top: 3em;
margin-left: 5px;
margin-right: 5px;
`

const IntroContainer = Styled.div`
width: 100;
justify-content: center;
margin-left: 30px;
margin-top: 5px;
margin-right: 5px;
`
const IntroTextHeading = Styled.h1`
font-family: Technique Sans;
color: cornflowerblue;
font-size: 25px;
margin-left: 10px;
`

const IntroText = Styled.p`
font-family: Helvetica;
font-size: 12px;
color: #6d6d6d;
line-height: 1.5em;
`

const ExplainContainer = Styled.div`
padding: 20px 20px 20px 20px;
display: flex;
flex-direction: row;
justify-content: space-evenly;

`
const ExplainText = Styled.p`
font-family: Helvetica;
font-size: 12px;
line-height: 1.5em;
color: #6d6d6d;
margin-left: 20px;
margin-right: 20px;
`

const ButtonContainer = Styled.div`
flex-direction: row;
background-color: white;
margin-left: 5px;
margin-right: 5px;
margin-top: 2 px;
`
const FilterButton = Styled.button`
background-color: white;
border: none;
font-family: Technique Sans;
font-size: 2em;
color: none;
`

const FilterButtonRed = Styled(FilterButton)`
color: red;
border: solid;
border-color: red;
`

const ClickedFilterButtonRed = Styled(FilterButton)`
color: red;
border: none;
`

const FilterButtonOrange = Styled(FilterButton)`
color: coral;
border: solid;
border-color: coral;
`
const ClickedFilterButtonOrange = Styled(FilterButton)`
color: coral;
border: none;
`
const FilterButtonYellow = Styled(FilterButton)`
color: gold;
border: solid;
border-color: gold;
`
const ClickedFilterButtonYellow = Styled(FilterButton)`
color: gold;
border: none;
`
const FilterButtonGreen = Styled(FilterButton)`
color: forestgreen;
border: solid;
border-color: forestgreen;
`
const ClickedFilterButtonGreen = Styled(FilterButton)`
color: forestgreen;
border: none;
`
const FilterButtonPink = Styled(FilterButton)`
color: hotpink;
border: solid;
border-color: hotpink;
`
const ClickedFilterButtonPink = Styled(FilterButton)`
color: hotpink;
border: none;
`
const FilterButtonPurple = Styled(FilterButton)`
color: mediumpurple;
border: solid;
border-color: mediumpurple;
`
const ClickedFilterButtonPurple = Styled(FilterButton)`
color: mediumpurple;
border: none;
`
const FilterButtonBrown = Styled(FilterButton)`
color: peru;
border: solid;
border-color: peru;
`
const ClickedFilterButtonBrown = Styled(FilterButton)`
color: peru;
border: none;
`
const FilterButtonWhite = Styled(FilterButton)`
color: grey;
border: solid;
border-color: grey;
`
const ClickedFilterButtonWhite = Styled(FilterButton)`
color: grey;
border: none;
`

const FilterButtonVariegated = Styled(FilterButton)`
color: black;
border: solid;
border-color: black;
`
const ClickedFilterButtonVariegated = Styled(FilterButton)`
color: black;
border: none;
`
const FilterButtonBranchy = Styled(FilterButton)`
color: black;
border: solid;
border-color: black;
`
const ClickedFilterButtonBranchy = Styled(FilterButton)`
color: black;
border: none;
`
const FilterButtonBryophyte = Styled(FilterButton)`
color: black;
border: solid;
border-color: black;
`
const ClickedFilterButtonBryophyte = Styled(FilterButton)`
color: black;
border: none;
`
const FilterButtonCarpet = Styled(FilterButton)`
color: black;
border: solid;
border-color: black;
`
const ClickedFilterButtonCarpet = Styled(FilterButton)`
color: black;
border: none;
`
const FilterButtonFern = Styled(FilterButton)`
color: black;
border: solid;
border-color: black;
`
const ClickedFilterButtonFern = Styled(FilterButton)`
color: black;
border: none;
`
const FilterButtonFloater = Styled(FilterButton)`
color: black;
border: solid;
border-color: black;
`
const ClickedFilterButtonFloater = Styled(FilterButton)`
color: black;
border: none;
`
const FilterButtonMini = Styled(FilterButton)`
color: black;
border: solid;
border-color: black;
`
const ClickedFilterButtonMini = Styled(FilterButton)`
color: black;
border: none;
`

const FilterButtonLily = Styled(FilterButton)`
color: black;
border: solid;
border-color: black;
`
const ClickedFilterButtonLily = Styled(FilterButton)`
color: black;
border: none;
`
const FilterButtonRhizome = Styled(FilterButton)`
color: black;
border: solid;
border-color: black;
`
const ClickedFilterButtonRhizome = Styled(FilterButton)`
color: black;
border: none;
`

const FilterButtonRunner = Styled(FilterButton)`
color: black;
border: solid;
border-color: black;
`
const ClickedFilterButtonRunner = Styled(FilterButton)`
color: black;
border: none;
`
const FilterButtonStraight = Styled(FilterButton)`
color: black;
border: solid;
border-color: black;
`
const ClickedFilterButtonStraight = Styled(FilterButton)`
color: black;
border: none;
`
const FilterButtonStem = Styled(FilterButton)`
color: black;
border: solid;
border-color: black;
`
const ClickedFilterButtonStem = Styled(FilterButton)`
color: black;
border: none;
`
const FilterButtonTrueaquatic = Styled(FilterButton)`
color: black;
border: solid;
border-color: black;
`
const ClickedFilterButtonTrueaquatic = Styled(FilterButton)`
color: black;
border: none;
`

const PlantCardContainer = Styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
height: 600px;
overscroll-behavior-y: inherit;
`
const FlipCard = Styled.div`
background-color: transparent;
  width: 200px;
  height: 200px;
  perspective: 1000px;
`
const PlantCardInner = Styled.div`
position: relative;
width: 100%;
height: 100%;
text-align: center;
transition: transform 0.6s;
transform-style: preserve-3d;
`

const PlantCardFront = Styled.div`
box-sizing: border-box;
min-height: 200px;
max-height: 200px;
min-width: 200px;
max-width: 200px;
box-shadow: 0 0 0 1px #E2E9ED;
position: relative;
:hover {
    z-index: 1;
    border: none;
    background-color: white;
    box-shadow: 0px 35px 77px -10px rgba(0,0,0,0.64);
    transform: scale(1.05),
                transformY(10px);
    transition: box-shadow 0.2s ease,
                transform 0.4s ease,
                z-index 0s 0s ease;    
}
`

const PlantCardBack = Styled.div`
min-height: 200px;
max-height: 200px;
min-width: 200px;
max-width: 200px;
box-shadow: 0 0 0 1px #E2E9ED;
`

const PlantCardName = Styled.p`
font-family: muli;
font-size: 0.5em;
text-align: center;
padding-top: 60%;
${PlantCardFront}:hover & {
    transform: scale(1.05);
    transition: 0.05s, transform 0.3s ease;
}
`
const TextAgain = Styled.ul`
font-family: muli;
font-size: 1.0em;
`

const PlantNamePronunciation = Styled.p`
color: gray;
font-family: muli;
font-size: 0.3em;
text-align: center;
padding: 0px 200px 0px 0px;
${PlantCardFront}:hover & {
    transform: translateX(200px);
    transition: 0.05s, transform 0.3s ease;
}
`


const navlinks = [
  { name: "Home", to: "/"},
  { name: "Database", to: "/database"},
  { name: "Documentation", to: "/documentation"},
  { name: "About", to: "/about"}
];

const brand = { name: "MODIY", to: "/"};



export default function DataBasePage() {  

  const [chosenFilters, setChosenFilters] = useState([]);


  console.log(chosenFilters);
 

  return(

    <Grid> 

    <Navbar brand={brand} links= {navlinks} />


    <IntroContainer>
   <IntroTextHeading>
     <b>I wanted a database that did a better job of capturing how many different varieties exist on the market and our planet. </b></IntroTextHeading> 
  <IntroText>
  <ul>
    <li>Search the database by color or growth habit. 
      This simplified filter criteria still allows for a wide variety of search outcomes and goals, be it aquascaping or compatibility comparison. </li>
      <br/>
    <li>This database only contains plants that can grow indefinitely submerged in water (given adequate environment conditions). </li>
</ul>
</IntroText>

    </IntroContainer>

    <ExplainContainer>
      <PlantCardFront>
          <PlantCardName><i>Rotala Rotundifolia</i></PlantCardName>

      </PlantCardFront>
      <PlantCardBack> 
        <TextAgain>
      <li>Grows in most conditions</li>
      <li>Colors vary widely</li>
      <li>adding fertilizer to the substrate</li>
      <li><a href="https://plants.ifas.ufl.edu/plant-directory/rotala-rotundifolia/">This source contains good pictures.</a> </li>
    </TextAgain></PlantCardBack>
    </ExplainContainer>

      <ButtonContainer>
      
      {chosenFilters.includes('red') ? (
                
                <FilterButtonRed onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'red'))}>red</FilterButtonRed>
                            ) : (<ClickedFilterButtonRed onClick={() =>
                                setChosenFilters([...chosenFilters, 'red'])
                            }>red</ClickedFilterButtonRed>
                        )}

                        {chosenFilters.includes('orange') ? (
                
                <FilterButtonOrange onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'orange'))}>orange</FilterButtonOrange>
                            ) : (<ClickedFilterButtonOrange onClick={() =>
                                setChosenFilters([...chosenFilters, 'orange'])
                            }>orange</ClickedFilterButtonOrange>
                        )}

                        {chosenFilters.includes('yellow') ? (
                
                <FilterButtonYellow onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'yellow'))}>yellow</FilterButtonYellow>
                            ) : (<ClickedFilterButtonYellow onClick={() =>
                                setChosenFilters([...chosenFilters, 'yellow'])
                            }>yellow</ClickedFilterButtonYellow>
                        )}

                         {chosenFilters.includes('green') ? (
                
                <FilterButtonGreen onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'green'))}>green</FilterButtonGreen>
                            ) : (<ClickedFilterButtonGreen onClick={() =>
                                setChosenFilters([...chosenFilters, 'green'])
                            }>green</ClickedFilterButtonGreen>
                        )}

                         {chosenFilters.includes('pink') ? (
                
                <FilterButtonPink onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'pink'))}>pink</FilterButtonPink>
                            ) : (<ClickedFilterButtonPink onClick={() =>
                                setChosenFilters([...chosenFilters, 'pink'])
                            }>pink</ClickedFilterButtonPink>
                        )}

                         {chosenFilters.includes('purple') ? (
                
                <FilterButtonPurple onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'purple'))}>purple</FilterButtonPurple>
                            ) : (<ClickedFilterButtonPurple onClick={() =>
                                setChosenFilters([...chosenFilters, 'purple'])
                            }>purple</ClickedFilterButtonPurple>
                        )}

                        {chosenFilters.includes('brown') ? (

                 <FilterButtonBrown onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'brown'))}>brown</FilterButtonBrown>
                            ) : (<ClickedFilterButtonBrown onClick={() =>
                                setChosenFilters([...chosenFilters, 'brown'])
                            }>brown</ClickedFilterButtonBrown>
                        )}

                         {chosenFilters.includes('white') ? (

                 <FilterButtonWhite onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'white'))}>white</FilterButtonWhite>
                            ) : (<ClickedFilterButtonWhite onClick={() =>
                                setChosenFilters([...chosenFilters, 'white'])
                            }>white</ClickedFilterButtonWhite>
                        )}

                         {chosenFilters.includes('variegated') ? (

                 <FilterButtonVariegated onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'variegated'))}>variegated</FilterButtonVariegated>
                            ) : (<ClickedFilterButtonVariegated onClick={() =>
                                setChosenFilters([...chosenFilters, 'variegated'])
                            }>variegated</ClickedFilterButtonVariegated>
                        )}

                        {chosenFilters.includes('branchy') ? (

                 <FilterButtonBranchy onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'branchy'))}>branchy</FilterButtonBranchy>
                            ) : (<ClickedFilterButtonBranchy onClick={() =>
                                setChosenFilters([...chosenFilters, 'branchy'])
                            }>branchy</ClickedFilterButtonBranchy>
                        )}

                        {chosenFilters.includes('bryophyte') ? (

                 <FilterButtonBryophyte onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'bryophyte'))}>bryophyte</FilterButtonBryophyte>
                            ) : (<ClickedFilterButtonBryophyte onClick={() =>
                                setChosenFilters([...chosenFilters, 'bryophyte'])
                            }>bryophyte</ClickedFilterButtonBryophyte>
                        )}

                        {chosenFilters.includes('carpet') ? (

                 <FilterButtonCarpet onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'carpet'))}>carpet</FilterButtonCarpet>
                            ) : (<ClickedFilterButtonCarpet onClick={() =>
                                setChosenFilters([...chosenFilters, 'carpet'])
                            }>carpet</ClickedFilterButtonCarpet>
                        )}

                        {chosenFilters.includes('fern') ? (

                 <FilterButtonFern onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'fern'))}>fern</FilterButtonFern>
                            ) : (<ClickedFilterButtonFern onClick={() =>
                                setChosenFilters([...chosenFilters, 'fern'])
                            }>fern</ClickedFilterButtonFern>
                        )}

                        {chosenFilters.includes('floater') ? (

                 <FilterButtonFloater onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'floater'))}>floater</FilterButtonFloater>
                            ) : (<ClickedFilterButtonFloater onClick={() =>
                                setChosenFilters([...chosenFilters, 'floater'])
                            }>floater</ClickedFilterButtonFloater>
                        )}

                        {chosenFilters.includes('mini') ? (

                 <FilterButtonMini onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'mini'))}>mini</FilterButtonMini>
                            ) : (<ClickedFilterButtonMini onClick={() =>
                                setChosenFilters([...chosenFilters, 'mini'])
                            }>mini</ClickedFilterButtonMini>
                        )}

                        {chosenFilters.includes('lily') ? (

                 <FilterButtonLily onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'lily'))}>lily</FilterButtonLily>
                            ) : (<ClickedFilterButtonLily onClick={() =>
                                setChosenFilters([...chosenFilters, 'lily'])
                            }>lily</ClickedFilterButtonLily>
                        )}

                        {chosenFilters.includes('rhizome') ? (

                 <FilterButtonRhizome onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'rhizome'))}>rhizome</FilterButtonRhizome>
                            ) : (<ClickedFilterButtonRhizome onClick={() =>
                                setChosenFilters([...chosenFilters, 'rhizome'])
                            }>rhizome</ClickedFilterButtonRhizome>
                        )}

                        {chosenFilters.includes('runner') ? (

                 <FilterButtonRunner onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'runner'))}>runner</FilterButtonRunner>
                            ) : (<ClickedFilterButtonRunner onClick={() =>
                                setChosenFilters([...chosenFilters, 'runner'])
                            }>runner</ClickedFilterButtonRunner>
                        )}

                        {chosenFilters.includes('straight') ? (

                 <FilterButtonStraight onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'straight'))}>straight</FilterButtonStraight>
                            ) : (<ClickedFilterButtonStraight onClick={() =>
                                setChosenFilters([...chosenFilters, 'straight'])
                            }>straight</ClickedFilterButtonStraight>
                        )}

                        {chosenFilters.includes('stem') ? (

                 <FilterButtonStem onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'stem'))}>stem</FilterButtonStem>
                            ) : (<ClickedFilterButtonStem onClick={() =>
                                setChosenFilters([...chosenFilters, 'stem'])
                            }>stem</ClickedFilterButtonStem>
                        )}

                        {chosenFilters.includes('trueaquatic') ? (

                 <FilterButtonTrueaquatic onClick={() => 
                            setChosenFilters(chosenFilters.filter((item) => item !== 'trueaquatic'))}>true aquatic</FilterButtonTrueaquatic>
                            ) : (<ClickedFilterButtonTrueaquatic onClick={() =>
                                setChosenFilters([...chosenFilters, 'trueaquatic'])
                            }>true aquatic</ClickedFilterButtonTrueaquatic>
                        )}

      </ButtonContainer>
        
    <br/>

<PlantCardContainer>
    
{ plantArray
        .filter((plant) => {
          return (
            plant.color.find((color) => chosenFilters.includes(color)) ||
            plant.growth.find((growth) => chosenFilters.includes(growth))
          );
        }).map((d, i) => {
          
return <PlantCardFront key={i}>

  <PlantCardName>
        {<i>{d.genus} {d.species}</i>} {`${d.subspeciest} ${d.subspecies}`}
  </PlantCardName>

      
</PlantCardFront>
   
})}

</PlantCardContainer>


  
       
    </Grid>

  )

    }
