import express from 'express';
import userRoute from './routes/user.js';
import employeeRoute from './routes/employee.js';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/users', userRoute);
app.use('/employee',employeeRoute);

// get-request
app.get('/', (req, res) => res.send('Hello from home page.'));

app.listen(PORT, console.log(`Server running on port: http://localhost:${PORT}`));