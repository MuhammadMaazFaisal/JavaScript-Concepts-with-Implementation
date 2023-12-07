import "./App.css";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import Sidebar from "./layouts/Sidebar";
// rfc for react functional component
function App() {
  return (
    <>
     
     <div className="row max-view-height">
      <div className="sidebar col-2 max-view-height">
        <Sidebar />
      </div>
      <div className="col-10 max-view-height" >
      <Navbar title="React App" tab1="Home" />
      </div>
     </div>
     <Footer />
    </>
  );
}
 
export default App;

