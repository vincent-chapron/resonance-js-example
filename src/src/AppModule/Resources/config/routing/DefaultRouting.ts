import {IRouting, IRoute, ISocket} from 'resonance-js';

export default class PostsRouting implements IRouting {
    public controller: string = 'DefaultController';
    public prefix: string = '';
    public routes: IRoute[] = [
        {uri: '/', action: 'homepage'},
    ];
    public sockets: ISocket[] = [
        {event: 'mouse:move', action: 'move'},
        {event: 'disconnect', action: 'remove'},
    ];
}
