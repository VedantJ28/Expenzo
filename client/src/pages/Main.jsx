import { useState } from 'react';
import { Dashboard } from "../components/Dashboard";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";
import AddIncomeForm from '../components/AddIncomeForm';
import { AddExpenseForm } from '../components/AddExpenseForm';
import AllTransactions from '../components/AllTransactions';

export const Main = () => {
    const [selectedComponent, setSelectedComponent] = useState('dashboard');

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'dashboard':
                return <Dashboard />;
            case 'addIncome':
                return <AddIncomeForm />;
            case 'addExpense':
                return <AddExpenseForm />;
            case 'alltransactions':
                return <AllTransactions/>
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="flex h-screen">
            <div className="w-64 h-screen overflow-y-auto">
                <Sidebar onSelectComponent={setSelectedComponent} />
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto dark:bg-gray-900">
                <div className="flex-1">
                    {renderComponent()}
                </div>
                <Footer />
            </div>
        </div>
    );
};
