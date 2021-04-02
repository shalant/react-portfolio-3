import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Resume from './components/Resume';
import WhiteBricks from './assets/images/adam-przeniewski-SwBG6zKsXQI-unsplash.jpg';
import Deck from './components/Deck';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: 'Doug Rosenberg',
      headerLinks: [
          { title: 'Home', path: '/' },
          { title: 'About', path: '/about' },
          { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Experience in Music + Science',
        subTitle: 'I am great',
        text: 'Here are some selected projects from my portfolio, click on each for more info:'
      },
      about: {
        title: 'About me',
        
      },
      contact: {
        title: 'Get in Touch'
      }
    }
  }

  render () {
    return (
      <Router>
        <Container 
          className='p-0' 
          fluid={true} 
          style={{ backgroundImage: `url(${WhiteBricks})` }}
        >

          <Navbar 
            className='border-bottom nav' 
            bg='transparent' 
            expand='lg'>
            <Navbar.Brand>Doug Rosenberg</Navbar.Brand>

            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />

            <Navbar.Collapse classname='nav' id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/resume'>Resume</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>

              
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
          <Route path='/' exact render={() => <HomePage 
                  title={this.state.home.title}
                  subTitle={this.state.home.subTitle}
                  text={this.state.home.text}
                  />}
          />

          <Route path='/about' exact render={() => <AboutPage 
                  title={this.state.about.title}
                  subTitle={this.state.about.subTitle}
                  text={this.state.about.text}
                  />}
          />

          <Route path='/resume' component={Resume} />

          <Route path='/contact' exact render={() => <ContactPage 
                  title={this.state.contact.title}
                  subTitle={this.state.contact.subTitle}
                  text={this.state.contact.text}
                  />}
          />
        
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
