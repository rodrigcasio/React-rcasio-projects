import React from 'react'

class ParentComp extends React.Component {
    state = {childColor: "green", name: "John" }
    
    // is this a method ?
    changeColor = () => {
        const newColor = document.getElementById("colorbox").value;
        this.setState({ childColor: newColor});
    }

    // is this a method? 
    changeName = () => {
        const newName = document.getElementById("namebox").value;
        this.setState({ name: newName });
    }

    render() {
        console.log("Inside render");
        
        return(
            <div>
                Color<input type="text" onChange={this.changeColor} id="colorbox" /> <br />
                Name<input type="text" onChange={this.changeName} id="namebox" />
                <ChildInner color={this.state.childColor} name={this.state.name} />
            </div>
        );
    }
}

class ChildInner extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const txtStyle = { color: this.props.color }
        return (
            <span style={txtStyle}>{this.props.name}</span>
        );
    }
}

export default ParentComp;
