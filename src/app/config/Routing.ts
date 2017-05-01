import {Routing, IRouterConfiguration} from 'resonance-js';

export default class AppRouting extends Routing {
    public registerRouters(): IRouterConfiguration[] {
        return [
            {resources: '@AppModule:Router'}
        ]
    }
}
