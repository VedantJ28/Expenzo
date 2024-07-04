const transactions = [
  { id: 1, type: 'Income', category: 'Salary', amount: 5000, date: '2023-06-25' },
  { id: 2, type: 'Expense', category: 'Groceries', amount: 150, date: '2023-06-26' },
  { id: 3, type: 'Income', category: 'Freelance', amount: 1200, date: '2023-06-27' },
  { id: 4, type: 'Expense', category: 'Rent', amount: 1000, date: '2023-06-28' },
  { id: 5, type: 'Expense', category: 'Utilities', amount: 200, date: '2023-06-29' },
];

const TransactionsTable = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">#</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800">
            {transactions.map((transaction, index) => (
              <tr key={transaction.id} className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{transaction.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{transaction.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{transaction.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;
