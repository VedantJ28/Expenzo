import { useRef, useEffect, useState } from 'react';
import Card from './Card';
import DonutChart from './DonutChart';
import IncomeBarChart from './IncomeBarChart';
import TransactionsTable from './TransactionsTable';
import PropTypes from 'prop-types';

export const Dashboard = ({user}) => {

  const [donutHeight, setDonutHeight] = useState(0);
  const donutChartRef = useRef(null);

  useEffect(() => {
    if (donutChartRef.current) {
      setDonutHeight(donutChartRef.current.clientHeight);
    }
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 container mx-auto py-8">
      <h1 className="text-5xl dark:text-gray-200 text-gray-800 font-semibold text-center mb-8">Dashboard</h1>

      <div className="container mx-auto flex flex-col md:flex-row justify-center gap-8 mb-8 px-4 sm:px-8">
        <Card title="Total Income"  user={user} />
        <Card title="Total Expense" user={user} />
        <Card title="Balance" user={user} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="col-span-1">
          <div ref={donutChartRef}>
            <DonutChart user={user}/>
          </div>
        </div>
        <div className="col-span-2">
          <IncomeBarChart user={user} chartHeight={donutHeight} />
        </div>
      </div>

      <div className="mx-auto">
        <TransactionsTable user={user} />
      </div>
    </div>
  );
};
Dashboard.propTypes = {
  user: PropTypes.object,
};
