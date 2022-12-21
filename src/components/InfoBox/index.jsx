import { useEffect, useState, useContext } from 'react';
import styles from './InfoBox.module.css';
import ExpandCollapseArrow from '../ExpandCollapseArrow';
import TextWithIcon from '../TextWithIcon';
import {
    faEnvelope,
    faPhone,
    faGlobe,
} from '@fortawesome/free-solid-svg-icons';
// import useBrowserWidth from '../../hooks/useBrowserWidth';
import cyLogo from '../../assets/community_yard-logo.svg';
import browserWidthContext from '../../context/browserWidthContext';

function InfoBox({ props }) {
    const [expand, setExpand] = useState(false);

    const desktop = useContext(browserWidthContext);

    useEffect(() => {
        if (desktop) {
            setExpand(true);
        } else {
            setExpand(false);
        }
    }, [desktop]);

    return (
        <div
            className={`${styles.infoBox} ${
                expand ? styles.expandedInfoBox : ''
            } ${desktop ? styles.desktopInfoBox : ''}`}
        >
            <div className={styles.preview}>
                <div className={styles.values}>
                    <h4 style={{ fontWeight: 'bold' }}>{props.name}</h4>
                    <h4>
                        {props.firstLine} {props.secondLine}
                    </h4>
                    <h4>{props.town}</h4>
                    <h4>{props.postcode}</h4>
                </div>
                {!desktop && (
                    <ExpandCollapseArrow state={expand} setState={setExpand} />
                )}
                {!desktop && <img className={styles.logoMobile} src={cyLogo} />}
                <div></div>
            </div>

            <div
                className={`${styles.hiddenText} ${
                    expand ? styles.expandedText : ''
                }`}
            >
                <div className={styles.contactDetails}>
                    <TextWithIcon text={props.phone} icon={faPhone} />
                    <TextWithIcon text={props.email} icon={faEnvelope} />
                    <TextWithIcon text={props.website} icon={faGlobe} />
                </div>
                <details className={styles.openingHours}>
                    <summary>opening hours</summary>
                    <OpeningHours />
                </details>
                <div className={styles.features}>
                    {props.parking && <h4>parking is available</h4>}
                    {props.wheelchairAccess && (
                        <h4>wheelchair access available</h4>
                    )}
                    {props.businessDescription && (
                        <h4>{props.businessDescription}</h4>
                    )}
                    <br />
                    <h3>currently wanted items</h3>
                    <ul className={styles.wantedItems}>
                        {props.wantedItems.map((item, index) => {
                            return <li key={index}>{item}</li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default InfoBox;
