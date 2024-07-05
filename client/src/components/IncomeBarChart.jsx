import PropTypes from 'prop-types';
import { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const IncomeBarChart = ({ data, chartHeight }) => {
  useEffect(() => {
    const chartConfig = {
      series: [
        {
          name: 'Income',
          data: data.map(item => item.amount),
        },
      ],
      chart: {
        type: 'bar',
        height: chartHeight, // Dynamically set the height based on prop
        toolbar: {
          show: false,
        },
      },
      title: {
        show: '',
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
        categories: data.map(item => item.category),
      },
      yaxis: {
        labels: {
          style: {
            colors: '#616161',
            fontSize: '12px',
            fontFamily: 'inherit',
            fontWeight: 400,
          },
          formatter: (value) => `₹ ${value}`, // Format y-axis to show rupees
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

    return () => chart.destroy(); // Clean up the chart on component unmount
  }, [data, chartHeight]);

  return <div id="income-bar-chart" />;
};

IncomeBarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
  chartHeight: PropTypes.number.isRequired, // Prop type for chart height
};

export default IncomeBarChart;
