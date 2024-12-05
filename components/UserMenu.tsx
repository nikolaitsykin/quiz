import Link from "next/link";
import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";

const UserMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const useMenuHandler = () => {
    setOpenMenu(!openMenu);
  };

  const links = [
    { name: "Stats", path: "/stats" },
    { name: "Leaderboards", path: "/leaderbords" },
  ];
  return (
    <div
      className="text-xl mt-1 cursor-pointer p-2"
      onMouseEnter={useMenuHandler}
      onMouseLeave={useMenuHandler}
    >
      <div className="relative">
        <CgMenuGridO />
        {openMenu && (
          <ul className="absolute top-7 left-[-80px] sm:left-[-60px] z-99 bg-black p-3 rounded-md text-center text-white">
            {links.map((link, index) => (
              <Link   key={index} href={link.path} onClick={useMenuHandler}>
                <li className="hover:underline">{link.name}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
