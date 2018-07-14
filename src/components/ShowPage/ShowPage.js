import React, { PureComponent } from 'react';
import './ShowPage.css';

export default class ShowPage extends PureComponent {
  componentWillMount() {
    const { showRequest, match } = this.props;
    showRequest(match.params.id);
  }

  render() {
    const { entity } = this.props;

    if (!entity.name) {
      return null;
    }

    return (
      <div>
        <p>{entity.name}</p>
        {entity.image && <img src={entity.image.medium} alt={entity.name} />}
        <div dangerouslySetInnerHTML={{ __html: entity.summary }} />
        <div className="actors">
          {entity._embedded.cast.map(({ person }) => (
            <div key={person.id} className="t-person">
              <p>{person.name}</p>
              {person.image && (
                <img src={person.image.medium} alt={person.name} />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
