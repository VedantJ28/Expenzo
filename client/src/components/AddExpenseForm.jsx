import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const AddExpenseForm = ({ user }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    amount: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, category, amount } = formData;
    if (!title || !category || !amount) {
      alert('All fields are required');
      return;
    }

    const transactionData = {
      userId: user._id,
      title,
      amount: parseFloat(amount),
      type: 'expense',
      category,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/transactions/expenses`, transactionData);
      console.log(response.data);
      // Optionally, you can reset the form or give feedback to the user
      setFormData({
        title: '',
        category: '',
        amount: '',
      });
      alert('Expense added successfully');
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Failed to add expense');
    }
  };

  return (
    <section className="bg-white dark:bg-gray-950 py-4 md:py-8">
      <h1 className="text-5xl dark:text-gray-200 text-gray-800 font-semibold text-center mb-8">Add New Expense</h1>
      <div className="py-4 px-4 mx-auto max-w-2xl bg-gray-200 dark:bg-gray-800 shadow-md rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Type expense title"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <select
                name="category"
                id="category"
                value={formData.category}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="" disabled>Select category</option>
                <option value="food">Food</option>
                <option value="rent">Rent</option>
                <option value="loan">Loan</option>
                <option value="travel">Travel</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="amount"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Amount (₹)
              </label>
              <input
                type="number"
                name="amount"
                id="amount"
                value={formData.amount}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter amount"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 sm:mt-6 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

AddExpenseForm.propTypes = {
  user: PropTypes.object.isRequired,
};


