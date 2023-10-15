import React from 'react';
import './style.css';
import insta from '../../../common/images/instagram.png';
import facebook from '../../../common/images/facebook.png';

function SNSTypeA(props) {
    return (
        <div id="area-sns">
            <div className="sns-box">
                <div className="sns-type">
                    <span>{props.name} 카카오톡</span>
                </div>
                <div className="sns-image">
                    <a href={props.kakaoHref}>
                        <img src={facebook} alt="" style={{ width: '3rem' }} />
                    </a>
                </div>
            </div>
            <div className="sns-box">
                <div className="sns-type">
                    <span>{props.name} 인스타</span>
                </div>
                <div className="sns-image">
                    <a href={props.instaHref}>
                        <img src={insta} alt="" style={{ width: '3rem' }} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SNSTypeA;
