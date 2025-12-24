import styles from './savingstatus.module.css';
import { IconSavings } from '../icons';

export const SavingStatus = ({ percent }) => {
    return (
        <div className={styles.container}> 
            <p>
                <IconSavings/> Spare
            </p>
        </div>
    )
}