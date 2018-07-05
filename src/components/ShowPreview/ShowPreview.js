import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './ShowPreview.css';
import { showRequest } from '../../actions/show';
import { getSerials } from '../../selectors/searchSelectors';

class ShowPreview extends PureComponent {
  fetchDataShow = showId => {
    this.props.showRequest(showId);
  };

  render() {
    const { serials } = this.props;

    return <ul className="serials__list">{serials.map(this.renderSerial)}</ul>;
  }

  renderSerial = ({ id, name, image, summary }) => (
    <li className="serial" key={id}>
      <Link
        className="serial__link"
        to={`/shows/${id}`}
        onClick={() => this.fetchDataShow(id)}
      >
        {name}
      </Link>
      {image && <img className="serial__img" src={image.medium} alt={name} />}
      <div
        className="serial__summary"
        dangerouslySetInnerHTML={{ __html: summary }}
      />
    </li>
  );
}

const mapStateToProps = state => ({
  serials: getSerials(state)
});

const mapDispatchToProps = { showRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPreview);
