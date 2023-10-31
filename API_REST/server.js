import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
  console.log(`CTRL + Click on http://localhost:${port}`);
});
