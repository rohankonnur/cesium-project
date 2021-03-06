import React, {Fragment, useEffect, useState} from "react";

const ListItems = () => {

    const [items, setItems] = useState([]);

    const deleteItem = async id => {
        try {

            const deleteItem = await fetch(`http://localhost:5000/items/${id}`, {
            method: "DELETE"});

            setItems(items.filter(item => item.item_id !== id));
            
        } catch (err) {
            console.log("ERROR");
            console.error(err.message);
        }
    }

    const getItems = async () => {
        try {
            
            const response = await fetch("http://localhost:5000/items");
            const jsonData = await response.json();

            setItems(jsonData);

        } catch (err) {
            console.log("ERROR");
            console.error(err.message);
        }
    };

    useEffect(() => {
        getItems();
    }, []);

    return <Fragment>
        {" "}
        <table className="table mt-5 text-center">
            <thead>
            <tr>
                <th>Item</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.item_id}>
                        <td>{item.description}</td>
                        <td>
                            <button 
                                className="btn btn-danger"
                                onClick={() => deleteItem(item.item_id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>
}

export default ListItems;