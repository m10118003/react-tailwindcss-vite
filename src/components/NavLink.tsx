import { Link } from "react-router-dom";

// 把 NavLink組件化
const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    className="link-effect m-2 cursor-crosshair rounded p-4 font-black hover:rounded hover:bg-sky-200 hover:text-indigo-800"
  >
    {children}
  </Link>
);

export default NavLink;
