import { Aside } from './components/Aside';
import { Container } from './components/Container';
import { SearchInput } from './components/SearchInput';
import { Main } from './components/Main';

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
            </Main>
        </Container>
    )
}

export default App;