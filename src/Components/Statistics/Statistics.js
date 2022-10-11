import React from "react";
import { ResponsiveContainer, LineChart, Line, BarChart, YAxis, XAxis, Bar, Tooltip } from "recharts";
import './Statistics.css';
import { useLoaderData } from 'react-router-dom';



const Statistics = () => {

    const total = useLoaderData()
    // console.log(total.data);

    return (
        <div className="statistic">
        <h1>MONTHLY STATUS OF QUICK-TECH</h1>
        <div className="charts">
            <ResponsiveContainer width="100%" aspect={2}>
                <LineChart data={total.data}>
                    <XAxis dataKey="name" interval={'preserveStartEnd'} />
                    <Line dataKey="total" />
                    <YAxis></YAxis>
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
        </div>
    );
}
export default Statistics;