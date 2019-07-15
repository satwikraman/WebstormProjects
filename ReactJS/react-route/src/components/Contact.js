import React from 'react';
import HigherComponent from '../components/hoc/HigherComponent';

const Contact = (props) => {
    console.log(props);
    return (
        <div>
            <div className="container">
                <h4 className="center">Contact</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate earum laborum odio nam reiciendis consectetur iste excepturi hic dignissimos, tempora officia architecto. Hic libero odio et repellendus eligendi. Illo.</p>
            </div>
        </div>
    )
}
export default HigherComponent(Contact);