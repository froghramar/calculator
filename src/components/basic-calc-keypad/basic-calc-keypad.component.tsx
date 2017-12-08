import * as React from 'react';

import './basic-calc-keypad.style.css';

import { KeypadButton } from '../keypad-button';

export class BasicCalcKeypad extends React.Component {

    render() {
        return (
            <ul className="grid">
                <li><KeypadButton label={'1'}/></li>
                <li><KeypadButton label={'2'}/></li>
                <li><KeypadButton label={'3'}/></li>
                <li><KeypadButton label={'+'}/></li>
                <li><KeypadButton label={'4'}/></li>
                <li><KeypadButton label={'5'}/></li>
                <li><KeypadButton label={'6'}/></li>
                <li><KeypadButton label={'-'}/></li>
                <li><KeypadButton label={'7'}/></li>
                <li><KeypadButton label={'8'}/></li>
                <li><KeypadButton label={'9'}/></li>
                <li><KeypadButton label={'*'}/></li>
                <li><KeypadButton label={'.'}/></li>
                <li><KeypadButton label={'0'}/></li>
                <li><KeypadButton label={'='}/></li>
                <li><KeypadButton label={'/'}/></li>
            </ul>
        );
    }
}