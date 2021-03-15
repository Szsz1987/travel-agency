import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions} from '../../../redux/orderRedux';
import {setOrderOption} from '../../../redux/orderRedux';

const mapStateToProps = state =>
  ({
    options: getOrderOptions(state), // props options
  });

const mapDispatchToProps = dispatch => ({
  setOrderOption: option => dispatch(setOrderOption(option)),
});

export default connect (mapStateToProps, mapDispatchToProps)(OrderForm);

