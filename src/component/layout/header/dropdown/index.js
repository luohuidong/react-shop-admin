import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { doLogOut } from 'page/login/index.js';
import Presentation from './presentation';

const mapStateToProps = state => ({
  userData: state.login.data
});

const mapDispatchToProps = {
  doLogOut
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Presentation));
