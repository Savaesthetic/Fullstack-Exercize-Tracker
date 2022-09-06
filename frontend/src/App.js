import { Routes, Route } from "react-router-dom"
import Users from "./components/User"
import Home from "./components/Home"
import Register from "./components/Register"
import Layout from "./components/Layout/Layout"
import WorkoutList from "./components/Workout/WorkoutList"

import { useEffect } from "react"
import { setUserState } from "./redux/slices/user"
import { useDispatch } from 'react-redux';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserState());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="register" element={<Register />} />
        <Route path="public" element={<WorkoutList />} />
      </Route>
    </Routes>
  )
}

export default App