import * as React from 'react';

import './basic-calc-keypad.style.css';

import { KeypadButton, KeypadButtonProps  } from '../keypad-button';

interface BasicCalcKeypadProps { }
interface BasicCalcKeypadState { }

export class BasicCalcKeypad extends React.Component <BasicCalcKeypadProps, BasicCalcKeypadState> {

    constructor(props: BasicCalcKeypadProps) {
        super(props);
    }

    onClick = (label: string) => {
        alert(label);
    };

    render() {

        const buttonProps: KeypadButtonProps[] = [
            { label: '1' },
            { label: '2' },
            { label: '3' },
            { label: '+' },
            { label: '4' },
            { label: '5' },
            { label: '6' },
            { label: '-' },
            { label: '7' },
            { label: '8' },
            { label: '9' },
            { label: '*' },
            { label: '.' },
            { label: '0' },
            { label: '=' },
            { label: '/' }
        ];

        return (
            <ul className="grid">
                {
                    buttonProps.map((buttonProp: KeypadButtonProps) => {
                        return (
                            <li key={ buttonProp.label }>
                                <KeypadButton { ...buttonProp } onClick={ this.onClick }/>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}