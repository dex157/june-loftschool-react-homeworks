import { connect } from 'react-redux';
import Followers from './Followers';
import { fetchFollowersRequest } from '../../ducks/followers';

const mapStateToProps = state => ({
  followers: state.followers
});

const mapDispatchToProps = {
  fetchFollowersRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Followers);
