import DarkModeToggle from "./DarkModeToggle";
import PropTypes from 'prop-types';
import logo1 from '../../public/logo1.png';
import logo2 from '../../public/logo2.png';


export const Sidebar = ({ onSelectComponent, user, onLogout }) => {
  const handleComponentClick = (component) => {
    onSelectComponent(component);
  };

  return (
    <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-950">
      <div className="flex flex-col items-center">
      <a href="/main" className="mb-6 flex items-center space-x-2">
          <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800">
            <img src={logo2} alt="Logo" className="object-cover dark:hidden" />
            <img src={logo1} alt="Logo" className="hidden object-cover dark:block" />
          </div>
          <span className="font-logo italic font-semibold text-xl text-gray-900 dark:text-gray-100">BudgetBuddy</span>
        </a>
        <div className="flex flex-col items-center -mx-2">
          <img
            className="object-cover w-24 h-24 mx-2 rounded-full"
            src="./user.png"
            alt="avatar"
          />
          <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">{user.name}</h4>
          <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{user.email}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <div className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg dark:hover:text-gray-200 hover:dark:bg-gray-800 dark:text-gray-400" onClick={() => handleComponentClick('dashboard')}>
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
          <div className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" onClick={() => handleComponentClick('addIncome')}>
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
          <div className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"  onClick={() => handleComponentClick('addExpense')}>
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
          <div className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" onClick={() => handleComponentClick('alltransactions')}>
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
        <div className="mt-auto flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg dark:hover:text-gray-200 hover:dark:bg-gray-800 dark:text-gray-400 cursor-pointer" onClick={onLogout}>
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
