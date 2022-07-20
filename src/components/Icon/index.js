import PropTypes from 'prop-types';

const Icon = ({ icon, size, viewbox }) => (
  <svg width={size} height={size} viewBox={viewbox}>
    <path d={icon} />
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  viewbox: PropTypes.string.isRequired,
};

export default Icon;
