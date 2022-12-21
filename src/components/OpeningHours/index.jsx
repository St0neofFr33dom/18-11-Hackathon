import styles from './OpeningHours.module.css';

export function OpeningHours({ props }) {
    return (
        <div className={styles.container}>
            <div className={styles.weekdays}>
                <div>
                    <p>Mon</p>
                </div>
                <div>
                    <p>Tue</p>
                </div>
                <div>
                    <p>Wed</p>
                </div>
                <div>
                    <p>Thu</p>
                </div>
                <div>
                    <p>Fri</p>
                </div>
                <div>
                    <p>Sat</p>
                </div>
                <div>
                    <p>Sun</p>
                </div>
            </div>
            <div className={styles.hours}>
                <div>
                    {props.openingHours.mon ? (
                        <>
                            <p>{props.openingHours.mon.open}</p>
                            <p>to</p>
                            <p>{props.openingHours.mon.close}</p>
                        </>
                    ) : (
                        <p>Closed</p>
                    )}
                </div>
            </div>
        </div>
    );
}
