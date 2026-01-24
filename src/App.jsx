import { Aside } from './components/Aside';
import { Container } from './components/Container';
import { SearchInput } from './components/SearchInput';
import { Main } from './components/Main';
import { DailyBudget } from './components/DailyBudget';
import { SavingStatus } from './components/SavingsStatus';
import { Typography } from './components/Typography';
import { Transactions } from './components/Transactions';
import Card from './components/Card'
import styles from './app.module.css'

function App() {
    return (
        <Container>
            <Aside />
            <Main>
                <div className={styles.container}>
                    <SearchInput />
                    <div>
                        <Typography>
                            Hello, Maria
                        </Typography>
                        <Typography>
                            See how your finances are today
                        </Typography>
                    </div>
                    <section className={styles.grid}>
                        <Card>
                            <Card.Header>
                                Daily budget available
                            </Card.Header>
                            <Card.Body>
                                <DailyBudget value={200}/>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                Finance goal progress
                            </Card.Header>
                            <Card.Body>
                                <SavingStatus percent={40}/>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                Financial movement
                            </Card.Header>
                            <Card.Body>
                                <Transactions/>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                Daily budget available
                            </Card.Header>
                            <Card.Body>
                                $200.00
                            </Card.Body>
                        </Card>
                    </section>
                </div>
            </Main>
        </Container>
    )
}

export default App;