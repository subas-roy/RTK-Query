import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <div className="max-w-7xl px-5 mx-auto">
      <div className="flex gap-6">
        <div>
          <Link to={"/"}>
            <h1 className="font-bold">TaskMaster</h1>
          </Link>
        </div>
        <div className="flex gap-6">
          <Link to="/">Tasks</Link>
          <Link to="/users">Users</Link>
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
