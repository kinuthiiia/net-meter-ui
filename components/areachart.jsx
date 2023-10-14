import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";

export default function AreaChart({ data }) {
  const [option, setOption] = useState({});

  useEffect(() => {
    const chartOptions = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      xAxis: {
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        data: ["12am", "4am", "8am", "12pm", "4pm", "8pm", "12am"],
      },
      yAxis: {
        alignTicks: true,
        axisLine: {
          show: false,
        },
      },
      series: [
        {
          name: "Solar production",
          tooltip: {
            valueFormatter: (value) => value + " kW",
          },
          data,
          type: "line",
          areaStyle: {
            color: "#00ff00",
            opacity: 0.2,
          },
          lineStyle: {
            normal: {
              color: "green",
            },
          },
        },
        {
          name: "Home Usage",
          tooltip: {
            valueFormatter: (value) => value + " kW",
          },
          data: [25, 14, 23, 35, 10, 5, 3],
          type: "line",
          areaStyle: {
            color: "#ff0",
            opacity: 0.2,
          },
          lineStyle: {
            normal: {
              color: "#ff0",
            },
          },
        },
      ],
    };
    setOption(chartOptions);
  }, []);
  return <ReactECharts style={{ height: "70vh" }} option={option} />;
}
