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
        name: "repetition",
        title: "Repetition",
        path: "/repetition/",
        active: true,
      },
      {
        name: "create repetition",
        title: "Create repetition",
        path: "/repetition/create",
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
        name: "schedule",
        title: "Schedule",
        path: "/schedule/",
        active: true,
      },
      {
        name: "schedule_report",
        title: "Activity Report",
        path: "/schedule/report",
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
    childRoute: [
      {
        name: "word_report",
        title: "Word Report",
        path: "/word/report",
        active: true,
      },
      {
        name: "assignments",
        title: "Word Assignments",
        path: "/word/assignments",
        active: true,
      },
    ],
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
