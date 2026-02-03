import BookingBtn from "../buttons/BookingBtn/BookingBtn"
import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav"
import "./header.scss"


const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <Logo />
        <Nav />
        <BookingBtn/>
      </div>      
    </header>
  )
}

export default Header

