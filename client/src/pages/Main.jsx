import  { useState } from 'react';
import { Navigate } from 'react-router-dom';
import {Sidebar} from '../components/Sidebar';
import {Dashboard} from '../components/Dashboard';
import {AddIncomeForm} from '../components/AddIncomeForm';
import AddExpenseForm from '../components/AddExpenseForm';
import {AllTransactions} from '../components/AllTransactions';
import {Footer} from '../components/Footer';
import PropTypes from 'prop-types';

export const Main = ( {user} ) => {
  const [selectedComponent, setSelectedComponent] = useState('dashboard');
  

  const renderComponent = ( {user} ) => {
    switch (selectedComponent) {
      case 'dashboard':
        return <Dashboard user={user}/>;
      case 'addIncome':
        return <AddIncomeForm user={user}/>;
      case 'addExpense':
        return <AddExpenseForm user={user}/>;
      case 'alltransactions':
        return <AllTransactions user={user}/>;
      default:
        return <Dashboard />;
    }
  };

  return user ? (
    <div className="flex h-screen">
      <div className="w-64 h-screen overflow-y-auto">
        <Sidebar onSelectComponent={setSelectedComponent} user={user} />
      </div>
      <div className="flex-1 flex flex-col overflow-y-auto dark:bg-gray-900">
        <div className="flex-1">{renderComponent( user={user} )}</div>
        <Footer />
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

Main.propTypes = {
    user: PropTypes.object,
  };

