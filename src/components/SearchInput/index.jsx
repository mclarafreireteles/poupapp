import { IconSearch } from '../icons'
import styles from './searchinput.module.css'

export const SearchInput = (props) => {
    return (
        <div className={styles.container}>
            <IconSearch />
            <input type="text" className={styles.input} {...props}/>
        </div>
    )
}