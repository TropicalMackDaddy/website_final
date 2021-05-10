import React, { Component } from 'react'
import PropTypes from "prop-types"
import Styled from 'styled-components'

const StyledNavbar = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  background: white;
  z-index: 1000;
  a:link {
    margin-right: 1rem;
    font-weight: normal;
    font-family: Technique Sans;
    color: cornflowerblue;
    font-size: 1.25rem;
    text-decoration: none;
  }
  a:visited {
    margin-right: 1rem;
    font-weight: normal;
    font-family: Technique Sans;
    color: cornflowerblue;
    font-size: 1.25rem;
    text-decoration: none;
  }
  a:hover {
    margin-right: 1rem;
    font-weight: normal;
    font-family: Technique Sans;
    color: lightblue;
    font-size: 1.25rem;
    text-decoration: none;
  }
  .brand {
    font-family: Technique Sans;
    letter-spacing: 4px;
    margin-left: 1rem;
    font-weight: bold;
    color: cornflowerblue;
    font-size: 1.75rem;
  }`;

  const Transition = Styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`;


export default class Navbar extends Component {

    static propTypes = {
        brand: PropTypes.shape({
            name:
        PropTypes.string.isRequired,
            to: PropTypes.string.isRequired
    }),
    links: PropTypes.arrayOf(
        PropTypes.shape({
            name:
            PropTypes.string.isRequired,
            to:
            PropTypes.string.isRequired
        })
    )
};

constructor(props) {
    super(props);
    this.state = {
        show: true, 
        scrollPos: 0
    };
    this.handleScroll =
    this.handleScroll.bind(this);
};

componentDidMount() {

    window.addEventListener("scroll", this.handleScroll);
}

componentWillUnmount() {

    window.removeEventListener("scroll", this.handleScroll);

}

handleScroll() {
    const { scrollPos } = this.state;
    this.setState({
        scrollPos:
        document.body.getBoundingClientRect().top,
            show:
            document.body.getBoundingClientRect().top > scrollPos
    });
}


render() {
    const { brand, links } = 
    this.props;

    const NavLinks = () =>
    this.props.links.map((link, index) => (
    <a key={index} href={link.to}>
        {link.name}
    </a>
    ));

    return (
<Transition>
        <StyledNavbar className={this.state.show ? "active" : "hidden"}>
  <a className="brand" href={this.props.brand.to}> {this.props.brand.name} </a>
<nav>
    <NavLinks />
</nav>
    </StyledNavbar>
    </Transition>
    );
}
}