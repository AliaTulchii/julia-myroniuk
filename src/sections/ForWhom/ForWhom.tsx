import { FOR_WHOM_SUBTITLE1, FOR_WHOM_SUBTITLE2, FOR_WHOM_TEXT1, FOR_WHOM_TEXT2, FOR_WHOM_TEXT3, FOR_WHOM_TEXT4, FOR_WHOM_TITLE } from "./ForWhom.Constants";
import './for-whom.scss'

const ForWhom = () => {
  return (
    <section className="for-whom">
      <div className="for-whom__container container">
        <div className="for-whom__titles">
          <div className="for-whom__titles-wrapper">
            <h1 className="for-whom__title">{FOR_WHOM_TITLE}</h1>
            <h2 className="for-whom__subtitle">{FOR_WHOM_SUBTITLE1}</h2>
          </div>
          <h2 className="for-whom__subtitle">{FOR_WHOM_SUBTITLE2}</h2>
        </div>

        <div className="for-whom__texts-wrapper">
          <p className="for-whom__text">{FOR_WHOM_TEXT1}</p>
          <p className="for-whom__text">{FOR_WHOM_TEXT2}</p>
          <p className="for-whom__text">{FOR_WHOM_TEXT3}</p>
          <p className="for-whom__text">{FOR_WHOM_TEXT4}</p>
        </div>
      </div>
    </section>
  );
}

export default ForWhom
