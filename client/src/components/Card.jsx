import PropTypes from 'prop-types';

const Card = ({ title, amount }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-80">
      <div className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        {title}
      </div>
      <div className="text-3xl font-bold text-gray-800 dark:text-white">
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
