import { Link, NavLink } from "react-router-dom";
import { TbDoorExit } from "react-icons/tb";
import { FaCartPlus } from "react-icons/fa";

import { ShowOnLogin, ShowOnLogout } from "@/components/HiddenLink";
import AdminOnlyRoute from "@/components/AdminOnlyRoute";
import { AdminOnlyLink } from "@/components/AdminOnlyRoute";

const HeaderDesktop = ({ logout, activeLink, displayName }) => {
  return (
    <>
      <div className="hidden md:flex justify-between mx- gap-8">
        <ul className="flex gap-6  items-center justify-center">
          <AdminOnlyLink>
            <li>
              <Link to="admin/all-products">Admin</Link>
            </li>
          </AdminOnlyLink>

          <li className="hover:text-primary hover:scale-105 duration-400">
            <NavLink className={activeLink} to="/">
              Inicio
            </NavLink>
          </li>
          <li className="hover:text-primary hover:scale-105 duration-400">
            <NavLink className={activeLink} to="/faq">
              FAQ
            </NavLink>
          </li>
          {/* <li className="hover:text-primary hover:scale-105 duration-400">
            <NavLink className={activeLink} to="/gallery">
              Galeria
            </NavLink>
          </li> */}
        </ul>
        <ul className="flex gap-6 items-center justify-center">
          <ShowOnLogout>
            <li className="hover:text-primary hover:scale-105 duration-400">
              <NavLink className={activeLink} to="/login">
                Iniciar Sesion
              </NavLink>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li className="hover:text-primary hover:scale-105 duration-400">
              <NavLink className={activeLink} to="/register">
                Registrate
              </NavLink>
            </li>
          </ShowOnLogout>

          <ShowOnLogin>
            <li className="hover:text-primary hover:scale-105 duration-400">
              <div className="flex items-center justify-center gap-1">
                Hola,{displayName}
                <FaCartPlus className="text-3xl" />
              </div>
            </li>
          </ShowOnLogin>
          <ShowOnLogin>
            <li className="hover:text-primary hover:scale-105 duration-400">
              <NavLink onClick={logout}>
                <div className="flex items-center justify-center gap-1">
                  Salir
                  <TbDoorExit className="text-3xl" />
                </div>
              </NavLink>
            </li>
          </ShowOnLogin>
        </ul>
      </div>
    </>
  );
};

export default HeaderDesktop;
