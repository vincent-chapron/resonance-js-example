import {Module} from 'resonance-js';

export default class AppModule extends Module {
    public name(): string {
        return 'AppModule';
    }

    public dirname(): string {
        return __dirname;
    }
}
