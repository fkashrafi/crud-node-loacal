import express from 'express';
import { getAllEmployee, createEmployee, getEmployee, updateEmployee, deleteEmployee } from '../controllers/employee.js';

const router = express.Router();

// get all employee
router.get('/', getAllEmployee);

// get employee by id
router.get('/:id', getEmployee);

// create employee
router.post('/', createEmployee);

// update employee
router.patch('/:id', updateEmployee);

// delete employee
router.delete('/:id', deleteEmployee);

export default router;