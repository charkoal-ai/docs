import type { CanvasColors } from "./canvas-color.model";

export const edgeSides = ["top", "right", "bottom", "left"] as const;
export const edgeEnds = ["none", "arrow"] as const;
export const edgeStyles = ["solid", "dotted", "dashed"] as const;
export const edgeShapes = ["curved", "straight", "stepped"] as const;

export type EdgeSide = (typeof edgeSides)[number];
export type EdgeEnd = (typeof edgeEnds)[number];
export type EdgeStyle = (typeof edgeStyles)[number];
export type EdgeShape = (typeof edgeShapes)[number];

export interface EdgeModel {
	id: string;
	fromNode: string;
	fromSide?: EdgeSide;
	fromEnd?: EdgeEnd;
	toNode: string;
	toSide?: EdgeSide;
	toEnd?: EdgeEnd;
	color?: CanvasColors;
	label?: string;
	// Not part of JSON Canvas spec
	style?: EdgeStyle;
	// Not part of JSON Canvas spec
	shape?: EdgeShape;
}
