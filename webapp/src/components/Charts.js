import React, {Component} from "react";
import {LineChart,XAxis, Line, CartesianGrid} from "recharts";


export default class Charts extends Component{
    render() {
        return (
            <LineChart
                width={400}
                height={400}
                data={["name",424]}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
                <XAxis dataKey="name" />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
            </LineChart>
        )
    }
}