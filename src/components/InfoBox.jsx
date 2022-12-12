import { useState } from 'react';
import './InfoBox.css';
import arrow from '../assets/arrows.svg';
function InfoBox({ props }) {
    const [expand, setExpand] = useState(false);
    return (
        <div className={`InfoBox ${expand ? `expandedInfoBox` : ''}`}>
            <img
                className={`arrow ${expand ? `rotateArrow` : ''}`}
                src={arrow}
                alt='arrow'
                onClick={() => {
                    setExpand(!expand);
                }}
            />
            <p>{`${expand ? 'hide' : 'details'}`}</p>
            <div className='values'>
                <h4 style={{ fontWeight: 'bold' }}>{props.name}</h4>
                <h4>
                    {props.firstLine} {props.secondLine}
                </h4>
                <h4>{props.town}</h4>
                <h4>{props.postcode}</h4>
            </div>
            <div className='contact-details'>
                <h4>{props.phone}</h4>
                <h4>{props.email}</h4>
                <h4>{props.website}</h4>
            </div>
            <div className='survey'>
                <h4>have you visited {props.name}?</h4>
                <h4>check all that apply</h4>
                <br />
                <h4>Opening Hours</h4>
                <h4>staff are friendly</h4>
                <h4>easy to find</h4>
                <h4>parking is available</h4>
                <h4>produce is good quality</h4>
                <h4>whellchair access available</h4>
            </div>
        </div>
    );
}

export default InfoBox;
