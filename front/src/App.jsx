import "./App.css";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Registration from "./components/form/register";
import Footer from "./components/footer";
import Login from "./components/form/login";
import Home from "./components/home";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex-fill">
        <Routes>
          <Route
            path="Register"
            element={<Registration redirect="/login"></Registration>}
          ></Route>
          <Route path="login" element={<Login redirect="/"></Login>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
