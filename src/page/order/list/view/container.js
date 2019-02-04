import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../actions.js';
import Presentation from './presentation.js';

const mapStateToProps = state => ({
  orderList: state.orderList
});

const mapDispatchToProps = {
  ...actions
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Presentation));
