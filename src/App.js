import React from 'react';
import handshake from './handshake.svg'
import { Button, Dialog, IconButton, Tooltip } from '@material-ui/core';
import About from './components/About'
import Services from './components/Services'
import ContactForm from './components/ContactForm'
import InfoIcon from '@material-ui/icons/Info';
import BuildIcon from '@material-ui/icons/Build';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './App.css';

function App() {

  const [openAbout, setOpenAbout] = React.useState(false)
  const [openServices, setOpenServices] = React.useState(false)
  const [openContactForm, setOpenContactForm] = React.useState(false)

  function handleAboutClose(){
    setOpenAbout(false)
  }

  function handleAboutOpen(){
    setOpenAbout(true)
  }

  function handleServicesClose(){
    setOpenServices(false)
  }

  function handleServicesOpen(){
    setOpenServices(true)
  }

  function handleContactFormClose(){
    setOpenContactForm(false)
  }

  function handleContactFormOpen(){
    setOpenContactForm(true)
  }

  return (
    <React.Fragment>
      <div className= "Background">
        <div>
          <header className="App-header">
            <img src={handshake} className="App-logo" alt="logo" />
            Friends Accounting Services
            <div className="Buttons-header">
              <div className="Button">
                <Tooltip title="View Services We Offer">
                  <Button variant="outlined" color="default" size="medium" startIcon={<BuildIcon/>}
                    onClick={() => handleServicesOpen()}
                  >
                    Services
                  </Button>
                </Tooltip>
              </div>

              <div className="Button">
                <Tooltip title="More About Us">
                  <Button variant="outlined" color="primary" size="medium" startIcon={<InfoIcon/>} 
                    onClick={() => handleAboutOpen()}
                  >
                    About
                  </Button>
                </Tooltip>
              </div>

              <div className="Button">
                <Tooltip title="Send us a message">
                  <Button variant="outlined" color="secondary" size="medium" startIcon={<EmailIcon/>}
                    onClick={() => handleContactFormOpen()}
                  >
                    Contact
                  </Button>
                </Tooltip>
              </div>
            </div>
          </header>
        </div>

        <div>
          <div className="ContentHeader">
            Welcome to Friends Accounting Services
          </div>

          <div className="SubcontentHeader">
            <p>
            Friends Accounting Services has been providing trusted and certified accounting services that meet a wide range of corporate and personal business needs in the UK.
            </p>
          </div>
        </div>

        <div className="ContentButton">
          <Button variant="contained" color="primary" size="medium" startIcon={<InfoIcon/>} 
            onClick={() => handleAboutOpen()}
          >
            Click here to learn more
          </Button>
        </div>
        

        {/* <div className="CompanyHeader">
        <div className="Main-header">
                Friends Accounting Services
                <img src={handshake} className="App-logo" alt="logo" />
            </div>
            
        </div> */}
        <div className="Socials">
          {/* <div hidden={emailFlag} className={classes.formControl}>
            <TextField
              id="outlined-read-only-input"
              // label="Email"
              size="small"
              defaultValue="test@test.com"
              InputProps={{
                readOnly: true,
              }}
              // variant="outlined"
            />
          </div> */}
          {/* <Tooltip title="View Email Address">
            <IconButton color="secondary"
            onClick={() => setEmailFlag(!emailFlag)}
              // onClick={() => {window.open("mailto:test@test.com")}}
            >
              <AlternateEmailIcon/>
            </IconButton>
          </Tooltip> */}

          <Tooltip title="Visit our Facebook Page">
            <IconButton color="secondary"
              onClick={() => {window.open("https://facebook.com")}}
            >
              <FacebookIcon/>
            </IconButton>
          </Tooltip>

          <Tooltip title="Visit our Twitter Page">
            <IconButton color="secondary"
              onClick={() => {window.open("https://twitter.com")}}
            >
              <TwitterIcon/>
            </IconButton>
          </Tooltip>

          <Tooltip title="Visit our LinkedIn Page">
            <IconButton color="secondary"
              onClick={() => {window.open("https://linkedin.com")}}
            >
              <LinkedInIcon/>
            </IconButton>
          </Tooltip>
        </div>

        <Dialog
          fullWidth
          maxWidth="sm"
          open={openAbout}
          onClose={handleAboutClose}
        >
          <About
            show={openAbout}
            closeFunction={handleAboutClose}
          />
        </Dialog>

        <Dialog
          fullWidth
          maxWidth="sm"
          open={openServices}
          onClose={handleServicesClose}
        >
          <Services
            show={openServices}
            closeFunction={handleServicesClose}
          />
        </Dialog>

        <Dialog
          fullWidth
          maxWidth="xs"
          open={openContactForm}
          onClose={handleContactFormClose}
        >
          <ContactForm
            show={openContactForm}
            closeFunction={handleContactFormClose}
          />
        </Dialog>
      </div>
    </React.Fragment>
  );
}

export default App;
