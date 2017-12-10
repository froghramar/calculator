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
            currentExpression: '29.36',
            pastExpression: '12.34+17.02='
        });
    }

    onAdd = (toAdd: string) => {
        this.setState({
            currentExpression: this.state.currentExpression.concat(toAdd)
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