import type { CanvasColors } from "./canvas-color.model";
import type { CanvasModel } from "./canvas.model";

export const nodeTypes = [
	"text",
	"file",
	"link",
	"group",
	"nested-canvas",
	"svg",
] as const;
export type NodeType = (typeof nodeTypes)[number];

export interface BaseNode {
	type: NodeType;
	id: string;
	x: number;
	y: number;
	width: number;
	height: number;
	color?: CanvasColors;
}

export interface TextNode extends BaseNode {
	type: "text";
	text: string;
}

export interface FileNode extends BaseNode {
	type: "file";
	file: string;
	subpath?: string;
}

export interface LinkNode extends BaseNode {
	type: "link";
	url: string;
}

export interface GroupNode extends BaseNode {
	type: "group";
	label?: string;
	background?: string;
	backgroundStyle?: "cover" | "ratio" | "repeat";
}

// Not part of Standard JSON Canvas
export interface NestedCanvasNode extends BaseNode {
	type: "nested-canvas";
	canvas: CanvasModel;
	title: string;
}

// Not part of Standard JSON Canvas
export interface SvgNode extends BaseNode {
	type: "svg";
	svg: string;
	label?: string;
}

export type NodeModel =
	| TextNode
	| FileNode
	| LinkNode
	| GroupNode
	| NestedCanvasNode
	| SvgNode;
