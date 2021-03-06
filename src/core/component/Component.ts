export interface ShadowOptions {
  enable?: boolean;
  color?: string;
  blur?: number;
  offset?: { x: number; y: number };
  fillColor?: string | CanvasGradient | CanvasPattern;
  strokeColor?: string | CanvasGradient | CanvasPattern;
}

export class Component {
  type? = "Component";
  shadow? = { enable: false } as ShadowOptions;
  position?: { x: number; y: number } = { x: 0, y: 0 };
  offset?: { x: number; y: number } = { x: 0, y: 0 };
  children?: Component[] = [];
  alpha?: number = 1;
  filter?: string;
  fillStyle?: string | CanvasGradient | CanvasPattern;
  strokeStyle?: string | CanvasGradient | CanvasPattern = "#0000";
  constructor(component?: Component) {
    if (component) {
      if (component.shadow) this.shadow = component.shadow;
      if (component.position) this.position = component.position;
      if (component.alpha) this.alpha = component.alpha;
      if (component.offset) this.offset = component.offset;
      if (component.children) this.children = component.children;
      if (component.filter) this.filter = component.filter;
      if (component.fillStyle) this.fillStyle = component.fillStyle;
      if (component.strokeStyle) this.strokeStyle = component.strokeStyle;
    }
  }
}
