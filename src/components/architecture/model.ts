export type SensorId = "concrete" | "timber" | "temperature" | "control" | "equipment";
export type NodeId = SensorId | "gateway" | "cloud" | "dashboard";
type SourceId = Exclude<NodeId, "dashboard">;
export type Position = { x: number; y: number; scale?: number };

export const sensors: { id: SensorId; label: string; icon: string }[] = [
  { id: "concrete", label: "Betongfukt", icon: "M12 2C9 7 4 11 4 16a8 8 0 0 0 16 0c0-5-5-9-8-14Z" },
  { id: "timber", label: "Trefukt", icon: "m12 2-6 8h3l-5 7h6v5h4v-5h6l-5-7h3Z" },
  {
    id: "temperature",
    label: "Temperatur",
    icon: "M9 14.5V5a3 3 0 0 1 6 0v9.5a5 5 0 1 1-6 0ZM12 8v9",
  },
  { id: "control", label: "Styring", icon: "M8 2v7m8-7v7M6 9h12v5a6 6 0 0 1-12 0V9Zm6 11v3" },
  {
    id: "equipment",
    label: "Annet utstyr",
    icon: "M4 6 8 2h8l4 4v12l-4 4H8l-4-4V6ZM8 10v2m8-2v2M10 19v-3h4v3",
  },
];

// One topology for both layouts. Only coordinates change on small screens.
export const connections: { from: SourceId; to: NodeId; delay: number }[] = [
  { from: "temperature", to: "gateway", delay: 180 },
  { from: "control", to: "gateway", delay: 230 },
  { from: "equipment", to: "gateway", delay: 280 },
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
      equipment: { x: 70, y: 450 },
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
      equipment: {
        d: "M115 450H180C240 450 208 393 272 393H286",
        start: [115, 450],
        end: [286, 393],
      },
      concrete: {
        d: "M115 55H200C285 55 270 108 360 108H445C525 108 487 214 567 222",
        start: [115, 55],
        end: [567, 222],
      },
      timber: { d: "M115 155H380C474 155 460 258 544 258", start: [115, 155], end: [544, 258] },
      gateway: { d: "M394 365H450C525 365 495 294 550 294", start: [394, 365], end: [550, 294] },
      cloud: { d: "M822 276H910", start: [822, 276], end: [910, 276] },
    },
  },
  {
    name: "mobile",
    viewBox: "0 0 360 430",
    positions: {
      concrete: { x: 80, y: 25, scale: 0.8 },
      timber: { x: 280, y: 25, scale: 0.8 },
      temperature: { x: 60, y: 110, scale: 0.8 },
      control: { x: 180, y: 110, scale: 0.8 },
      equipment: { x: 300, y: 110, scale: 0.8 },
      gateway: { x: 180, y: 215, scale: 0.6 },
      cloud: { x: 100, y: 342, scale: 0.56 },
      dashboard: { x: 280, y: 342, scale: 0.5 },
    },
    paths: {
      temperature: { d: "M60 156V198Q60 208 70 208H145", start: [60, 156], end: [145, 208] },
      control: { d: "M180 156V179", start: [180, 156], end: [180, 179] },
      equipment: { d: "M300 156V198Q300 208 290 208H215", start: [300, 156], end: [215, 208] },
      concrete: { d: "M80 73H24Q10 73 10 87V326Q10 338 16 338", start: [80, 73], end: [16, 338] },
      timber: {
        d: "M280 73H332Q350 73 350 91V400Q350 415 335 415H115Q100 415 100 400V384",
        start: [280, 73],
        end: [100, 384],
      },
      gateway: {
        d: "M180 254V270Q180 282 168 282H112Q100 282 100 290",
        start: [180, 254],
        end: [100, 290],
      },
      cloud: { d: "M174 350H214", start: [174, 350], end: [214, 350] },
    },
  },
];
