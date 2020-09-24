import React from 'react'
import { DialogActions, DialogTitle, DialogContent, Button } from '@material-ui/core'
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import BusinessIcon from '@material-ui/icons/Business';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import PaymentIcon from '@material-ui/icons/Payment';

const Services = (props) => {
    const handleClose = () => {
        props.closeFunction()
    }

    return (
        <React.Fragment>
            <DialogTitle>
                Services We Offer
            </DialogTitle>
            <DialogContent>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <MenuBookIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Bookkeeping"
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <BusinessIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Company's Formation"
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <LocationCityIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Company's Returns & Annual Accounts"
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <AccountBalanceIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Corporation Tax"
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Self Assessment Tax for Individuals and Sole Proprietorship (Special Discounts available for Taxi Drivers)"
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Streamline your finance fucntion and mortgage advice"
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <PaymentIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Fees start at £99"
                        />
                    </ListItem>

                    {/* Extra items:
                    VAT Returns

                    Business Advisory

                    Streamline your Finance Function

                    Here to support, not just 'do the books'
                    */}
                </List>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={e => handleClose()} color="secondary">
                    Close
                </Button>
            </DialogActions>
        </React.Fragment>
    )
}

export default Services