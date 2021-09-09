import express from 'express';

import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/user.js';

const router = express.Router();

// get all
router.get('/', getUsers);
// create
router.post('/', createUser);
// get by id
router.get('/:id', getUser);
// delete
router.delete('/:id', deleteUser);
// update
router.patch('/:id', updateUser);


export default router;