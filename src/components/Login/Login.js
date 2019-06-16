import React from 'react';
import { Dialog, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { inject, observer } from 'mobx-react';

const LoginDialog = ({LoginStore, ...others}) => {

    return (<Dialog {...others}>
        <List style={{padding: 0}}>
            <ListItem button onClick={LoginStore.login.bind(null, 'facebook')}>
                <ListItemIcon>
                    <img src={'images/icons/icons8-facebook-circled-48.png'} alt=''/>
                </ListItemIcon>
                <ListItemText>
                    Login with Facebook
                </ListItemText>
            </ListItem>
            <ListItem button onClick={LoginStore.login.bind(null, 'google')}>
                <ListItemIcon>
                    <img src={'images/icons/icons8-google-48.png'} alt=''/>
                </ListItemIcon>
                <ListItemText>
                    Login with Google
                </ListItemText>
            </ListItem>
        </List>
    </Dialog>)
}

export default inject('LoginStore')(observer(LoginDialog));