export const predefinedCanvasCodes = ["1", "2", "3", "4", "5", "6"] as const;
export type HexColor = `#${string}`;

export type PredefinedCanvasColor = (typeof predefinedCanvasCodes)[number];

export type CanvasColors = PredefinedCanvasColor | HexColor | "transparent";
