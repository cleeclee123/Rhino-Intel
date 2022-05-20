import React, { useState, useEffect } from "react";
import { HistoricalChart } from "../config/cryptoapi";
import Chart from 'react-apexcharts'
import axios from "axios";

const chart = {
    options: {
        chart: {
            type: 'candlestick',
            height: 350
        },
        title: {
            text: 'CandleStick Chart',
            align: 'left'
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            tooltip: {
            enabled: true
            }
        }
    },
};
  
const CoinInfo = ({ coin }) => {
    const [historicData, setHistoricData] = useState();
    const [days, setDays] = useState(1);
    const [series, setSeries] = useState([{ data: [] }]);
    
    const fetchHistoricData = async () => {
        const { data } = await axios.get(HistoricalChart(coin.id, days, 'usd'));
        setHistoricData(data.prices);
    };

    //console.log(historicData);

    useEffect(() => {
        fetchHistoricData();
        try {
            const prices = historicData.map((coin) => ({
                x: new Date(coin[0]),
                y: coin[1]
            }));
            setSeries([{
                data: prices,
            }]);
        } catch (error) {
            console.log(error);
        }
    }, [10]);

    console.log(series[0]);
    

    return (
        <div>
            <h1 style={{ color: "white", position: "relative"}} > coin info </h1>
            <Chart options={chart.options} series={series} type="candlestick" width="100%" height={320} />
        </div>
    );
};

export default CoinInfo;