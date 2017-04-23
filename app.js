import express from 'express';

const app = express();

app.route('/employee')
  .get((req, res) => {
    res.json([{
      id: 1,
      name: 'name',
    }]);
  });

export default app;
