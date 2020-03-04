import React, { Component } from 'react';
import './BarChart.css';

class BarChart extends Component {
    render() {
        return (
            <div className="BarChart-content">
                <div className="BarChart-title">Some Bar Chart</div>
                <div className="BarChart-graph">
                {
                    this.props.barData && this.props.barData.map( el => 
                        <div className="GraphBar" style={{ height: Number(el.value)/this.props.highest_value * 100 + '%', backgroundColor: this.props.barColor, width: '50px'}}>
                        {el.value}</div>
                        )
                }
                </div>
            </div>
        )
    }
}

export default BarChart;