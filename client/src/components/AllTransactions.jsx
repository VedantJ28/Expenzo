import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const AllTransactions = ({ user }) => {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const transactionsPerPage = 6;

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/transactions/transactions`, {
          params: {
            userId: user._id,
            page: currentPage,
            limit: transactionsPerPage,
          },
        });
        setTransactions(response.data.transactions);
        setTotalTransactions(response.data.total);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch transactions');
      }
    };

    fetchTransactions();
  }, [currentPage, user._id]);

  // const deleteTransaction = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:3000/api/transactions/transactions/${id}`);
  //     setTransactions(transactions.filter(transaction => transaction._id !== id));
  //     setTotalTransactions(totalTransactions - 1);
  //   } catch (error) {
  //     console.error(error);
  //     alert('Failed to delete transaction');
  //   }
  // };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfFirstTransaction = (currentPage - 1) * transactionsPerPage + 1;
  const indexOfLastTransaction = Math.min(currentPage * transactionsPerPage, totalTransactions);

  return (
    <div className="relative overflow-x-auto p-10">
      <h1 className="text-5xl dark:text-gray-200 text-gray-800 font-semibold text-center mb-8">All Transactions</h1>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Title</th>
            <th scope="col" className="px-6 py-3">Type</th>
            <th scope="col" className="px-6 py-3">Category</th>
            <th scope="col" className="px-6 py-3">Amount</th>
            <th scope="col" className="px-6 py-3">Date</th>
            {/* <th scope="col" className="px-6 py-3">Action</th> */}
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">{transaction.title}</td>
              <td className="px-6 py-4">{transaction.type}</td>
              <td className="px-6 py-4">{transaction.category}</td>
              <td className="px-6 py-4">{transaction.amount}</td>
              <td className="px-6 py-4">{new Date(transaction.date).toLocaleDateString()}</td>
              {/* <td className="px-6 py-4 flex space-x-2">
                <button 
                  onClick={() => deleteTransaction(transaction._id)} 
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
          Showing <span className="font-semibold text-gray-900 dark:text-white">{indexOfFirstTransaction}-{indexOfLastTransaction}</span> of <span className="font-semibold text-gray-900 dark:text-white">{totalTransactions}</span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className={`text-gray-900 dark:text-white flex items-center justify-center px-3 h-8 ${currentPage === 1 ? 'opacity-50 pointer-events-none' : 'leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}>
              Previous
            </button>
          </li>
          {Array.from({ length: Math.ceil(totalTransactions / transactionsPerPage) }, (_, i) => (
            <li key={i}>
              <button onClick={() => paginate(i + 1)} className={`flex items-center justify-center px-3 h-8 ${currentPage === i + 1 ? 'text-blue-600 bg-blue-50 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white' : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}>
                {i + 1}
              </button>
            </li>
          ))}
          <li>
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(totalTransactions / transactionsPerPage)} className={`text-gray-900 dark:text-white flex items-center justify-center px-3 h-8 ${currentPage === Math.ceil(totalTransactions / transactionsPerPage) ? 'opacity-50 pointer-events-none' : 'leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

AllTransactions.propTypes = {
  user: PropTypes.object.isRequired,
};

