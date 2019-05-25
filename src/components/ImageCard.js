import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {

        super(props);

        this.state = { spans: 0 }; 

        this.imageRef = React.createRef();

    }

    componentDidMount() {
        //console.log('did mount! ');
        //console.log(this.imageRef);
        //console.log(this.imageRef.current.clientHeight);
        //console.log('height : ' + this.imageRef.current.clientHeight);

        this.imageRef.current.addEventListener('load',this.setSpans);

    }

    setSpans = () => 
    {
        //console.log(this.imageRef.current.clientHeight);

        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil( height / 10);

        this.setState({ spans: spans});

    }

    //------version 1 ----

        /* 
        render () {

        return (
            <div>
                <img 
                    alt={this.props.image.description}
                    src={this.props.image.urls.regular}
                />
            </div>
        );
    } */

    //------/version 1 ----

   //------version 2 ----

     render () {

        const { description, urls} = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img 
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    } 
    //------/version 2 ----

}


export default ImageCard;