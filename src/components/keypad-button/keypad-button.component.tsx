import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './keypad-button.style.css';
import { isNullOrUndefined } from "util";

export interface KeypadButtonProps {
    label: string;
    primary?: boolean;
    secondary?: boolean;
    onClick?: Function
}

export interface KeypadButtonState { }

export class KeypadButton extends React.Component <KeypadButtonProps, KeypadButtonState> {

    constructor(props: KeypadButtonProps) {
        super(props);
    }

    onClick = () => {
        if (!isNullOrUndefined(this.props.onClick))
            this.props.onClick(this.props.label);
    };

    render() {

        const { onClick, ...props } = this.props;

        return (
            <RaisedButton {...props}
                onClick={ this.onClick }
                style={{
                    height: '100%',
                    width: '100%'
                }}
                labelStyle={{
                    fontSize: 'xx-large',
                    display: 'inline-block',
                    padding: '31px 31px'
                }}
            />
        );
    }
}