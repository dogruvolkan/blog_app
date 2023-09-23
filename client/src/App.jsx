import BlogDetailPage from "./pages/BlogDetailPage";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="blog/:id" element={<BlogDetailPage />}></Route>
      </Routes>
    </>
  )
}

export default App


