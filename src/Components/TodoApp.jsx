import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
export default function TodoApp() {

    let [items, setItems] = useState(
        [
            { id: 1, task: "React jsx", checked: true },
            { id: 2, task: "Html & Css", checked: true },
            { id: 3, task: "JavaScript", checked: false },

        ]
    );
    let [newItems, setNewItems] = useState("");
    let [editText, setEditText] = useState("");
    let [isEditing, setIsEditing] = useState(false);
    let [currentEleId, setCurrentEleId] = useState(null);

    function checkedStatus(id) {
        let newListItem = items.map((item) => {
            return item.id === id ? { ...item, checked: !item.checked } : item;
        })
        setItems(newListItem);
        console.log(items);
    }
    function handleUpdate(id) {
        setNewItems("");
        let listItem = items.find(item => item.id === id);
        setEditText(listItem.task)
        setIsEditing(true);
        setCurrentEleId(id);
    }
    function handleAddorSave() {
        if (isEditing) {
            let newListItem = items.map(item => {
                return currentEleId === item.id ? { ...item, task: editText } : item
            })
            setItems(newListItem);
            setCurrentEleId(null);
            setNewItems("");
            setIsEditing(false);
        }
        else {
            setItems([...items, { id: items.length + 1, task: newItems, checked: false }]);
        }
        setNewItems("");
    }
    function handleDelete(id) {
        let newItems = items.filter((item) => item.id !== id).map((item, index) => { return { ...item, id: index + 1 } }); //chaining call
        setItems(newItems);
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
                    Todo List
                </h1>

                <div className="flex gap-2 mb-4">
                    <input
                        value={newItems}
                        type="text"
                        placeholder="Enter a new task..."
                        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        onChange={(e) => setNewItems(e.target.value)}
                        disabled={isEditing}
                    />
                    <button onClick={handleAddorSave} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg" disabled={isEditing}>
                        Add
                    </button>
                </div>

                {/* Todo List */}
                <ul className="space-y-2">
                    {
                        items.map((item) => {
                            return (
                                <li key={item.id} className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox" className="w-5 h-5 text-indigo-600" checked={item.checked} onChange={() => { checkedStatus(item.id) }} />
                                        {isEditing && currentEleId === item.id ? (
                                            <input
                                                type="text"
                                                value={editText}
                                                onChange={(e) => setEditText(e.target.value)}
                                                className="border-b border-gray-400 focus:outline-none focus:border-indigo-500 px-1"
                                                autoFocus
                                            />
                                        ) : (
                                            <span className="text-gray-800">{item.task}</span>
                                        )}


                                    </div>
                                    <div className="space-x-2 flex items-center">
                                        {isEditing && currentEleId === item.id ? (
                                            <button
                                                onClick={handleAddorSave}
                                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-1 rounded-lg"
                                            >
                                                Save
                                            </button>
                                        ) : (
                                            <>
                                                <button
                                                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                                    onClick={() => handleUpdate(item.id)}
                                                >
                                                    <FaEdit />
                                                </button>
                                                <button
                                                    className="text-rose-600 hover:text-rose-800 text-sm font-medium"
                                                    onClick={() => handleDelete(item.id)}
                                                >
                                                    <FaRegTrashCan />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}