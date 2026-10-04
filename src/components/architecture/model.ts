import { productNames } from "../../data/products";

export type SensorId = "concrete" | "timber" | "temperature" | "control";
export type NodeId = SensorId | "gateway" | "cloud" | "dashboard";
type SourceId = Exclude<NodeId, "dashboard">;
export type Position = { x: number; y: number; scale?: number };

export const sensors: { id: SensorId; label: string; icon: string }[] = [
  {
    id: "concrete",
    label: productNames.concrete,
    icon: "M12 2C9 7 4 11 4 16a8 8 0 0 0 16 0c0-5-5-9-8-14Z",
  },
  { id: "timber", label: productNames.timber, icon: "m12 2-6 8h3l-5 7h6v5h4v-5h6l-5-7h3Z" },
  {
    id: "temperature",
    label: productNames.temperature,
    icon: "M9 14.5V5a3 3 0 0 1 6 0v9.5a5 5 0 1 1-6 0ZM12 8v9",
  },
  {
    id: "control",
    label: productNames.control,
    icon: "M8 2v7m8-7v7M6 9h12v5a6 6 0 0 1-12 0V9Zm6 11v3",
  },
];

// One topology for both layouts. Only coordinates change on small screens.
export const connections: { from: SourceId; to: NodeId; delay: number }[] = [
  { from: "temperature", to: "gateway", delay: 180 },
  { from: "control", to: "gateway", delay: 230 },
  { from: "concrete", to: "cloud", delay: 500 },
  { from: "timber", to: "cloud", delay: 700 },
  { from: "gateway", to: "cloud", delay: 900 },
  { from: "cloud", to: "dashboard", delay: 1300 },
];

type Layout = {
  name: "desktop" | "mobile";
  viewBox: string;
  positions: Record<NodeId, Position>;
  paths: Record<SourceId, { d: string; start: [number, number]; end: [number, number] }>;
};

export const layouts: Layout[] = [
  {
    name: "desktop",
    viewBox: "0 0 1200 520",
    positions: {
      concrete: { x: 70, y: 55 },
      timber: { x: 70, y: 155 },
      temperature: { x: 70, y: 280 },
      control: { x: 70, y: 365 },
      gateway: { x: 340, y: 365 },
      cloud: { x: 690, y: 260 },
      dashboard: { x: 1040, y: 270 },
    },
    paths: {
      temperature: {
        d: "M115 280H180C240 280 208 337 272 337H286",
        start: [115, 280],
        end: [286, 337],
      },
      control: { d: "M115 365H286", start: [115, 365], end: [286, 365] },
      concrete: {
        d: "M115 55H200C285 55 270 108 360 108H445C525 108 524 225 588 225",
        start: [115, 55],
        end: [588, 225],
      },
      timber: { d: "M115 155H380C474 155 462 260 540 260", start: [115, 155], end: [540, 260] },
      gateway: { d: "M394 365H450C525 365 491 295 542 295", start: [394, 365], end: [542, 295] },
      cloud: { d: "M842 276H910", start: [842, 276], end: [910, 276] },
    },
  },
  {
    name: "mobile",
    viewBox: "0 0 360 850",
    positions: {
      concrete: { x: 90, y: 50 },
      timber: { x: 270, y: 50 },
      temperature: { x: 90, y: 215 },
      control: { x: 270, y: 215 },
      gateway: { x: 180, y: 365 },
      cloud: { x: 180, y: 555, scale: 0.85 },
      dashboard: { x: 180, y: 735, scale: 0.85 },
    },
    paths: {
      temperature: { d: "M90 278V330Q90 350 112 350H126", start: [90, 278], end: [126, 350] },
      control: { d: "M270 278V330Q270 350 248 350H234", start: [270, 278], end: [234, 350] },
      concrete: {
        d: "M90 113H30Q16 113 16 133V529Q16 551 39 551H52",
        start: [90, 113],
        end: [52, 551],
      },
      timber: {
        d: "M270 113H330Q344 113 344 133V548Q344 570 323 570H311",
        start: [270, 113],
        end: [311, 570],
      },
      gateway: { d: "M180 427V458", start: [180, 427], end: [180, 458] },
      cloud: { d: "M180 622V660", start: [180, 622], end: [180, 660] },
    },
  },
];
