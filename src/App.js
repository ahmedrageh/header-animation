import React, { useState } from "react";
import { motion, useViewportScroll } from "framer-motion";
import "./styles.css";

const profiltePicVariants = {
  leaveTop: { scale: 0.6 },
  onTop: { scale: 1 }
};
const nameVariants = {
  leaveTop: { y: 40 },
  onTop: { y: 0 }
};
const descriptionVariants = {
  leaveTop: { y: 40 },
  onTop: { y: 0 }
};
const bioAndButtonVariants = {
  leaveTop: { y: -50, opacity: 0 },
  onTop: { y: 0, opacity: 1 }
};
const elementsTransitions = {
  // x: { type: "linear" }
  ease: "linear"
};
export default function App() {
  const { scrollYProgress } = useViewportScroll();
  const [isScrollingDown, setIsScrollingDown] = useState(0);

  scrollYProgress.onChange((y) => {
    setIsScrollingDown(y > 0.03 ? true : false);
  });

  return (
    <div className="container">
      <header className="profile-header">
        <motion.img
          animate={isScrollingDown ? "leaveTop" : "onTop"}
          variants={profiltePicVariants}
          transition={elementsTransitions}
          src={"https://ca.slack-edge.com/T6NKFUA3W-U6PEH8F1C-e773b3a09559-512"}
          alt="Baby Yoda"
          className="profile-picture"
        />
        <div className="profile-content">
          <motion.h4
            transition={elementsTransitions}
            animate={isScrollingDown ? "leaveTop" : "onTop"}
            variants={nameVariants}
          >
            Thomas Iguchi
          </motion.h4>
          <motion.p
            className="profile-job"
            transition={elementsTransitions}
            animate={isScrollingDown ? "leaveTop" : "onTop"}
            variants={descriptionVariants}
          >
            Engineer
          </motion.p>
          <motion.p
            transition={elementsTransitions}
            animate={isScrollingDown ? "leaveTop" : "onTop"}
            variants={bioAndButtonVariants}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget
            metus non urna elementum iaculis.
          </motion.p>
          <motion.button
            transition={elementsTransitions}
            animate={isScrollingDown ? "leaveTop" : "onTop"}
            variants={bioAndButtonVariants}
          >
            Edit profile
          </motion.button>
        </div>
      </header>
      <main>
        <p>
          Etiam nisl libero, aliquet dictum nisi eget, ultrices posuere arcu.
          Nulla condimentum nisi massa, nec vulputate nisl sagittis vel. Quisque
          et tincidunt massa, at feugiat odio. Nullam molestie magna et odio
          pulvinar accumsan. Vestibulum vulputate sagittis sapien ac faucibus.
          Donec tristique sapien orci, et placerat eros eleifend at. Fusce dolor
          est, rhoncus quis lacus et, varius bibendum magna. Duis vitae mauris
          magna. Etiam suscipit, tortor sit amet laoreet condimentum, leo augue
          lacinia erat, at molestie ex ligula sit amet dolor. Nam feugiat tellus
          ut lacinia sodales. In quam risus, imperdiet vitae tellus nec,
          vulputate interdum arcu. Morbi ligula mi, tristique ac pellentesque a,
          porta mollis arcu. Donec eget massa ac ex tempus efficitur eget quis
          turpis.
        </p>
        <p>
          Etiam nisl libero, aliquet dictum nisi eget, ultrices posuere arcu.
          Nulla condimentum nisi massa, nec vulputate nisl sagittis vel. Quisque
          et tincidunt massa, at feugiat odio. Nullam molestie magna et odio
          pulvinar accumsan. Vestibulum vulputate sagittis sapien ac faucibus.
          Donec tristique sapien orci, et placerat eros eleifend at. Fusce dolor
          est, rhoncus quis lacus et, varius bibendum magna. Duis vitae mauris
          magna. Etiam suscipit, tortor sit amet laoreet condimentum, leo augue
          lacinia erat, at molestie ex ligula sit amet dolor. Nam feugiat tellus
          ut lacinia sodales. In quam risus, imperdiet vitae tellus nec,
          vulputate interdum arcu. Morbi ligula mi, tristique ac pellentesque a,
          porta mollis arcu. Donec eget massa ac ex tempus efficitur eget quis
          turpis.
        </p>
        <p>
          Etiam nisl libero, aliquet dictum nisi eget, ultrices posuere arcu.
          Nulla condimentum nisi massa, nec vulputate nisl sagittis vel. Quisque
          et tincidunt massa, at feugiat odio. Nullam molestie magna et odio
          pulvinar accumsan. Vestibulum vulputate sagittis sapien ac faucibus.
          Donec tristique sapien orci, et placerat eros eleifend at. Fusce dolor
          est, rhoncus quis lacus et, varius bibendum magna. Duis vitae mauris
          magna. Etiam suscipit, tortor sit amet laoreet condimentum, leo augue
          lacinia erat, at molestie ex ligula sit amet dolor. Nam feugiat tellus
          ut lacinia sodales. In quam risus, imperdiet vitae tellus nec,
          vulputate interdum arcu. Morbi ligula mi, tristique ac pellentesque a,
          porta mollis arcu. Donec eget massa ac ex tempus efficitur eget quis
          turpis.
        </p>
        <p>
          Etiam nisl libero, aliquet dictum nisi eget, ultrices posuere arcu.
          Nulla condimentum nisi massa, nec vulputate nisl sagittis vel. Quisque
          et tincidunt massa, at feugiat odio. Nullam molestie magna et odio
          pulvinar accumsan. Vestibulum vulputate sagittis sapien ac faucibus.
          Donec tristique sapien orci, et placerat eros eleifend at. Fusce dolor
          est, rhoncus quis lacus et, varius bibendum magna. Duis vitae mauris
          magna. Etiam suscipit, tortor sit amet laoreet condimentum, leo augue
          lacinia erat, at molestie ex ligula sit amet dolor. Nam feugiat tellus
          ut lacinia sodales. In quam risus, imperdiet vitae tellus nec,
          vulputate interdum arcu. Morbi ligula mi, tristique ac pellentesque a,
          porta mollis arcu. Donec eget massa ac ex tempus efficitur eget quis
          turpis.
        </p>
        <p>
          Etiam nisl libero, aliquet dictum nisi eget, ultrices posuere arcu.
          Nulla condimentum nisi massa, nec vulputate nisl sagittis vel. Quisque
          et tincidunt massa, at feugiat odio. Nullam molestie magna et odio
          pulvinar accumsan. Vestibulum vulputate sagittis sapien ac faucibus.
          Donec tristique sapien orci, et placerat eros eleifend at. Fusce dolor
          est, rhoncus quis lacus et, varius bibendum magna. Duis vitae mauris
          magna. Etiam suscipit, tortor sit amet laoreet condimentum, leo augue
          lacinia erat, at molestie ex ligula sit amet dolor. Nam feugiat tellus
          ut lacinia sodales. In quam risus, imperdiet vitae tellus nec,
          vulputate interdum arcu. Morbi ligula mi, tristique ac pellentesque a,
          porta mollis arcu. Donec eget massa ac ex tempus efficitur eget quis
          turpis.
        </p>
        <p>
          Etiam nisl libero, aliquet dictum nisi eget, ultrices posuere arcu.
          Nulla condimentum nisi massa, nec vulputate nisl sagittis vel. Quisque
          et tincidunt massa, at feugiat odio. Nullam molestie magna et odio
          pulvinar accumsan. Vestibulum vulputate sagittis sapien ac faucibus.
          Donec tristique sapien orci, et placerat eros eleifend at. Fusce dolor
          est, rhoncus quis lacus et, varius bibendum magna. Duis vitae mauris
          magna. Etiam suscipit, tortor sit amet laoreet condimentum, leo augue
          lacinia erat, at molestie ex ligula sit amet dolor. Nam feugiat tellus
          ut lacinia sodales. In quam risus, imperdiet vitae tellus nec,
          vulputate interdum arcu. Morbi ligula mi, tristique ac pellentesque a,
          porta mollis arcu. Donec eget massa ac ex tempus efficitur eget quis
          turpis.
        </p>
        <p>
          Etiam nisl libero, aliquet dictum nisi eget, ultrices posuere arcu.
          Nulla condimentum nisi massa, nec vulputate nisl sagittis vel. Quisque
          et tincidunt massa, at feugiat odio. Nullam molestie magna et odio
          pulvinar accumsan. Vestibulum vulputate sagittis sapien ac faucibus.
          Donec tristique sapien orci, et placerat eros eleifend at. Fusce dolor
          est, rhoncus quis lacus et, varius bibendum magna. Duis vitae mauris
          magna. Etiam suscipit, tortor sit amet laoreet condimentum, leo augue
          lacinia erat, at molestie ex ligula sit amet dolor. Nam feugiat tellus
          ut lacinia sodales. In quam risus, imperdiet vitae tellus nec,
          vulputate interdum arcu. Morbi ligula mi, tristique ac pellentesque a,
          porta mollis arcu. Donec eget massa ac ex tempus efficitur eget quis
          turpis.
        </p>
      </main>
    </div>
  );
}
