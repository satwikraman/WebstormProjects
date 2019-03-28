import React, {Component} from 'react';

class C1 extends Component{
    render(){
         const {Name, Age, Height}=this.props
        return(
            <div className="c1">
                <div>Name: {Name}</div>
                <div>Age:{Age}</div>
                <div>Height:{Height}</div>
            </div>
        )
    }
}
export default C1