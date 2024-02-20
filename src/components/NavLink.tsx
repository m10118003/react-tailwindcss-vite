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
  >
    {children}
  </Link>
);

export default NavLink;
