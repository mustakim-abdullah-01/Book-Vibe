import "./App.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <>
      <h1>Book Vibe</h1>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </>
  );
}

export default App;
