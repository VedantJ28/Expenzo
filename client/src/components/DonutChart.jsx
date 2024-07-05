import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js/auto';
import axios from 'axios';

const DonutChart = ({ user }) => {
  const [categoryData, setCategoryData] = useState([]);
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/transactions/categoryExpenses/${user._id}`);
        const data = response.data;

        if (data.length === 0) {
          setCategoryData([{ _id: 'No Expenses', totalAmount: 100 }]);
        } else {
          setCategoryData(data);
        }
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    };

    fetchData();

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [user._id]);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (categoryData.length > 0) {
      const colors = ['#2563EB', '#10B981', '#F59E0B', '#FF7A5A', '#4F46E5'];

      const ctx = chartContainer.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: categoryData.map((item) => item._id),
          datasets: [
            {
              label: 'Category-wise Expenses',
              data: categoryData.map((item) => item.totalAmount),
              backgroundColor: categoryData.map((item, index) =>
                item._id === 'No Expenses' ? '#FF0000' : colors[index % colors.length]
              ),
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
            },
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  return tooltipItem.label + ': ₹' + tooltipItem.raw.toLocaleString();
                },
              },
            },
          },
        },
      });
    }
  }, [categoryData]);

  return (
    <div className="py-6">
      <div className="relative" style={{ height: '300px' }}>
        <canvas ref={chartContainer} className="w-full h-full"></canvas>
      </div>
    </div>
  );
};

DonutChart.propTypes = {
  user: PropTypes.object.isRequired,
};

export default DonutChart;
