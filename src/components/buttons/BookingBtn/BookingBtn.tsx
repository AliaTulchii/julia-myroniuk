import { BOOKING_BTN_TEXT } from "./BookingBtn.Constants"
import "./booking-btn.scss"


interface BookingBtnProps{
  style?: string;
}
const BookingBtn: React.FC<BookingBtnProps> = ({style}) => {
  return (
    <a href="#" className={`booking-btn ${style}`}>
      {BOOKING_BTN_TEXT}
    </a>
  );
};

export default BookingBtn
