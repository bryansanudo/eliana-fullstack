import { Link } from "react-router-dom";

import HeaderDesktop from "@/components/header/HeaderDesktop";
import HeaderMobile from "@/components/header/HeaderMobile";

import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from "@/redux/slice/authSlice";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/configFirebase";

const activeLink = ({ isActive }) =>
  isActive
    ? " relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-white"
    : ``;

const Header = () => {
  const [displayName, setDisplayName] = useState("");
  const dispatch = useDispatch();

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Cierre de sesion exitoso");
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName == null) {
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayName]);

  return (
    <>
      <header className="bg-[#050816] w-full text-white overflow-hidden fixed z-40">
        <div className="w-full h-24 max-w-[1200px] mx-auto p-4 flex justify-between items-center ">
          <div className="text-white w-[20%] text-lg">
            <Link to="/">
              <img
                src="/logo.png"
                alt=""
                className="rounded-full object-cover hover:scale-105 transition-300  md:h-20 md:w-20 h-16 w-16  duration-300 shadow-md   shadow-[#ffcdc2]"
              />
            </Link>
          </div>

          <nav className="w-[80%] text-lg ">
            {/* desktop */}

            <HeaderDesktop
              activeLink={activeLink}
              displayName={displayName}
              logout={logout}
            />
            <HeaderMobile
              activeLink={activeLink}
              displayName={displayName}
              logout={logout}
            />

            {/* mobile */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
