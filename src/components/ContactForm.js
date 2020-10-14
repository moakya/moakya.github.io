import React from 'react'
import axios from 'axios'
import '../App.css'
import { DialogTitle, Button, FormControl, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1.5),
    },
    container: {
        display: 'flex',
        alignContent: 'left',
        flexWrap: 'wrap',
        flexDirection: 'column',
    },
    button: {
        display: 'flex',
        alignContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
}))

const ContactForm = (props) => {
    const handleClose = () => {
        props.closeFunction()
    }

    const initialForm = {
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
    }

    const [contactForm, setContactForm] = React.useState(initialForm)
    // eslint-disable-next-line
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;

    const [invalidEmailError, setInvalidEmailError] = React.useState('')
    const [invalidEmailFlag, setInvalidEmailFlag] = React.useState(false)

    const classes = useStyles()
    const sendFormUrl = 'https://whispering-ridge-38836.herokuapp.com/mail'

    const postForm = async () => {
        let headers = {
            'Content-Type': 'application/json'
        }
        console.log('ContactForm %o', contactForm)
        await axios
            .post(sendFormUrl, contactForm, { headers: headers })
            .then((response) => {
                console.log('Status %o', response)
                handleClose()
            })
            .catch((error) => {
                console.log('post form error %o', error)
            })
    }

    const onEmailChange = () => {
        console.log(contactForm.email)
        if(emailRegex.test(contactForm.email)){
            setInvalidEmailFlag(false)
            setInvalidEmailError('')
        }
        else{
            setInvalidEmailError('Please enter a valid email')
            setInvalidEmailFlag(true)
        }
    }

    const handleSetContactFormRequest = event => {
        setContactForm({
            ...contactForm,
            [event.target.name]: event.target.value
        })
        onEmailChange(event)
    }

    return (
        <React.Fragment>
            <DialogTitle>
                Contact Us
            </DialogTitle>
            <form autoComplete="off" onSubmit={e => postForm()}>
                <div className={classes.container}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <TextField
                            required id="name" name="name" label="Name" 
                            value={contactForm.name} variant="outlined"
                            onChange={handleSetContactFormRequest}
                        />
                    </FormControl>

                    <FormControl component="fieldset" className={classes.formControl}>
                        <TextField 
                            required id="email" name="email" label="Email" 
                            error={invalidEmailFlag}
                            helperText={invalidEmailError}
                            value={contactForm.email} variant="outlined"
                            onChange={e => {
                                handleSetContactFormRequest(e)
                                onEmailChange(e)
                            }}
                        />
                    </FormControl>

                    <FormControl component="fieldset" className={classes.formControl}>
                        <TextField 
                            id="phoneNumber" name="phoneNumber" label="Phone Number" 
                            value={contactForm.phoneNumber} variant="outlined"
                            onChange={handleSetContactFormRequest}
                        />
                    </FormControl>

                    <FormControl component="fieldset" className={classes.formControl}>
                        <TextField
                            id="message"
                            required
                            label="Message"
                            name="message"
                            value={contactForm.message}
                            multiline
                            rows={12}
                            variant="outlined"
                            onChange={handleSetContactFormRequest}
                        />
                    </FormControl>
                </div>
                <div className={classes.button}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <Button disabled={invalidEmailFlag} variant="outlined" type="submit" color="primary">
                            Submit
                        </Button>
                    </FormControl>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <Button variant="outlined" onClick={e => handleClose()} color="secondary">
                            Close
                        </Button>
                    </FormControl>
                </div>
            </form>
        </React.Fragment>
    )
}

export default ContactForm