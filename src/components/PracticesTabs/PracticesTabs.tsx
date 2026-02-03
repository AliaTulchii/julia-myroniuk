import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRACTICES } from "./PracticesTabs.Constants";
import "./pratices-tabs.scss";

const PracticesTabs = () => {
  const [activeId, setActiveId] = useState(PRACTICES[0].id);
  const active = PRACTICES.find((p) => p.id === activeId)!;

  return (
    <section className="practices-tabs">
      {/* LEFT */}
      <div className="practices-tabs__list">
        {PRACTICES.map((item, index) => (
          <button
            key={item.id}
            className={`practices-tabs__tab ${activeId === item.id ? "active" : ""}`}
            onClick={() => setActiveId(item.id)}
          >
            <span className="index">{String(index + 1).padStart(2, "0")}</span>
            {item.label}
          </button>
        ))}
      </div>

      {/* RIGHT */}
      <div className="practices-tabs__content">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <img src={active.image} alt={active.label} />
            <h3>{active.title}</h3>

            <ol>
              {active.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>

            <button className="btn">Book a session</button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PracticesTabs;
