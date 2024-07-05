import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ApexCharts from 'apexcharts';
import axios from 'axios';

const IncomeBarChart = ({ user, chartHeight }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/transactions/categoryIncome/${user._id}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    };

    fetchData();
  }, [user._id]);

  useEffect(() => {
    const chartConfig = {
      series: [
        {
          name: 'Income',
          data: data.map(item => item.totalAmount),
        },
      ],
      chart: {
        type: 'bar',
        height: chartHeight,
        toolbar: {
          show: false,
        },
      },
      title: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#fcd34d'],
      plotOptions: {
        bar: {
          columnWidth: '40%',
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: '#616161',
            fontSize: '12px',
            fontFamily: 'inherit',
            fontWeight: 400,
          },
        },
        categories: data.map(item => item._id),
      },
      yaxis: {
        labels: {
          style: {
            colors: '#616161',
            fontSize: '12px',
            fontFamily: 'inherit',
            fontWeight: 400,
          },
          formatter: value => `₹ ${value}`,
        },
      },
      grid: {
        show: true,
        borderColor: '#dddddd',
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: 'dark',
      },
    };

    const chart = new ApexCharts(document.querySelector('#income-bar-chart'), chartConfig);
    chart.render();

    return () => chart.destroy();
  }, [data, chartHeight]);

  return <div id="income-bar-chart" />;
};

IncomeBarChart.propTypes = {
  user: PropTypes.object.isRequired,
  chartHeight: PropTypes.number.isRequired,
};

export default IncomeBarChart;
