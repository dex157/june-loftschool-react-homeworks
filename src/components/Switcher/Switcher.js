import React, {Component, Fragment} from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

export default class Switcher extends Component {
   state = {
      selectedChild: 0
   };

   handleChangeChild = (event) => {
      this.setState({
         selectedChild: Number(event.target.dataset.id)
      });
   };

   render() {
      const {selectedChild} = this.state;
      const {children} = this.props;

      return (
         <Fragment>
            <ul className='component-list'>
               {
                  React.Children.map(children, (item, index) => {
                     const name = item.type.displayName || item.type.name;

                     return (
                        <li className="component-list__name"
                            data-id={index}
                            key={index}
                            onClick={this.handleChangeChild}
                        >{name}</li>
                     )
                  })
               }
            </ul>

            <hr/>

            {
               React.Children.map(children, (item, index) => {
                  if (selectedChild === index) {
                     return item
                  } else {
                     return null
                  }
               })
            }
         </Fragment>
      )
   }
}
