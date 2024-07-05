import { useState } from 'react';

const AllTransactions = () => {
  // Sample data for transactions
  const [transactions] = useState([
    {
      id: 1,
      title: 'Salary',
      type: 'Income',
      category: 'Regular Income',
      amount: 5000,
      date: '2024-07-05',
    },
    {
      id: 2,
      title: 'Rent',
      type: 'Expense',
      category: 'Housing',
      amount: 1200,
      date: '2024-07-04',
    },
    {
      id: 3,
      title: 'Groceries',
      type: 'Expense',
      category: 'Food & Dining',
      amount: 200,
      date: '2024-07-03',
    },
    {
      id: 4,
      title: 'Freelance Project',
      type: 'Income',
      category: 'Miscellaneous',
      amount: 800,
      date: '2024-07-02',
    },
    {
      id: 5,
      title: 'Internet Bill',
      type: 'Expense',
      category: 'Utilities',
      amount: 50,
      date: '2024-07-01',
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10; // Number of transactions per page

  // Pagination
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="relative overflow-x-auto  p-10">
        <h1 className="text-5xl dark:text-gray-200 text-gray-800 font-semibold text-center mb-8">All Transactions</h1>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map(transaction => (
            <tr key={transaction.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">{transaction.title}</td>
              <td className="px-6 py-4">{transaction.type}</td>
              <td className="px-6 py-4">{transaction.category}</td>
              <td className="px-6 py-4">{transaction.amount}</td>
              <td className="px-6 py-4">{transaction.date}</td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
          Showing <span className="font-semibold text-gray-900 dark:text-white">{indexOfFirstTransaction + 1}-{Math.min(indexOfLastTransaction, transactions.length)}</span> of <span className="font-semibold text-gray-900 dark:text-white">{transactions.length}</span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <a href="#" onClick={() => paginate(currentPage - 1)} className={`text-gray-900 dark:text-white flex items-center justify-center px-3 h-8 ${currentPage === 1 ? 'opacity-50 pointer-events-none' : 'leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}>
              Previous
            </a>
          </li>
          {Array.from({ length: Math.ceil(transactions.length / transactionsPerPage) }, (_, i) => (
            <li key={i}>
              <a href="#" onClick={() => paginate(i + 1)} className={`flex items-center justify-center px-3 h-8 ${currentPage === i + 1 ? 'text-blue-600 bg-blue-50 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white' : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}>
                {i + 1}
              </a>
            </li>
          ))}
          <li>
            <a href="#" onClick={() => paginate(currentPage + 1)} className={`text-gray-900 dark:text-white flex items-center justify-center px-3 h-8 ${currentPage === Math.ceil(transactions.length / transactionsPerPage) ? 'opacity-50 pointer-events-none' : 'leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AllTransactions;
