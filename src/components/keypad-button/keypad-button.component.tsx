import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './keypad-button.style.css';

interface Props {
    label: string;
    primary?: boolean;
    secondary?: boolean;
}

interface State { }

export class KeypadButton extends React.Component <Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <RaisedButton {...this.props}
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