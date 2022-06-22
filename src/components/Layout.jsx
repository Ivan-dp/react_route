import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
      </header>

      <main className="content">
        <Outlet />
      </main>

      <footer>2022</footer>
    </>
  );
};

export { Layout };
