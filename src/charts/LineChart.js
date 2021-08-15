import React, { useState, useEffect } from 'react';
import { getApprovedMedicine } from "../services/medicineService";
import { getAuthToken } from "../services/authService";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
    {name: 'January', uv: 400},
    {name: 'February', uv: 200},
    {name: 'March', uv: 150},
    {name: 'April', uv: 300},
    {name: 'May', uv: 600},
    {name: 'June', uv: 500},
    {name: 'July', uv: 150},
    {name: 'August', uv: 300},
    {name: 'September', uv: 550},
    {name: 'October', uv: 300},
    {name: 'November', uv: 50},
    {name: 'December', uv: 1000},
];

const RenderLineChart = () => {
    const [receivedMedicine, setReceivedMedicine] = useState([]);

    const getReceivedMedicine = async () => {
      try {
          const { data } = await getApprovedMedicine(getAuthToken());
          setReceivedMedicine(data);
          console.log(data);
      } catch (ex) {
          console.log(ex.response);
      }
    };

    useEffect(() => {
        getReceivedMedicine();
    }, [])

    return (
        <LineChart width={1150} height={400} data={receivedMedicine} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="quantity_received" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date_approved" />
            <YAxis />
            <Tooltip />
        </LineChart>
    );
};

export default RenderLineChart;