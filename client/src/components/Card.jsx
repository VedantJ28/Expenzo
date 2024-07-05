import PropTypes from 'prop-types';

const Card = ({ title, amount }) => {
  return (
    <div className=" bg-white hover:bg-gray-100 dark:bg-gray-900 hover:dark:bg-gray-950 shadow-md rounded-lg p-6 w-80">
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
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  };

export default Card;
