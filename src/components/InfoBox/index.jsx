import { useState } from 'react';
import './InfoBox.css';
import ExpandCollapseArrow from '../ExpandCollapseArrow';
import TextWithIcon from '../TextWithIcon';
import {faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';


function InfoBox({ props }) {
    const [expand, setExpand] = useState(false);
    return (
        <div className={`InfoBox ${expand ? `expandedInfoBox` : ''}`}>
            <div className='preview'>
                <div className='values'>
                    <h4 style={{ fontWeight: 'bold' }}>{props.name}</h4>
                    <h4>
                        {props.firstLine} {props.secondLine}
                    </h4>
                    <h4>{props.town}</h4>
                    <h4>{props.postcode}</h4>
                </div>
                <ExpandCollapseArrow state={expand} setState={setExpand} />
                <div></div>
            </div>
            <div className='contact-details'>
            <TextWithIcon text={props.phone} icon={faPhone} />
            <TextWithIcon text={props.email} icon={faEnvelope}/>
            <TextWithIcon text={props.website} icon={faGlobe}/>
            </div>
            <div className='survey'>
                <h4>have you visited {props.name}?</h4>
                <h4>check all that apply</h4>
                <br />
                <h4>opening hours</h4>
                <h4>staff are friendly</h4>
                <h4>easy to find</h4>
                <h4>parking is available</h4>
                <h4>produce is good quality</h4>
                <h4>wheelchair access available</h4>
            </div>
        </div>
    );
}

export default InfoBox;
