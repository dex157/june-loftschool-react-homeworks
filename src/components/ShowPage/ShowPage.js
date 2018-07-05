import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './ShowPage.css';

class ShowPage extends PureComponent {
 render() {
     const { chosenSerial } = this.props,
        { name, image, summary } = chosenSerial;
       
     return (
        <div className="serial-showresult">
            <h1>{name}</h1>
            {image && <img className="serial-showresult__img" src={image.medium} alt={name} />}
            <div className="serial-showresult__summary" dangerouslySetInnerHTML={{__html: summary}} />
            <ul className="cast__list">
                {chosenSerial._embedded && chosenSerial._embedded.cast.map(castMember => (
                   <li className="cast__item" key={castMember.person.id}>
                    <div className="cast__name">{castMember.person.name}</div>
                    {castMember.person.image && <img className="cast__img" src={castMember.person.image.medium} alt={castMember.person.name} />}
                   </li> 
                ))}
            </ul>
        </div>
     )
 };
};

const mapStateToProps = state => ({
    chosenSerial: state.shows.entities
});

export default connect(
    mapStateToProps
)(ShowPage);