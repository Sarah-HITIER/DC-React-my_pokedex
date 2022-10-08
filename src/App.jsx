import "./App.scss";
import { NavBar } from "containers";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <NavBar />
            <main className="App-main">
                <Outlet />
            </main>
        </div>
    );
}

export default App;
