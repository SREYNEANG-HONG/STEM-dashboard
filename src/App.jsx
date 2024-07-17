import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Article from "./pages/Article";
// import Forms from "./pages/Setting";
import Forms from "./pages/Setting";
import Logout from "./pages/LogOut";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="article" element={<Article />} />
          <Route path="setting" element={<Forms/>} />
          <Route path="logout" element={<Logout/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
