import { NavBar } from "containers";
import { styled, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const Main = styled("main")(({ theme }) => ({
    backgroundColor: theme.palette.background.main,
    minHeight: "100vh",
    padding: "80px 0",
    display: "flex",
    flexDirection: "column",
    color: theme.palette.text.main,
    fontSize: theme.palette.fontSize
}));

function App() {
    return (
        <div className="App">
            <NavBar />
            <Main>
                <Container>
                    <Outlet />
                </Container>
            </Main>
        </div>
    );
}

export default App;
