/**
 * The Canvas Model extends the JSON Canvas specification (https://jsoncanvas.org/).
 * It incorporates all standard JSON Canvas features while adding two node types (NestedCanvasNode, SvgNode) and enhanced edge styling/shapes.
 */
import type { EdgeModel } from "./edge.model";
import type { NodeModel } from "./node.model";

export interface CanvasModel {
	nodes: NodeModel[];
	edges: EdgeModel[];
}
