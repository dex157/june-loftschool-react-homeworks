import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getShowRequest } from 'actions/show';

class ShowPage extends PureComponent {

    componentDidMount() {
        const { getRequest, match } = this.props;
        const id = match.params.id;

        getRequest(id);
    }

    render() {
        const { shows } = this.props;
        const { name, summary, cast, image } = shows;
        console.log(cast)

        return (
            <div>
                <h1>{name}</h1>
        
                <img src={image} alt={name} />
        
                <p dangerouslySetInnerHTML={{ __html: summary }} />
        
                <div className="cast">
                    <h2>Cast</h2>
                    <div className="cast__body">
                        {cast && cast.map((person, index) => (
                        <div className="cast__person t-person" key={index}>
                            <h3>
                                <p>
                                    {person.name}
                                </p>
                            </h3>
                            <img src={person.image} alt={person.name} />
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    shows: state.shows
});

const mapDispatchToProps = dispatch => ({
    getRequest: payload => dispatch(getShowRequest(payload))
});

export default withRouter(
    connect(
        mapStateToProps, 
        mapDispatchToProps
    )(ShowPage)
);