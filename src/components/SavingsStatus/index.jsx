import styles from './savingstatus.module.css';
import { ProgressBar } from '../ProgressBar';
import { IconSavings } from '../icons';

export const SavingStatus = ({ percent }) => {
    return (
        <div className={styles.container}> 
            <p>
                <IconSavings/> Spare
            </p>
            <ProgressBar percent={percent} />
        </div>
    )
}