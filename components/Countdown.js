import React, {useMemo} from "react";


const Countdown = ({ prev, count, label }) => {

    const padPrev = useMemo(() => {
        return String(prev).padStart(2, '0');
    }, [prev]);

    const padCount = useMemo(() => {
        return String(count).padStart(2, '0');
    }, [count]);

    return (
        <div className={styles.countdown}>
            <div className={styles.countdownBlockBackface}>
                <div className={styles.countdownBlock}>
                    <div className={cn(styles.top, styles.flip)}>
                        {padPrev}
                    </div>
                    <div className={styles.top}>
                        {padCount}
                    </div>
                    <div className={styles.bottom}>
                        {padPrev}
                    </div>
                    <div className={cn(styles.bottom, styles.flip)}>
                        {padCount}
                    </div>
                    <div className={styles.countdownBlockOverlay}>
                    </div>
                    <div className={styles.countdownBlockSide}>
                    </div>
                </div>
            </div>
            <p className={styles.label}>
            <Image src="/logo.png" width={120} height={70}/>
            </p>
        </div>
    );
};

export default Countdown;