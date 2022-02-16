import unifyPage from "../assests/tutorials/unify.PNG"
import collegeScheduler from "../assests/tutorials/collegeScheduler.PNG";

let progress = localStorage.getItem("pawsTutorialProgress");

export const tutorials = [
  {
    name: "Paws Tutorial",
    subHeader: "Go from Unify to Paws",
    description: "Try this walk through demo and try to get from Unify to Paws!",
    media: unifyPage,
    alt: "Unify Page",
    disabled: false,
    progress: progress
  },
  {
    name: "Registering With College Scheduler",
    subHeader: "Tutorial 2 sub header",
    description: "Coming Soon!",
    media: collegeScheduler,
    alt: "Coming Soon",
    disabled: true,
    progress: 0
  },
  {
    name: "Registering with Add/Drop",
    subHeader: "Tutorial 3 sub header",
    description: "Coming soon!",
    media: unifyPage,
    alt: "Coming Soon",
    disabled: true,
    progress: 0
  },
  {
    name: "Registering with the New Format",
    subHeader: "Tutorial 4 sub header",
    description: "Coming soon!",
    media: unifyPage,
    alt: "Coming Soon",
    disabled: true,
    progress: 0
  },
];