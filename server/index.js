import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.js';
import departmentRouter from './routes/department.js';
import employeeRouter from './routes/employee.js';
import salaryRouter from './routes/salary.js';
import leaveRouter from './routes/leave.js';
import settingRouter from './routes/setting.js';
import dashboardRouter from './routes/dashboard.js';
import connectToDatatbase from './db/db.js';
import userRegister from './userSeed.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory path from the __filename equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectToDatatbase();

const registerAdminIfNeeded = async () => {
    try {
        await userRegister()
    } catch (error) {
        console.error('Error in registering admin:', error);
    }
};

registerAdminIfNeeded(); 

const app = express();
app.use(cors({
    origin: "https://employee-frontend-fawn.vercel.app",
    credentials: true
}));
app.use(express.json());
//app.use(express.static('public/uploads'));
console.log('Serving static files from:', path.join(process.cwd(), 'public/uploads'));

app.use('/uploads', express.static(path.join('/tmp', 'uploads')));

app.use('/api/auth', authRouter);
app.use('/api/department', departmentRouter);
app.use('/api/employee', employeeRouter);
app.use('/api/salary', salaryRouter);
app.use('/api/leave', leaveRouter);
app.use('/api/setting', settingRouter);
app.use('/api/dashboard', dashboardRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
