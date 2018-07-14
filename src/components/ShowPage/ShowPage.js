import './ShowPage.css';
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {showRequest} from '../../actions/show';

export class ShowPage extends Component {
   componentWillMount() {
      const {showRequest, match} = this.props;
      showRequest(match.params.id);
   }

   render() {
      const {entity} = this.props;

      if (!entity.name) {
         return null;
      }

      return (
         <Fragment>
            <p>{entity.name}</p>
            {
               entity.image && <img src={entity.image.medium} alt={entity.name}/>
            }
            <div dangerouslySetInnerHTML={{__html: entity.summary}}/>
            <div className="actors">
               {
                  entity._embedded.cast.map(({person}, index) => (
                     <div key={index} className="t-person">
                        <p>{person.name}</p>
                        {
                           person.image && <img src={person.image.medium} alt={person.name}/>
                        }
                     </div>
                  ))
               }
            </div>
         </Fragment>
      );
   }
}

const mapStateToProps = state => ({
   isFetching: state.shows.isFetching,
   entity: state.shows.entity
});

const mapDispatchToProps = {
   showRequest
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ShowPage);
