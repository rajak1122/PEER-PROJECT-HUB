import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import CreateProject from './pages/CreateProject'
import EditProject from './pages/EditProject'
import Profile from './pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/projects/new" element={<CreateProject />} />
        <Route path="/projects/:projectId/edit" element={<EditProject />} />
        <Route path="/profile/:userId" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
