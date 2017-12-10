import * as React from 'react';
import Helmet from 'react-helmet';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import { BasicCalcOut } from '../basic-calc-out';
import { BasicCalcKeypad } from '../basic-calc-keypad';

interface BasicCalcProps { }
interface BasicCalcState { }

export class BasicCalc extends React.Component <BasicCalcProps, BasicCalcState> {

    constructor(props: BasicCalcProps) {
        super(props);
    }

    BasicCalcOutRef: BasicCalcOut;

    onKeyboardPress = (event: KeyboardEvent) => {
        this.BasicCalcOutRef.onAdd(event.key);
    };

    componentWillMount() {
        addEventListener('keyup', this.onKeyboardPress);
    }

    componentWillUnmount() {
        removeEventListener('keyup', this.onKeyboardPress);
    }

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
                    <BasicCalcOut ref={(instance: BasicCalcOut) => {
                        this.BasicCalcOutRef = instance;
                    }}/>
                    <BasicCalcKeypad/>
                </div>
            </div>
        );
    }

}