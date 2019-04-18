import Terria from "./Terria";

export interface ViewerConstructor<T> {
    new(terria: Terria): T;
    prototype: T;
}

export type CameraView = {
    rectangle: Cesium.Rectangle;
    position: any;
    direction: any;
    up: any;
}

export default abstract class Viewer {
    abstract zoomTo(viewOrExtent: CameraView | Cesium.Rectangle, flightDurationSeconds: number): void;
}
