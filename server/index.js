const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleare
app.use(cors());
app.use(express.json());

//ROUTES//

//create a item

app.post("/items", async(req, res) => {
    try {

        const {description} = req.body;
        const newItem = await pool.query("INSERT INTO items (description) VALUES($1) RETURNING *",
        [description]);

        res.json(newItem.rows[0]);

    } catch (err) {
        console.error("ERROR")
        console.error(err.message);
    }
});

//get all items

app.get("/items", async(req, res) => {
    try {

        const allItems = await pool.query("SELECT * FROM items");
        res.json(allItems.rows);
        
    } catch (err) {
        console.error("ERROR");
        console.error(err.message);
    }
});

//get a item

app.get("/items/:id", async(req, res) => {
    try {
        
        const {id} = req.params;
        const item = await pool.query("SELECT * FROM items WHERE item_id = $1",
        [id]);
        res.json(item.rows[0]);

    } catch (err) {
        console.error("ERROR");
        console.error(err.message);
    }
})

//delete a item

app.delete("/items/:id", async(req, res) => {
    try {

        const {id} = req.params;
        const deleteItem = await pool.query("DELETE FROM items WHERE item_id = $1",
        [id]);
        res.json("Item was deleted!");
        
    } catch (err) {
        console.log("ERROR");
        console.log(err.message);
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000")
});