import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import BlogDetailPage from "./pages/BlogDetailPage";
import BlogCreatePage from "./pages/BlogCreatePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="blog/:id" element={<BlogDetailPage />}></Route>
        <Route path="/add" element={<BlogCreatePage />}></Route>
      </Routes>
    </>
  )
}

export default App


