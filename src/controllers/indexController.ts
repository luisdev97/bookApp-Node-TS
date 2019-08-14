import { Request, Response } from 'express';

class IndexController {

    public index (req: Request, res: Response): void {
        res.render('index', { title: 'Welcome to Books App'});        
        //res.send('Se envia el response');
    }

}

export const indexController = new IndexController();