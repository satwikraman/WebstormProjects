import React from 'react'
import {connect} from 'react-redux'
class cars extends React.Component{
    render(){
        const car=this.props.carData
        console.log(car)
    return(
        <div className="cars container" style={{ padding : '50px'}}>
            <div className="card center" >
            <h4>{car.category} {car.year} {}</h4>

            </div>
        </div>
    )
}
}
const mapStateToProps=(state,ownProps)=>{
    let id=ownProps.match.params.p_id;
    console.log(id)
    return{
        carData:state.data.find(res=>res.model ===id)
    }
}
export default connect(mapStateToProps)(cars)