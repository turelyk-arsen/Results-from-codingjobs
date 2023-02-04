import React from 'react';

class Image extends React.Component {
    render() {
        return (
            <img alt='logo' src={this.props.image}/>
        )
    }
}

export default Image