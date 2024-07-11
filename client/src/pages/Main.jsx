import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { Dashboard } from '../components/Dashboard';
import { AddIncomeForm } from '../components/AddIncomeForm';
import { AddExpenseForm } from '../components/AddExpenseForm';
import { AllTransactions } from '../components/AllTransactions';
import { Footer } from '../components/Footer';
import PropTypes from 'prop-types';

export const Main = ({ user, setUser }) => {
  const [selectedComponent, setSelectedComponent] = useState('dashboard');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'dashboard':
        return <Dashboard user={user} />;
      case 'addIncome':
        return <AddIncomeForm user={user} />;
      case 'addExpense':
        return <AddExpenseForm user={user} />;
      case 'alltransactions':
        return <AllTransactions user={user} />;
      default:
        return <Dashboard user={user} />;
    }
  };

  return user ? (
    <div className="flex flex-col sm:flex-row sm:min-h-screen">
      <Sidebar
        className="sm:w-64 h-auto sm:h-screen md:w-64 md:h-screen  overflow-y-auto bg-white border-r dark:bg-gray-900 dark:border-gray-700"
        onSelectComponent={setSelectedComponent}
        user={user}
        onLogout={handleLogout}
      />
      <div className="flex-1 h-auto sm:h-screen overflow-y-auto dark:bg-gray-950">
        <div className="p-4">{renderComponent()}</div>
        <Footer />
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

Main.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func.isRequired,
};

export default Main;
