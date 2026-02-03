import PracticesTabs from "../../components/PracticesTabs/PracticesTabs";
import { PRACTICES_TITLE } from "./Practices.Constants";
import './practices.scss'

const Practices = () => {
  return (
    <section className="practices ">
              <div className="container">
                  <h2 className="practices__title">{PRACTICES_TITLE}</h2>
                  <PracticesTabs />
              </div>
    </section>
  );
};

export default Practices;
