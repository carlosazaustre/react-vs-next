import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <h1>
        <Link to="/">Mi Blog React</Link>
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:postId" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
