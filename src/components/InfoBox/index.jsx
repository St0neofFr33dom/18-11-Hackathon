import { useEffect, useState, useContext } from 'react';
import styles from './InfoBox.module.css';
import ExpandCollapseArrow from '../ExpandCollapseArrow';
import TextWithIcon from '../TextWithIcon';
import {
    faEnvelope,
    faPhone,
    faGlobe,
    faCar,
    faWheelchair,
} from '@fortawesome/free-solid-svg-icons';
// import useBrowserWidth from '../../hooks/useBrowserWidth';
import cyLogo from '../../assets/community_yard-logo.svg';
import browserWidthContext from '../../context/browserWidthContext';
import { OpeningHours } from '../OpeningHours';

import LoginButton from '../../components/LoginButton';
import LogoutButton from '../../components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

function InfoBox({ props }) {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [expand, setExpand] = useState(false);

    const desktop = useContext(browserWidthContext);

    useEffect(() => {
        if (desktop) {
            setExpand(true);
        } else {
            setExpand(false);
        }
    }, [desktop]);

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    console.log(user);

    return (
        <div
            className={`${styles.infoBox} ${
                expand ? styles.expandedInfoBox : ''
            } ${desktop ? styles.desktopInfoBox : ''}`}
        >
            {!isAuthenticated && <LoginButton />}
            {isAuthenticated && <LogoutButton />}

            {/* checks if there are props (i.e a marker has been clicked) then displays the clicked info, otherwise
    displays 'please click on marker (e.g)' - so when page loads there is no locatiob selected and instead gives user prompt
    to click location */}
            {props ? (
                <div>
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
                            <ExpandCollapseArrow
                                state={expand}
                                setState={setExpand}
                            />
                        )}
                        {!desktop && (
                            <img className={styles.logoMobile} src={cyLogo} />
                        )}
                        <div></div>
                    </div>

                    <div
                        className={`${styles.hiddenText} ${
                            expand ? styles.expandedText : ''
                        }`}
                    >
                        <div className={styles.contactDetails}>
                            <TextWithIcon text={props.phone} icon={faPhone} />
                            <TextWithIcon
                                text={props.email}
                                icon={faEnvelope}
                            />
                            <TextWithIcon text={props.website} icon={faGlobe} />
                        </div>
                        <details className={styles.openingHours}>
                            <summary>opening hours</summary>
                            <OpeningHours props={props} />
                        </details>
                        <div className={styles.features}>
                            {props.parking && (
                                <TextWithIcon
                                    text='parking is available'
                                    icon={faCar}
                                />
                            )}
                            {props.wheelchairAccess && (
                                <TextWithIcon
                                    text='wheelchair access available'
                                    icon={faWheelchair}
                                />
                            )}
                            <br />
                            {props.businessDescription && (
                                <div className={styles.descriptionContainer}>
                                    <h4 className={styles.description}>
                                        "{props.businessDescription}"
                                    </h4>
                                </div>
                            )}
                            <br />
                            <h3>currently wanted items :</h3>
                            <ul className={styles.wantedItems}>
                                {props.wantedItems.map((item, index) => {
                                    return <li key={index}>{item}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Click a location for further details</p>
            )}
        </div>
    );
}

export default InfoBox;
