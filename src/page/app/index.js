import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Presentation from './presentation';

const mapStateToProps = state => ({
  userData: state.login.data,
});

const App = withRouter(connect(mapStateToProps)(Presentation));

export default hot(App);
