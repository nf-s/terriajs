import Viewer, { ViewerConstructor } from "./Viewer";
import Terria from "./Terria";

// Do we ever need another ViewerFactory?
namespace ViewerFactory {
    const constructors = new Map<string, ViewerConstructor<Viewer>>();
    export function register(type: string, constructor: ViewerConstructor<Viewer>) {
        constructors.set(type, constructor);
    }
    export function create(type: string, terria: Terria): Viewer | undefined {
        const Constructor = constructors.get(type);
        if (Constructor === undefined) {
            return undefined;
        }
        return new Constructor(terria);
    }
}

export default ViewerFactory;
