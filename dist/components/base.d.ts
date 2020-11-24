import { Hintable, Hinter } from "./../../dist/base/hint.d";
import Ani from "../base/ani";
import { FontOptions } from "../options/font-options";
import { ShadowOptions } from "../options/shadow-options";
import Pos from "../utils/position";
import { Component } from "./component";
import { Player, Renderer } from "../base/base";
import { EnhancedCanvasRenderingContext2D } from "../utils/enhance-ctx";
export declare abstract class Base implements Component, Hintable {
    alpha: number | Function;
    ani: Ani;
    pos: Pos | Function;
    protected cAlpha: number;
    protected cPos: Pos;
    hinter: Hinter;
    renderer: Renderer;
    player: Player;
    constructor(init?: Partial<Base>);
    shadow: ShadowOptions;
    font: FontOptions;
    ctx: EnhancedCanvasRenderingContext2D;
    update(options?: any): void;
    saveCtx(): void;
    preRender(): void;
    abstract render(): void;
    restoreCtx(): void;
    draw(): void;
    protected getValue(obj: any, n: number): any;
}
