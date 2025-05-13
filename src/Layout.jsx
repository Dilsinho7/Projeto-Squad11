import Navbar from './Navbar';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Navbar />

      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Topbar />
        
        <main style={{ flexGrow: 1, padding: "1rem", backgroundColor: "#f0f2fa" }}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout;

