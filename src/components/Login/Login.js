import React from 'react';
import { Dialog, List, ListItem, ListItemText } from '@material-ui/core';
import { inject, observer } from 'mobx-react';

const LoginDialog = ({LoginStore, ...others}) => {

    return (<Dialog {...others}>
        <List>
            <ListItem button onClick={LoginStore.login.bind(null, 'facebook')}>
                <ListItemText>
                    Facebook
                </ListItemText>
            </ListItem>
            <ListItem button onClick={LoginStore.login.bind(null, 'google')}>
                <ListItemText>
                    Google
                </ListItemText>
            </ListItem>
        </List>
    </Dialog>)
}

export default inject('LoginStore')(observer(LoginDialog));