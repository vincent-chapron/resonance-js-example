import {Router, IRouting} from 'resonance-js';
import DefaultRouting from './routing/DefaultRouting';

export default class AppRouter extends Router {
    public registerRoutes(): IRouting[] {
        let routing = [
            new DefaultRouting(),
        ]

        return routing;
    }
}
