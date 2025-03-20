import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/dashboard" className="text-xl font-bold">
          Finance Tracker
        </Link>
        <div>
          <Link to="/dashboard" className="mr-4 hover:underline">
            Dashboard
          </Link>
          <Link to="/expenses" className="mr-4 hover:underline">
            Expenses
          </Link>
          <Link to="/" className="hover:underline">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
