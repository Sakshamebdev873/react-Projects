import { BsBagFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css"
import { useGlobalContext } from "./Context";
const Navbar = () => {
  const {amount} =useGlobalContext();
  return (
    <>
      <nav className="Navbar">
        <div className="nav-header">
          <article className="nav-center">
            <h1>Cart Summary</h1>
          </article>
          <div className="box">
            <button type="button" className="btn btn-primary position-relative">
              <BsBagFill/>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {amount}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
