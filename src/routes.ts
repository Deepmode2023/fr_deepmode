import { IRouteWithChildRouteInterface } from "@/interfaces/routes";
import {
  SpacedRepetitionSvg,
  RoadmapSvg,
  ScheduleSvg,
  WordSvg,
} from "@/assets/icons/routes";

export const Routes: Array<IRouteWithChildRouteInterface> = [
  {
    name: "repetition",
    title: "Spaced Repetition",
    path: "/repetition/",
    Icon: SpacedRepetitionSvg,
    active: true,
    childRoute: [
      {
        name: "test1",
        title: "test1",
        path: "/test1/",
        active: true,
      },
      {
        name: "test2",
        title: "test2",
        path: "/test2/",
        active: true,
      },
    ],
  },
  {
    name: "schedule",
    title: "Smart Schedule",
    path: "/schedule/",
    Icon: ScheduleSvg,
    active: true,
    childRoute: [
      {
        name: "test3",
        title: "test3",
        path: "/test3/",
        active: true,
      },
      {
        name: "test4",
        title: "test4",
        path: "/test4/",
        active: true,
      },
    ],
  },
  {
    name: "word",
    title: "Word Master",
    path: "/wordmaster/",
    Icon: WordSvg,
    active: true,
    childRoute: [],
  },
  {
    name: "roadmap",
    title: "Roadmap",
    path: "/roadmap/",
    Icon: RoadmapSvg,
    active: false,
    childRoute: [],
  },
];
