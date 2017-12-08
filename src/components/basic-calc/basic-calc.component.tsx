import * as React from 'react';
import Helmet from 'react-helmet';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import { BasicCalcOut } from '../basic-calc-out';
import { BasicCalcKeypad } from '../basic-calc-keypad';

export class BasicCalc extends React.Component {

    render() {
        return (
            <div>
                <Helmet>
                    <title> Basic Mode :: Calculator </title>
                </Helmet>
                <div>
                    <AppBar
                        title="Basic Calculator"
                        iconElementRight={
                            <IconMenu
                                iconButtonElement={
                                    <IconButton><MoreVertIcon /></IconButton>
                                }
                                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                            >
                                <MenuItem primaryText="Refresh" />
                                <MenuItem primaryText="Settings" />
                            </IconMenu>
                        }
                    />
                    <BasicCalcOut/>
                    <BasicCalcKeypad/>
                </div>
            </div>
        );
    }

}