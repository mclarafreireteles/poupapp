import styles from './accounts.module.css'
import { Button } from '../Button'
import { Account } from '../Account'
import { IconWallet } from '../icons'
import { List } from '../List'
import { ListItem } from '../ListItem'
import { accounts } from '../../data/mockData'

export const Accounts = () => {
    return (
        <div className={styles.accounts}>
            <List>
                {accounts.map(ac => (
                    <ListItem key={ac.bank}>
                        <Account account={ac}/>
                    </ListItem>
                ))}
            </List>
            <div className={styles.divider}/>
            <div className={styles.actions}>
                <Button>
                    <IconWallet/> Add Account
                </Button>
            </div>
        </div>
    )
}