import DarkModeToggle from './DarkModeToggle';
import PropTypes from 'prop-types';

export const Sidebar = ({ onSelectComponent, user, onLogout }) => {
  const handleComponentClick = (component) => {
    onSelectComponent(component);
  };

  return (
    <aside className="flex flex-col w-full sm:w-64 h-full sm:h-screen md:w-64 md:h-screen px-4 py-8 overflow-y-auto bg-white border-r dark:bg-gray-950 dark:border-gray-700">
      <div className="flex flex-col items-center">
        <a href="/main" className="mb-6 flex items-center ">
          <span className="mr-0 font-logo italic font-bold text-3xl text-[#09b3e4]">Expen</span>
          <span className="ml-0 font-logo italic font-bold text-3xl text-[#ff914d] ">zo</span>
        </a>
        <div className="flex flex-col items-center -mx-2">
          <img
            className="object-cover w-24 h-24 mx-2 rounded-full"
            src="./user1.png"
            alt="avatar"
          />
          <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">{user.name}</h4>
          <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{user.email}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <div
            className="flex items-center justify-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg dark:hover:text-gray-200 hover:dark:bg-gray-800 dark:text-gray-400 cursor-pointer"
            onClick={() => handleComponentClick('dashboard')}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mx-4 font-medium">Dashboard</span>
          </div>
          <div
            className="flex items-center justify-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 cursor-pointer"
            onClick={() => handleComponentClick('addIncome')}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12H19M12 5L12 19" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="mx-4 font-medium">Add Income</span>
          </div>
          <div
            className="flex items-center justify-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 cursor-pointer"
            onClick={() => handleComponentClick('addExpense')}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12H19" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="mx-4 font-medium">Add Expense</span>
          </div>
          <div
            className="flex items-center justify-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 cursor-pointer"
            onClick={() => handleComponentClick('alltransactions')}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 5H21M3 12H21M3 19H21" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="mx-4 font-medium">All Transactions</span>
          </div>
          <div className="flex justify-center my-5">
            <DarkModeToggle />
          </div>
        </nav>
        <div
          className="mt-auto flex items-center justify-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg dark:hover:text-gray-200 hover:dark:bg-gray-800 dark:text-gray-400 cursor-pointer"
          onClick={onLogout}
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 17L21 12M21 12L16 7M21 12H9M13 16V16C13 17.1046 12.1046 18 11 18H5C3.89543 18 3 17.1046 3 16V8C3 6.89543 3.89543 6 5 6H11C12.1046 6 13 6.89543 13 8V8" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="mx-4 font-medium">Logout</span>
        </div>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  onSelectComponent: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
};
