import { Outlet } from "react-router";
import NavBar from "../Navbar/NavBar";

const App = () => {
  return (
    <div className="mx-auto max-w-11/12">
      <div className="">
        {/* Constant NavBar */}
        <nav>
          <NavBar />
        </nav>

        {/* Changable Outlet section contains Homepage, Book List, Reading List, Error page */}

        <main className="mt-14 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
