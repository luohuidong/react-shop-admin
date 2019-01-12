import { connect } from 'react-redux';
import Presentation from './presentation';

const mapStateToProps = state => ({
  userData: state.login.data,
});

export default connect(mapStateToProps)(Presentation);
