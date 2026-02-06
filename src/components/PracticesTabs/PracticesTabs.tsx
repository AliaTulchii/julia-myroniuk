import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRACTICES } from "./PracticesTabs.Constants";
import "./pratices-tabs.scss";
import BookingBtn from "../buttons/BookingBtn/BookingBtn";

const PracticesTabs = () => {
  const [activeId, setActiveId] = useState(PRACTICES[0].id);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const active = PRACTICES.find((p) => p.id === activeId)!;

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="practices-tabs">
      {/* LEFT */}
      <div className="practices-tabs__list">
        {PRACTICES.map((item) => (
          <button
            key={item.id}
            className={`practices-tabs__tab ${
              activeId === item.id ? "active" : ""
            }`}
            onClick={() => setActiveId(item.id)}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            onMouseMove={handleMouseMove}
          >
            <p className="practices-tabs__label">{item.label}</p>

            <div>
              <span className="practices-tabs__index">{item.id}</span>
              <span className="practices-tabs__circle" />
            </div>

            {/* HOVER IMAGE */}
            <AnimatePresence>
              {hoveredId === item.id && (
                <motion.div
                  className="practices-tabs__cursor"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{
                    transform: `translate3d(${cursorPos.x + 15}px, ${
                      cursorPos.y + 25
                    }px, 0)`,
                  }}
                >
                  <img src={item.image} alt={item.label} />
                </motion.div>
              )}
            </AnimatePresence>
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
            <h3 className="practices-tabs__content-title">{active.title}</h3>

            <ul className="practices-tabs__content-list">
              {active.steps.map((step, i) => (
                <li key={i} className="practices-tabs__content-item">
                  {step}
                </li>
              ))}
            </ul>

            <BookingBtn style="practices-tabs__btn" />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PracticesTabs;
