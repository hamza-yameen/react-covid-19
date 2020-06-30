import React, { useState, useEffect } from "react";
import { fetchDailyDate } from "../../api";
import { Line, Bar } from "react-chartjs-2";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyDate());
    };
    fetchApi();
  }, []);

  const LineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            fill: true,
            backgroundColor: "rgba(75, 75, 192, 0.4)",
            borderColor: "rgba(75, 72, 192,1)",
            borderCapStyle: "butt",
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            backgroundColor: "rgba(255, 0, 255, 0.75)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  console.log(confirmed, recovered, deaths);

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current State is ${country}` },
      }}
    />
  ) : null;

  return <div className="container">{country ? barChart : LineChart}</div>;
};

export default Chart;
