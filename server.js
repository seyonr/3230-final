import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());


app.get('/api/inventory', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'public', 'data', 'db.json');
    const data = await fs.promises.readFile(filePath, 'utf8');
    const json = JSON.parse(data);

    if (!json.cars) {
      res.status(404).json({ error: 'Car inventory not found' });
    } else {
      res.json(json.cars);
    }
  } catch (err) {
    console.error('Error reading car inventory:', err);
    res.status(500).json({ error: 'Failed to load inventory' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
