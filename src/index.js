import express from "express";
import cors from "cors";
import client from "./database/index.js";
import { addBooks, editBooks, deleteBooks, getBooks } from "./queries/index.js"


const app = express();
const port = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

client.connect();

// create
app.post('/save', addBooks);

// update
app.put('/:id/books', editBooks);

// delete
app.delete('/:id/remove/books', deleteBooks)

// read
app.get('/books', getBooks)


app.listen(port, () => {
    console.log(`Server connected at http://localhost:${port}`);
})