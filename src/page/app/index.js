import { connect } from 'react-redux';
import { doLogin } from 'page/login/index.js';
import Presentation from './presentation';

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = {
  doLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
