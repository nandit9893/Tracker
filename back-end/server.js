import express from 'express';
import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(express.json()); 

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/health', (req, res) => {
    res.status(200).send('Server is up and running!');
  });
  

app.get('/api/employee', (req, res) => {
  const employee = router.db.get('employee').value();
  res.json(employee);
});

app.get('/api/attendance', (req, res) => {
  const attendance = router.db.get('attendance').value();
  res.json(attendance);
});

app.get('/api/dailyUpdates', (req, res) => {
  const dailyUpdates = router.db.get('dailyUpdates').value();
  res.json(dailyUpdates);
});

app.post('/api/dailyUpdates', (req, res) => {
  const newUpdate = req.body;
  router.db.get('dailyUpdates').insert(newUpdate).write();
  res.status(201).json(newUpdate);
});

app.get('/api/timesheet', (req, res) => {
  const timesheet = router.db.get('timesheet').value();
  res.json(timesheet);
});

app.post('/api/timesheet', (req, res) => {
  const newTimesheetEntry = req.body;
  router.db.get('timesheet').insert(newTimesheetEntry).write();
  res.status(201).json(newTimesheetEntry);
});

app.get('/api/dashboard', (req, res) => {
  const attendance = router.db.get('attendance').value();
  const dailyUpdates = router.db.get('dailyUpdates').value();
  const dashboardData = { attendance, dailyUpdates };
  res.json(dashboardData);
});

app.use('/api', router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
