import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { changeValue } from '../../redux/actions/create';
import { changeTitle } from '../../redux/actions/modals';

const Input = ({ inputName, className }) => {
  // la syntaxe entre [] permet d'accéder à une propriété d'un objet dynamiquement
  // si inputName contient 'firstName' par exemple cela équivaut à state.firstName
  const value = useSelector((state) => state[inputName]);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeValue(event.target.name, event.target.value));
    dispatch(changeTitle('Add a new step to your trip'));
  };

  return (
    <input value={value} name={inputName} onChange={handleChange} className={className} />
  );
};

Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Input;
