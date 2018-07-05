import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './ShowPreview.css';
import { showRequest } from '../../actions/show';

class ShowPreview extends PureComponent {
    fetchDataShow = (showId) => {
        this.props.showRequest(showId);
    };
    
    render() {
        const { serials } = this.props;

        return (
            <ul className="serials__list">
                {serials.map(this.renderSerial)}
            </ul>
        )
    };

    renderSerial = serial => (
        <li className="serial" key={serial.id}>
            <Link 
                className="serial__link"
                to={`/shows/${serial.id}`}
                onClick={() => this.fetchDataShow(serial.id)}>
                    {serial.name}
            </Link>
            {serial.image && <img className="serial__img" src={serial.image.medium} alt={serial.name} />}
            <div className="serial__summary" dangerouslySetInnerHTML={{__html: serial.summary}} />
        </li>
    );
};

const mapStateToProps = state => ({
    serials: state.search.serials
});

const mapDispatchToProps = { showRequest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowPreview);