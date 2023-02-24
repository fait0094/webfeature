import "./style.css";
import { animate, stagger, inView, scroll, timeline } from "motion";


// hero animations//
// camera lens //
animate("#cameralens4", { opacity: [1, 0] }, { delay: 2, duration: 0.15 });

animate("#cameralens3", { opacity: [1, 0] }, { delay: 2.5, duration: 0.15 });

animate("#cameralens2", { opacity: [1, 0] }, { delay: 3, duration: 0.15 });

// h1 titel //
animate(
  "#titel",
  { opacity: [0, 1], scale: [0.5, 0.75, 1] },
  { delay: 3.5, duration: 1 }
);

//blitz//
animate(".flash", { opacity: [0, 1, 0] }, { delay: 3.51, duration: 1 });

//scroll icon
animate("#scrollicon", { opacity: [0, 1] }, { delay: 3.51, duration: 1 });




const items = document.querySelectorAll("#horisontalliste li");
scroll(
  animate("#horisontalliste", {
    transform: ["none", `translateX(-${items.length - 1}00vw)`],
  }),
  { target: document.querySelector("#horisontalscrollsection") }
);

const items_2 = document.querySelectorAll("#horisontalliste_2 li");
scroll(
  animate("#horisontalliste_2", {
    transform: ["none", `translateX(-${items_2.length - 1}00vw)`],
  }),
  { target: document.querySelector("#horisontalscrollsection_2") }
);

const items_3 = document.querySelectorAll("#horisontalliste_3 li");
scroll(
  animate("#horisontalliste_3", {
    transform: ["none", `translateX(-${items_3.length - 1}00vw)`],
  }),
  { target: document.querySelector("#horisontalscrollsection_3") }
);

inView(".contentinview1", () => {
  animate(".contentinview1", { x: [-1000, 0] }, { delay: 0.75, duration: 1.5 });
});

inView(".contentinview2", () => {
  animate(".contentinview2", { x: [1000, 0] }, { delay: 0.75, duration: 1.5 });
});

inView(".contentinview3", () => {
  animate(".contentinview3", { x: [-1000, 0] }, { delay: 0.75, duration: 1.5 });
});

inView(
  ".citat",
  animate(
    ".citat",
    { opacity: [0, 1] },
    {
      delay: stagger(1.5, { start: 2  }),
    }
  )
);