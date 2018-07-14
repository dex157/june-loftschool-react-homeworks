import { connect } from 'react-redux';
import Search from './Search';
import { searchRequest } from '../../actions/search';

const mapStateToProps = state => ({
  isFetching: state.search.isFetching,
  result: state.search.result,
  error: state.search.error
});

const mapDispatchToProps = {
  searchRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
