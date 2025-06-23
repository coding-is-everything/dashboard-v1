import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/Layout/Layout';
import BoardPage from './pages/Board/Board';
import Dashboard from './pages/Dashboard/Dashboard';
import Calendar from "./pages/Calendar/Calendar";

const App = () => {
  return <div id="dashboard">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="board" element={<BoardPage />} />
          <Route path="users" element={<h1>Users</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
};

export default App;