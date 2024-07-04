import { useRef, useEffect, useState } from 'react';
import Card from './Card';
import DonutChart from './DonutChart';
import IncomeBarChart from './IncomeBarChart';
import TransactionsTable from './TransactionsTable';

export const Dashboard = () => {
  const totalIncome = 3000;
  const totalExpense = 1200;
  const balance = totalIncome - totalExpense;

  const categories = ['Food', 'Utilities', 'Transportation'];
  const expenses = [500, 300, 400];

  const incomeData = [
    { category: 'January', amount: 500 },
    { category: 'February', amount: 700 },
    { category: 'March', amount: 1500 },
  ];

  const [donutHeight, setDonutHeight] = useState(0);
  const donutChartRef = useRef(null);

  useEffect(() => {
    if (donutChartRef.current) {
      setDonutHeight(donutChartRef.current.clientHeight);
    }
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Dashboard</h1>

      <div className="container mx-auto flex flex-col md:flex-row justify-center gap-8 mb-8 px-4 sm:px-8">
        <Card title="Total Income" amount={totalIncome} />
        <Card title="Total Expense" amount={totalExpense} />
        <Card title="Balance" amount={balance} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="col-span-1">
          <div ref={donutChartRef}>
            <DonutChart categories={categories} expenses={expenses} />
          </div>
        </div>
        <div className="col-span-2">
          <IncomeBarChart data={incomeData} chartHeight={donutHeight} />
        </div>
      </div>

      <div className="mx-auto">
        <TransactionsTable />
      </div>
    </div>
  );
};
