import PropTypes from 'prop-types';

const Card = ({ title, user }) => {
  let amount;
  if(title == "Total Income"){
    amount = user.totalIncome; 
  }
  else if(title == "Total Expense"){
    amount = user.totalExpense;
  }
  else if(title == "Balance"){
    amount = user.balance;
  }

  return (
    <div className=" bg-white hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-600  shadow-md rounded-lg p-6 w-80">
      <div className="flex justify-center text-3xl font-semibold text-gray-700 dark:text-white mb-4">
        {title}
      </div>
      <div className="flex justify-center text-5xl font-bold text-gray-800 dark:text-white">
        ₹ {amount}
      </div>
    </div>
  );
};
Card.propTypes = {
    title: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
  };

export default Card;
