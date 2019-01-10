import { connect } from 'react-redux';
import { doLogOut } from 'page/login/index.js';
import Presentation from './presentation';

const mapStateToProps = state => ({
  userData: state.login.data
});

const mapDispatchToProps = {
  doLogOut
};

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
