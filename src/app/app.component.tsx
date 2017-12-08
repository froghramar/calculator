import * as React from 'react';
import { Helmet } from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './app.style.css';

import { BasicCalc } from './../components/basic-calc';

export class App extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title> Calculator </title>
                </Helmet>
                <MuiThemeProvider>
                    <div className="calc-container">
                        <BasicCalc/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
