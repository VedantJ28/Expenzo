import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js/auto';

const DonutChart = ({ categories, expenses }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartContainer.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: categories,
        datasets: [{
          label: 'Category-wise Expenses',
          data: expenses,
          backgroundColor: [
            '#2563EB',
            '#10B981',
            '#F59E0B',
            // Add more colors as needed
          ],
        }],
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
                return tooltipItem.label + ': $' + tooltipItem.raw.toLocaleString();
              }
            }
          }
        }
      }
    });

    return () => {
      chartInstance.current.destroy();
    };
  }, [categories, expenses]);

  return (
    <div className="py-6">
      <div className="relative" style={{ height: '300px' }}>
        <canvas ref={chartContainer} className="w-full h-full"></canvas>
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Category-wise Expenses</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Total Expenses: ${expenses.reduce((acc, val) => acc + val, 0)}
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

DonutChart.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default DonutChart;
