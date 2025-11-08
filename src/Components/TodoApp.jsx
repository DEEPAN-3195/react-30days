import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

function TaskColumn({ title, tasks, isEditing, currentEleId, editText, setEditText, handleUpdate, handleDelete, handleSave, handleCancel, checkedStatus }) {
    return (
        <div className="flex-1">
            <h2 className="text-lg font-semibold mb-2 text-neutral-textDark dark:text-neutral-textLight">
                {title} ({tasks.length})
            </h2>
            {tasks.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400">No tasks</p>
            ) : (
                <ul className="space-y-2">
                    {tasks.map((item) => (
                        <li
                            key={item.id}
                            className="flex items-center justify-between bg-neutral-soft dark:bg-neutral-dark border border-neutral-border rounded-lg px-3 py-2 transition"
                        >
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={item.checked}
                                    onChange={() => checkedStatus(item.id)}
                                    className="w-5 h-5 text-primary focus:ring-primary-hover accent-primary-dark dark:accent-primary-light"
                                />
                                {isEditing && currentEleId === item.id ? (
                                    <input
                                        type="text"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        className="border-b border-primary focus:outline-none focus:border-primary-hover bg-transparent px-1 text-neutral-textDark dark:text-neutral-textLight"
                                        autoFocus
                                    />
                                ) : (
                                    <span className={`${item.checked ? "line-through text-secondary-light dark:text-secondary-soft" : "text-neutral-textDark dark:text-neutral-textLight"}`}>
                                        {item.task}
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center gap-2">
                                {isEditing && currentEleId === item.id ? (
                                    <>
                                        <button
                                            onClick={handleSave}
                                            className="bg-primary hover:bg-primary-hover text-white dark:bg-primary-dark dark:hover:bg-primary text-primary-contrast font-semibold px-3 py-1 rounded-lg transition"
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={handleCancel}
                                            className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-3 py-1 rounded-lg transition"
                                        >
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            className="text-secondary hover:text-secondary-hover transition"
                                            onClick={() => handleUpdate(item.id)}
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            disabled={isEditing}
                                            className={`text-primary hover:text-primary-hover transition ${isEditing ? "cursor-not-allowed opacity-50" : ""}`}
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            <FaRegTrashCan />
                                        </button>
                                    </>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default function TodoApp() {
    const [items, setItems] = useState([
        { id: 1, task: "React JSX", checked: true },
        { id: 2, task: "HTML & CSS", checked: true },
        { id: 3, task: "JavaScript", checked: false },
    ]);

    const [newItems, setNewItems] = useState("");
    const [editText, setEditText] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [currentEleId, setCurrentEleId] = useState(null);

    const checkedItems = items.filter((item) => item.checked);
    const uncheckedItems = items.filter((item) => !item.checked);

    const checkedStatus = (id) =>
        setItems(items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));

    const handleUpdate = (id) => {
        const item = items.find((i) => i.id === id);
        setEditText(item.task);
        setIsEditing(true);
        setCurrentEleId(id);
        setNewItems("");
    };

    const handleSave = () => {
        setItems(items.map((item) => (item.id === currentEleId ? { ...item, task: editText } : item)));
        setIsEditing(false);
        setCurrentEleId(null);
        setEditText("");
    };

    const handleCancel = () => {
        setIsEditing(false);
        setCurrentEleId(null);
        setEditText("");
    };

    const handleAdd = () => {
        if (!newItems.trim()) return;
        setItems([...items, { id: items.length + 1, task: newItems, checked: false }]);
        setNewItems("");
    };

    const handleDelete = (id) => {
        setItems(items.filter((item) => item.id !== id).map((item, index) => ({ ...item, id: index + 1 })));
    };

    return (
        <div className="pt-20 min-h-screen flex flex-col items-center bg-neutral-light dark:bg-neutral-dark p-4 transition-colors duration-300">
            <div className="w-full max-w-4xl bg-white dark:bg-neutral-card rounded-2xl shadow-xl p-6 border border-neutral-border transition-colors duration-300">
                <h1 className="text-2xl font-bold text-center text-primary-dark dark:text-primary-light mb-6">
                    ✅ Todo List
                </h1>

                {/* Input */}
                <div className="flex gap-2 mb-6">
                    <input
                        value={newItems}
                        type="text"
                        placeholder="Enter a new task..."
                        className="flex-1 border border-neutral-border rounded-lg px-3 py-2 bg-neutral-soft text-neutral-textDark dark:bg-neutral-card dark:text-neutral-textLight focus:outline-none focus:ring-2 focus:ring-primary-hover transition"
                        onChange={(e) => setNewItems(e.target.value)}
                        disabled={isEditing}
                    />
                    <button
                        onClick={handleAdd}
                        disabled={isEditing}
                        className={`px-4 py-2 font-semibold rounded-lg transition ${isEditing
                            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                            : "bg-primary hover:bg-primary-hover text-white dark:bg-primary-dark dark:hover:bg-primary text-primary-contrast"
                            }`}
                    >
                        Add
                    </button>
                </div>

                {/* Two Columns */}
                <div className="flex flex-col md:flex-row gap-6">
                    <TaskColumn
                        title="📝 Pending Tasks"
                        tasks={uncheckedItems}
                        isEditing={isEditing}
                        currentEleId={currentEleId}
                        editText={editText}
                        setEditText={setEditText}
                        handleUpdate={handleUpdate}
                        handleDelete={handleDelete}
                        handleSave={handleSave}
                        handleCancel={handleCancel}
                        checkedStatus={checkedStatus}
                    />
                    <TaskColumn
                        title="✅ Completed Tasks"
                        tasks={checkedItems}
                        isEditing={isEditing}
                        currentEleId={currentEleId}
                        editText={editText}
                        setEditText={setEditText}
                        handleUpdate={handleUpdate}
                        handleDelete={handleDelete}
                        handleSave={handleSave}
                        handleCancel={handleCancel}
                        checkedStatus={checkedStatus}
                    />
                </div>
            </div>
        </div>
    );
}
