import React, { Fragment } from 'react';
import ShowPreview from 'components/ShowPreview';
import { connect } from 'react-redux';
import Search from 'components/Search';

class ShowList extends React.PureComponent {
  render() {
    const { result } = this.props;
    return (
      <Fragment>
        <Search />
        <ul className="t-search-result">
          {result.map(item => (
            <ShowPreview
              key={item.id}
              image={item.image.medium}
              name={item.name}
              id={item.id}
              summary={item.summary}
            />
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  result: state.search.result
});

export default connect(mapStateToProps)(ShowList);
