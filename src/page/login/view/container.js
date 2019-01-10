import { connect } from 'react-redux';
import * as actions from '../actions.js';
import Presentation from './presentation.js';

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = {
  ...actions
};

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
