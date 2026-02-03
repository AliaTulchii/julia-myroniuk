// import { motion, AnimatePresence, type Variants } from "framer-motion";
// import "./mobile-menu.scss";
// import logoWhite from "/assets/images/logo/logo-white.png";
// import { useEffect} from "react";
// import LanguageSelect from "../LangSelect/LangSelect";
// import { NavLink, useLocation } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import ArrowDiagonal from "../../icons/ArrowDiagonal";
// import man from "/assets/images/mobile-menu/man.webp"
// import IconClose from "../../icons/IconClose";
// const menuVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 0.25,
//       ease: "easeOut", 
//     },
//   },
//   exit: {
//     opacity: 0,
//     transition: {
//       duration: 0.2,
//       ease: "easeIn",
//     },
//   },
// };

// const MobileMenu = ({
//   isOpen,
//   onClose
// }: {
//   isOpen: boolean;
//   onClose: () => void;
//   themeColor?: "light" | "dark";
// }) => {
//   const { t } = useTranslation("mobileMenu, contact, header");
//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);

//   const handleClick = () => {
//     window.scrollTo(0, 0);
//     onClose();
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.nav
//           className="mobile-menu"
//           initial="hidden"
//           animate={isOpen ? "visible" : "hidden"}
//           exit="exit"
//           variants={menuVariants}
//         >
//           <div className="mobile-menu__header container">
//             <a href="/" className="mobile-link">
//               <img src={logoWhite} alt="logo" className="mobile-logo" />
//             </a>
//             <div className="mobile-menu__btns">
//               <LanguageSelect
//                 styles="mobile-menu__lang"
//                 themeColor="light"
//                 mobMenuStyle="mobile-menu-style"
//               />
//               <button className="mobile-menu__close" onClick={onClose}>
//                 <IconClose/>
//               </button>
//             </div>
//           </div>

//           <div className="container">
//             <nav className="mobile-menu__nav">
//               <NavLink
//                 to="/"
//                 className="mobile-menu__link"
//                 onClick={handleClick}
//               >
//                 <p className="mobile-menu__link-text">
//                   {t("mobileMenu.nav.home")}
//                 </p>
//                 <div className="mobile-menu__arrow">
//                   <ArrowDiagonal />
//                 </div>
//               </NavLink>
//               <NavLink
//                 to="/prices"
//                 className="mobile-menu__link"
//                 onClick={handleClick}
//               >
//                 <p className="mobile-menu__link-text">
//                   {t("mobileMenu.nav.prices")}
//                 </p>
//                 <div className="mobile-menu__arrow">
//                   <ArrowDiagonal />
//                 </div>
//               </NavLink>
//               <NavLink
//                 to="/directions"
//                 className="mobile-menu__link"
//                 onClick={handleClick}
//               >
//                 <p className="mobile-menu__link-text">
//                   {t("mobileMenu.nav.directions")}
//                 </p>
//                 <div className="mobile-menu__arrow">
//                   <ArrowDiagonal />
//                 </div>
//               </NavLink>
//               <NavLink
//                 to="/contact"
//                 className="mobile-menu__link"
//                 onClick={handleClick}
//               >
//                 <p className="mobile-menu__link-text">
//                   {t("mobileMenu.nav.contact")}
//                 </p>
//                 <div className="mobile-menu__arrow">
//                   <ArrowDiagonal />
//                 </div>
//               </NavLink>
//             </nav>

//             <img src={man} alt="man" className="mobile-menu__img" />

//             <div className="mobile-menu__contacts-box">
//               <div className="mobile-menu__contact">
//                 <h2 className="mobile-menu__contact-title">
//                   {t("contact.info.item1.title")}
//                 </h2>
//                 <p className="mobile-menu__contact-text">
//                   {t("contact.info.item1.text")}
//                 </p>
//               </div>
//               <div className="mobile-menu__hours">
//                 <h2 className="mobile-menu__hours-title">
//                   {t("contact.info.item3.title")}
//                 </h2>
//                 <p className="mobile-menu__hours-text">
//                   {t("contact.info.item3.text")}
//                 </p>
//               </div>
//             </div>

//             <a
//               href="tel:+7(708)5029704"
//               className="mobile-menu__connect-link"
//               onClick={() => window.scrollTo(0, 0)}
//             >
//               <div className="mobile-menu__connect-arrow">
//                 <ArrowDiagonal />
//               </div>
//               <p className="mobile-menu__connect-link-text">
//                 {t("header.conectBtn")}
//               </p>
//             </a>
//           </div>
//         </motion.nav>
//       )}
//     </AnimatePresence>
//   );
// };

// export default MobileMenu;
