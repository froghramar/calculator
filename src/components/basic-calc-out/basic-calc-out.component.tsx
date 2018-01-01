import * as React from 'react';

import './basic-calc-out.style.css';

interface BasicCalcOutProps { }
interface BasicCalcOutState {
    currentExpression: string;
    pastExpression: string;
}

export class BasicCalcOut extends React.Component <BasicCalcOutProps, BasicCalcOutState> {

    constructor(props: BasicCalcOutProps) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            currentExpression: '0',
            pastExpression: ''
        });
    }

    onAdd = (toAdd: string) => {

        const allowedLabels: String[] = ['+', '-', '*', '/', '.', '=', 'Backspace'];

        if(allowedLabels.indexOf(toAdd) == -1 && !toAdd.match('[0-9]')) return;

        let currentExpression = this.state.currentExpression;
        let pastExpression = this.state.pastExpression;

        switch (toAdd) {
            case 'Backspace':
                currentExpression = currentExpression.slice(0, -1);
                if(currentExpression.length == 0) currentExpression = '0';
                break;
            case '=':
                currentExpression = eval(this.state.currentExpression).toString();
                pastExpression = this.state.currentExpression.concat(toAdd);
                break;
            default:
                if(currentExpression == '0') currentExpression = toAdd;
                else currentExpression = currentExpression.concat(toAdd);
        }
        this.setState({
            currentExpression: currentExpression,
            pastExpression: pastExpression
        });
    };

    render() {
        return (
            <div className={'basic-calc-out'}>
                <div className='past-row'> { this.state.pastExpression } </div>
                <div className='current-row'> { this.state.currentExpression } </div>
            </div>
        );
    }
}