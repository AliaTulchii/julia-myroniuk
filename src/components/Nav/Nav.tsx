import "./nav.scss";
import { SECTIONS } from "./Nav.Constants";
import { useActiveSection } from "../../hooks/useActiveSection";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useState } from "react";

const linkVariants: Variants = {
  expanded: {
    x: 0,
    opacity: 1,
    pointerEvents: "auto",
    transition: { duration: 0.4, ease: "easeOut" },
  },
  collapsed: (direction: "left" | "right") => ({
    x: direction === "left" ? "60%" : "-60%",
    opacity: 0,
    pointerEvents: "none",
    transition: { duration: 0.35, ease: "easeIn" },
  }),
};

const menuVariants: Variants = {
  hidden: {
    opacity: 0,
    pointerEvents: "none",
  },
  visible: {
    opacity: 1,
    pointerEvents: "auto",
    transition: { duration: 0.4 },
  },
};

const Nav = () => {
  const activeId = useActiveSection(SECTIONS.map((s) => s.id));

  const [collapsed, setCollapsed] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;

      // ⬇️ вниз — ховаємо лінки
      if (current > lastScroll && current > 80) {
        setCollapsed(true);
      }

      // ⬆️ майже верх — показуємо лінки
      if (current < 40) {
        setCollapsed(false);
        setHoverMenu(false);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showLinks = !collapsed || hoverMenu;

  return (
    <nav className="nav">
      {/* LINKS (1 2 4 5) */}
      <div className="nav__links" onMouseLeave={() => setHoverMenu(false)}>
        {SECTIONS.map(({ id, label }, index) => {
          const direction = index < 2 ? "left" : "right";

          return (
            <motion.a
              key={id}
              href={`#${id}`}
              className={`nav__link ${activeId === id ? "active" : ""}`}
              custom={direction}
              variants={linkVariants}
              initial={false}
              animate={showLinks ? "expanded" : "collapsed"}
            >
              {label}
            </motion.a>
          );
        })}
      </div>

      {/* MENU — третя позиція */}
      <motion.div
        className="nav__menu"
        variants={menuVariants}
        initial={false}
        animate={collapsed && !hoverMenu ? "visible" : "hidden"}
        onMouseEnter={() => setHoverMenu(true)}
      >
        Menu
      </motion.div>
    </nav>
  );
};

export default Nav;

// import './nav.scss'
// import { SECTIONS } from "./Nav.Constants";
// import { useActiveSection } from '../../hooks/useActiveSection';

// const Nav = () => {
//   const activeId = useActiveSection(SECTIONS.map((s) => s.id));
//   return (
//     <nav className="nav">
//       {SECTIONS.map(({id, label})=>(
//         <a
//           key={id}
//           href={`#${id}`}
//           className={`nav__link ${activeId === id ? "active" : ""}`}
//         >{label}</a>
//       ))}

//     </nav>
//   );
// }

// export default Nav
