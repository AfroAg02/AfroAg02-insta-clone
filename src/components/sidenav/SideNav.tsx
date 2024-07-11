'use client'
import {
  FaHome,
  FaSearch,
  FaCompass,
  FaVideo,
  FaEnvelope,
  FaHeart,
  FaPlusCircle,
  FaUserCircle,
  FaBars,
} from "react-icons/fa";
import SideNavLink from "./SideNavLink";

const links = [
  { name: "Inicio", href: "/", Icon: FaHome },
  { name: "Búsqueda", href: "/busqueda", Icon: FaSearch },
  { name: "Explorar", href: "/explorar", Icon: FaCompass },
  { name: "Reels", href: "/reels", Icon: FaVideo },
  { name: "Mensajes", href: "/mensajes", Icon: FaEnvelope },
  { name: "Notificaciones", href: "/notificaciones", Icon: FaHeart },
  { name: "Crear", href: "/crear", Icon: FaPlusCircle },
  { name: "Perfil", href: "/perfil", Icon: FaUserCircle },
  { name: "Más", href: "/mas", Icon: FaBars },
];

const SideNav: React.FC = () => {
  return (
    <nav className="flex flex-col space-y-2 bg-black text-white h-screen px-4 py-16 justify-between">
      <h1 className="text-3xl font-bold mb-6">Instagram</h1>
      {links.map(link => (
        <SideNavLink
          key={link.name}
          href={link.href}
          name={link.name}
          Icon={link.Icon}
        />
      ))}
    </nav>
  );
};

export default SideNav;
