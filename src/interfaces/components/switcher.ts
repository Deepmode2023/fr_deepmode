export interface ISwitcherBasicProps {
  value: {
    right: { text: string; key: string };
    left: { text: string; key: string };
  };
  width?: number;
  onSwitchClick: (key: string) => void;
  active?: "right" | "left";
  classes?: ClassesSwitcherType;
}

export type ClassesSwitcherType = {
  container?: string;
  switcher?: string;
};
