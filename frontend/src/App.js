import Users from "./components/User"
import Home from "./components/Home"
import Register from "./components/Register"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App