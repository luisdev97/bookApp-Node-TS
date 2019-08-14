import { Router } from 'express';
import { booksController } from '../controllers/booksController';

const router: Router = Router();


router.get('/', booksController.index);
router.get('/books/add',booksController.renderFormBook);

export default router;