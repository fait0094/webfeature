import "./style.css";
import { animate, stagger, inView, scroll, timeline } from "motion";


animate("#cameralens4", { opacity: [1, 0] }, { delay: 2, duration: 0.15 });

animate("#cameralens3", { opacity: [1, 0] }, { delay: 2.5, duration: 0.15 });

animate("#cameralens2", { opacity: [1, 0] }, { delay: 3, duration: 0.15 });

animate(
  "#titel",
  { opacity: [0,1], scale:[0.5, 0.75, 1] },
  {delay:3.5, duration: 1,}
);
