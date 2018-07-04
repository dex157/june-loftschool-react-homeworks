import React, { Component } from 'react';

class ShowPage extends Component {
  render() {
    const { name, image, summary, persons } = this.props;
    return (
      <div>
        <p>{name}</p>
        <img src={image.medium} alt={name} />
        <div>{summary}</div>
        <div>
          {persons.map(element => {
            return (
              <div>
                <p>{element.name}</p>
                <img src={element.image.medium} alt={element.name} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShowPage;
