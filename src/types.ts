export type ToolType =
  | 'bucket'
  | 'pencil'
  | 'crayon'
  | 'marker'
  | 'brush'
  | 'watercolor'
  | 'glitter'
  | 'eraser';

export interface ColoringPage {
  id: string;
  name: string;
  category: string;
  svgData: string;
}

export interface Point {
  x: number;
  y: number;
  pressure: number;
}

export interface DrawingTool {
  id: ToolType;
  label: string;
  icon: string;
  cursor: string;
}

export interface AppState {
  tool: ToolType;
  color: string;
  brushSize: number;
  currentPage: ColoringPage | null;
  showGallery: boolean;
}
