import { v4 as uuidv4 } from 'uuid';

let employees = [];

// get all employee
export const getAllEmployee = (req, res) => {
    if (employees.length > 0) {
        res.send(employees);
    } else {
        res.send('No record found.')
    }
}

// get by employee id
export const getEmployee = (req, res) => {
    const { id } = req.params;
    const findEmpById = employees.find((employee) => employee.id === id);

    if (findEmpById) {
        res.send(findEmpById);
    } else {
        res.send('No record found.')
    }
}

// create employee
export const createEmployee = (req, res) => {
    const employee = req.body;

    employees.push({ ...employee, id: uuidv4() });

    res.send(`employee ${employee.name} add successfully.`);
}

// update employee
export const updateEmployee = (req, res) => {
    const { id } = req.params;
    const { name, age, edu } = req.body;

    const employee = employees.find((employee) => employee.id === id);

    if (name) employee.name = name;
    if (age) employee.age = age;
    if (edu) employee.edu = edu;

    req.send('employee update successfully.')
}

// delete emplyee
export const deleteEmployee = (req,res) =>{
    const {id} = req.params;

    employees = employees.filter((employee)=>employee.id !== id);

    if(employees){
        res.send("delete successfully.")
    }else{
        res.send("no rec found successfully.")
    }
}