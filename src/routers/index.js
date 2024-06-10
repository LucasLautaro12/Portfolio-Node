import { Router } from "express"

const router = Router()

//Paginas que van a mosrtarse 
router.get('/', (req,res) => res.render('index'))
router.get('/about', (req,res) => res.render('about'))
router.get('/contact', (req,res) => res.render('contact'))

export default router