import { v4 as uuidv4 } from 'uuid';

let users = [];

// create
export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`user with the name ${user.firstName} added to database.`);
};

// get all
export const getUsers = (req, res) => {
    if (users.length > 0) {
        res.send(users);
    } else {
        res.send("sorry, no any data here.");
    }
};

// get single by id
export const getUser = (req, res) => {
    const { id } = req.params;
    const findUserById = users.find((user) => user.id === id);

    if (findUserById) {
        res.send(findUserById);
    } else {
        res.send("sorry, data not found.");
    }
}

// delete user
export const deleteUser = (req, res) => {
    const { id } = req.params;
    const findUserById = users.find((user) => user.id === id);

    users = users.filter((user) => user.id !== id);

    if (users) {
        res.send(`user deleted successfull with the id ${id}.`);
    } else {
        res.send("sorry, data not found.");
    }
}

// update user
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send("user update successfully.")
};