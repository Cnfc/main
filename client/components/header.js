import Link from "next/link";

const Header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: "Sign Up", href: "/auth/signup" },
    !currentUser && { label: "Sign In", href: "/auth/signin" },
    currentUser && { label: "Sign Out", href: "/auth/signout" },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      console.log(label, href);
      return (
        <li className="nav-item" key={href}>
          <Link href={href}>
            <a className="nav-link">{label}</a>
          </Link>
        </li>
      );
    });

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <Link href="/">
          <a className="navbar-brand">GitTix</a>
        </Link>
        <div className="d-flex justify-content-end">
          <ul className="nav d-flex align-items-center">
            {/* {currentUser ? "Sign out" : "Sign in/up"} */}
            <ol>{links}</ol>
            {/* <Link></Link> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
