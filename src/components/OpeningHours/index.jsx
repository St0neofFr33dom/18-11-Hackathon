import styles from './OpeningHours.module.css';

export function OpeningHours({ props }) {

    const entries = Object.entries(props.openingHours)

    return (
        <div className={styles.container}>

            {entries.map((entry, index)=>{
                if (entry[1] === false){
                    return (
                        <div className={styles.column} key={index}>
                            <div className={styles.day}>
                                <p>{entry[0]}</p>
                            </div>
                            <div className={styles.time}>
                                <p>closed</p>
                            </div>
                        </div>
                    )
                } else{
                    return (
                        <div className={styles.column} key={index}>
                            <div className={styles.day}>
                                <p>{entry[0]}</p>
                            </div>
                            <div className={styles.time}>
                                <p>{entry[1]['open']}</p>
                                <p>to</p>
                                <p>{entry[1]['close']}</p>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    );
}
