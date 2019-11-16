import express from 'express';
import router from './router';

const PORT = process.env.PORT || 3333;

const app = express();

app.use(router);

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));

export default app;
