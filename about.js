import React from 'react'
import Styled from 'styled-components'
import Navbar from '../components/navbar.js'

const Grid = Styled.div`
display: flex;
justify-content: center;
padding: 20px;
margin-top: 3em;
`

const Page = Styled.div`
top-padding: 30em;
color: mediumseagreen;
font-family: Technique Sans;
justify-content: center;
a:link {
    color: mediumseagreen;
    font-family: Technique Sans;
    text-decoration: none;
}
a:visited {
    color: mediumseagreen;
    font-family: Technique Sans;
    text-decoration: none;
}
a:hover {
    color: Tomato;
    font-family: Technique Sans;
    text-decoration: none;
}
`

const navlinks = [
    { name: "Home", to: "/"},
    { name: "Database", to: "/database"},
    { name: "Documentation", to: "/documentation"},
    { name: "About", to: "/about"}

];

const brand = { name: "MODIY", to: "/"};

 const AboutPage = () => (

<Grid>
<Navbar brand={brand} links= {navlinks} />
<Page>
Thanks to Janosh Riebesell for his<a href="https://janosh.dev/blog/sticky-active-smooth-responsive-toc"> table of contents (ToC) tutorial</a>. This tutorial helped me create a ToC that takes you to its section by clicking it, and shows you where you are.  
<br/>
<br/>
Thank you Nate Park for your <a href="https://betterprogramming.pub/creating-a-multi-filter-function-to-filter-out-multiple-attributes-javascript-react-rails-5aad8e272142">multi .filter method tutorial</a>.
<br/>
<br/>
Hey Glweems, thanks for your quick and easy <a href="https://medium.com/@glweems/react-auto-hide-on-scroll-navbar-617a6749a96">auto-hide onscroll navbar tutorial</a>! you helped me move away from React UI libraries. 
<br/>
<br/>
Hopefully this website can serve as a useful website for many curious people and aquarists. Give a big thanks to Chris Trotter!
</Page>
</Grid>
    
)

export default AboutPage