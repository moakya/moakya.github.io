import React from 'react'
import { DialogActions, DialogTitle, DialogContent, Button, TextField, InputAdornment } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import BusinessIcon from '@material-ui/icons/Business'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(.3),
        marginTop: 15,
        marginRight: 20
    },
    emailAndPhone: {
        display: 'flex',
        alignContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
}))

const About = (props) => {
    const handleClose = () => {
        props.closeFunction()
    }

    const classes = useStyles()

    return (
        <React.Fragment>
            <DialogTitle>
                About
            </DialogTitle>
            <DialogContent>
                <div>
                    <p>
                        Friends Accounting Services has been providing trusted and certified accounting services that meet a wide range of corporate and personal business needs in the UK.
                    </p>
                    <p>
                        We are here to handle all of your bookkeeping, taxation and payroll demands; so that you can keep focusing on your core priorities both within business and your personal life.
                    </p>
                    <p>
                        Solutions for your accounts, bookkeeping, taxation, VAT & payroll matters.
                    </p>
                    <p>
                        Our contact information is listed below. Also find out what other services we offer by clicking the Services Offered button on the main page. 
                    </p>
                </div>

                <div>
                    <TextField
                        // className={classes.formControl}
                        label="Address"
                        defaultValue="1 Alice Close, Bedworth Coventry CV12 0BS, United Kingdom"
                        fullWidth={true}
                        InputProps={{
                            readOnly: true,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <BusinessIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <div className={classes.emailAndPhone}>
                        <TextField
                            className={classes.formControl}
                            label="Phone Number"
                            defaultValue="+44 (744) 025-6423"
                            size="medium"
                            InputProps={{
                                readOnly: true,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            className={classes.formControl}
                            label="Email"
                            defaultValue="test@test.com"
                            InputProps={{
                                readOnly: true,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={e => handleClose()} color="secondary">
                    Close
                </Button>
            </DialogActions>
        </React.Fragment>
    )
}

export default About