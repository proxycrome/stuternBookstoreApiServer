import client from "../database/index.js";


export const addBooks = async (req, res) => {
    const { name, author, year } = req.body;

    try{
        const result = await client.query(`INSERT INTO books (name, author, year) VALUES ($1, $2, $3) RETURNING *`,
         [name, author, year]);
        if(result){
            return res.status(200).json({status: "Book Successfully Added", result: result.rows})
        }
    } catch(err) {
        res.status(500).json({message: err})
    }
}

export const editBooks = async (req, res) => {
    const { name, author, year } = req.body;
    const bookId = +req.params.id

    try{
        const result = await client.query(`UPDATE books SET "name"=$1, "author"=$2, "year"=$3 WHERE "id"=$4 RETURNING *`,
        [name, author, year, bookId]);

        if(result){
            return res.status(200).json({status: "Book Edited Sucessfully", result: result.rows})
        }
    } catch(err) {
        res.status(500).json({message: err})
    }
}

export const deleteBooks = async (req, res) => {
    const bookId = +req.params.id

    try{
        const result = await client.query(`DELETE FROM books WHERE id = $1 RETURNING *`, [ bookId ]);

        if(result){
            return res.status(200).json({status: "Book deleted successfully", result: result.rows});
        }
    } catch(err) {
        res.status(500).json({message: err})
    }
}

export const getBooks = async (req, res) => {
    try{
        const result = await client.query(`SELECT * FROM books ORDER BY id ASC`);

        if(result){
            return res.status(200).json({status: "success", result: result.rows});
        }
    } catch(err) {
        res.status(500).json({message: err})
    }
}