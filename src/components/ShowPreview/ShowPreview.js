import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

class ShowPreview extends PureComponent {
    
    render() {
        const { image, name, id, summary } = this.props

        return (
            <div className='t-preview'>
                <div>
                    <a className='t-link' href={`shows/${id}`}>
                        <h3>{name}</h3>
                    </a>
                    {image && <img src={image} alt={name}/>}
                </div>
                <div dangerouslySetInnerHTML={{__html: summary}}></div>
            </div>
        );
    }
}

export default withRouter(ShowPreview);