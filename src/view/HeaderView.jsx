import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <header>
      <Link to={"/home"} className="h-logo">
        <img src="/c-logo.png" alt="" />
        <h3 className="text-white">Coinmania</h3>
      </Link>
      <div className="buttons">
        <NavLink to={"/home"}>Anasayfa</NavLink>
        <NavLink to={"/"}>Kayıt ol</NavLink>
      </div>
    </header>
  );
};

export default HeaderView;
