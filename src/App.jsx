import { NavBar } from "components/layouts";
import { Contact } from "containers";

import { useState } from "react";
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
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="App">
            <NavBar handleClickOpen={handleClickOpen} />
            <Contact open={open} handleClose={handleClose} />
            <Main>
                <Container>
                    <Outlet />
                </Container>
            </Main>
        </div>
    );
}

export default App;
