import React from 'react';
import './style.css';
import dear from '../../../common/images/dear.png';

function GreetingTypeA(props) {
    console.log(props.content);
    return (
        <div id="area-greeting">
            <img src={dear} alt="" style={{ width: '7rem', marginTop: '20px' }} />
            <p className="greeting-content">{props.content}</p>
        </div>
    );
}

export default GreetingTypeA;
