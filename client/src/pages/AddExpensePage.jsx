import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';
import { AddExpenseForm } from '../components/AddExpenseForm';


export const AddExpensePage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-64 h-screen overflow-y-auto">
        <Sidebar/>
      </div>
      <div className="flex-1 flex flex-col overflow-y-auto dark:bg-gray-900">
        <div className="flex-1">
          <AddExpenseForm/>
        </div>
        <Footer />
      </div>
    </div>
  )
}
