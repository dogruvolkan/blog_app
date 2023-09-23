import { BlogDetail } from "./components/BlogDetail";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="blog/:id" element={<BlogDetail />}></Route>
      </Routes>
    </>
  )
}

export default App


