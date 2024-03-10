import express from 'express'
import { createItem } from '../controllers/itemController.js'

const itemRoutes = express.Router();

itemRoutes.post('/items', createItem);

export { itemRoutes };