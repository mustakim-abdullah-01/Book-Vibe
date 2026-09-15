import { Outlet } from "react-router";
import NavBar from "../Components/Navbar/NavBar";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-292.5">
        <NavBar />

        <div className="mt-14 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
