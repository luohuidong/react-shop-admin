import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import Presentation from './presentation';

const mapStateToProps = state => ({
  userData: state.login.data,
});

const App = connect(mapStateToProps)(Presentation);

export default hot(App);
