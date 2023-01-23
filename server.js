import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

const { pathname } = new URL('./dist/', import.meta.url)

app.use(express.static(pathname));

app.get('* ', function (req, res) {
  res.sendFile(path.join(pathname, 'index.html'));
});

// Start Server
app.listen(port, () => {
    console.log(`Server up, listening on port ${port}`)
  })