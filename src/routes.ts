import {
  IRouteWithChildRouteInterface,
  IRouteChild,
} from "@/interfaces/routes";
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
    protected: true,
    childRoute: [
      {
        name: "repetition",
        title: "Repetition",
        path: "/repetition/",
        active: true,
        protected: true,
      },
      {
        name: "create repetition",
        title: "Create repetition",
        path: "/repetition/create",
        active: true,
        protected: true,
      },
    ],
  },
  {
    name: "schedule",
    title: "Smart Schedule",
    path: "/schedule/",
    Icon: ScheduleSvg,
    protected: true,
    active: true,
    childRoute: [
      {
        name: "schedule",
        title: "Schedule",
        path: "/schedule/",
        protected: true,
        active: true,
      },
      {
        name: "schedule_report",
        title: "Activity Report",
        path: "/schedule/report",
        protected: true,
        active: true,
      },
    ],
  },
  {
    name: "word",
    title: "Word Master",
    path: "/wordmaster/",
    protected: true,
    Icon: WordSvg,
    active: true,
    childRoute: [
      {
        name: "word_report",
        title: "Word Report",
        protected: true,
        path: "/word/report",
        active: true,
      },
      {
        name: "assignments",
        protected: true,
        title: "Word Assignments",
        path: "/word/assignments",
        active: true,
      },
    ],
  },
  {
    name: "roadmap",
    protected: true,
    title: "Roadmap",
    path: "/roadmap/",
    Icon: RoadmapSvg,
    active: false,
    childRoute: [],
  },
];

const ExactMatchPathInRouteHelpers = (
  matcherObj: Record<string, any> & { path: string },
  exactMatch: boolean,
  path: string
): boolean => {
  let matcherResult = false;
  if (exactMatch) {
    matcherResult =
      matcherObj.path.replaceAll(path, "").replaceAll("/", "").length === 0;
  } else {
    matcherResult = matcherObj.path.includes(path);
  }

  return matcherResult;
};

const GetterChunkRouteFromRoutesByPath = (
  path: string | null,
  exactMatch: boolean = true
): Array<IRouteChild> => {
  if (path) {
    return Routes.reduce((acc, route) => {
      const childRoutes = route.childRoute;
      if (childRoutes.length > 0) {
        return [
          ...acc,
          ...childRoutes.filter((child) =>
            ExactMatchPathInRouteHelpers(child, exactMatch, path)
          ),
        ];
      }

      return acc;
    }, [] as Array<IRouteChild>);
  }
  return [];
};

export { ExactMatchPathInRouteHelpers, GetterChunkRouteFromRoutesByPath };
