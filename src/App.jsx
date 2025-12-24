import { Aside } from './components/Aside';
import { Container } from './components/Container';
import { SearchInput } from './components/SearchInput';
import { Main } from './components/Main';
import { DailyBudget } from './components/DailyBudget';

function App() {
    return (
        <Container>
            <Aside />
            <Main>
                <SearchInput />
                <div>
                    <Typography>
                        Hello, Maria
                    </Typography>
                    <Typography>
                        See how are your finances today
                    </Typography>
                </div>
                <section>
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
                            Daily budget available
                        </Card.Header>
                        <Card.Body>
                            $200.00
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
                    <Card>
                        <Card.Header>
                            Daily budget available
                        </Card.Header>
                        <Card.Body>
                            $200.00
                        </Card.Body>
                    </Card>
                </section>
            </Main>
        </Container>
    )
}

export default App;