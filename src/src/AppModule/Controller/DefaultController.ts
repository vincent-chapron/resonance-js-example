import {Controller} from 'resonance-js';
import {Request, Response} from 'express';

export default class PostsController extends Controller {
    homepageAction(req: Request, res: Response) {
        res.render('homepage.pug');
    }

    moveAction(io: SocketIO.Server, socket: SocketIO.Socket) {
        return (data: any) => {
            socket.broadcast.emit('event:mousemove', {...data, id: socket.id});
        }
    }

    removeAction(io: SocketIO.Server, socket: SocketIO.Socket) {
        return (data: any) => {
            socket.broadcast.emit('event:disconnect', {id: socket.id});
        }
    }
}
