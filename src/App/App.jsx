import { Outlet } from "react-router";
import NavBar from "../Components/Navbar/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default App;
