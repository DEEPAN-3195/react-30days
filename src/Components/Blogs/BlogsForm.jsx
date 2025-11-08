import React, { useState, useRef } from "react";
import { useBlogsStore } from "./useBlogsStore";
import { useNavigate } from "react-router-dom";

const BlogsForm = ({ existingBlog }) => {
    const [title, setTitle] = useState(existingBlog?.title || "");
    const [content, setContent] = useState(existingBlog?.content || "");
    const [errors, setErrors] = useState({});
    const addBlogs = useBlogsStore((s) => s.addBlogs);
    const updateBlogs = useBlogsStore((s) => s.updateBlogs);
    const navigate = useNavigate();
    const contentRef = useRef(null);

    const validate = () => {
        const newErrors = {};
        if (!title.trim()) newErrors.title = "Title is required";
        if (!content.trim()) newErrors.content = "Content is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        if (existingBlog) {
            updateBlogs(existingBlog.id, { ...existingBlog, title, content });
        } else {
            addBlogs({ title, content });
        }

        navigate("/blogs-list");
    };

    const handleTitleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            contentRef.current?.focus();
        }
    };

    const handleContentKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (title.trim() && content.trim()) {
                handleSubmit(e);
            } else {
                validate();
            }
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 p-6 max-w-lg mx-auto min-h-screen bg-neutral-light dark:bg-neutral-dark transition-colors duration-300 pt-24"
        >
            <h2 className="text-3xl font-bold text-center text-primary-dark dark:text-primary-light mb-4">
                {existingBlog ? "Edit Blog" : "Create a New Blog"}
            </h2>

            <div className="flex flex-col gap-1">
                <input
                    className={`border ${errors.title ? "border-red-500" : "border-neutral-border"
                        } bg-white dark:bg-neutral-card text-neutral-textDark dark:text-neutral-textLight rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary-hover transition`}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={handleTitleKeyDown}
                    placeholder="Enter blog title..."
                />
                {errors.title && (
                    <span className="text-red-500 text-sm">{errors.title}</span>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <textarea
                    ref={contentRef}
                    className={`border ${errors.content ? "border-red-500" : "border-neutral-border"
                        } bg-white dark:bg-neutral-card text-neutral-textDark dark:text-neutral-textLight rounded-lg p-3 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-primary-hover transition`}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    onKeyDown={handleContentKeyDown}
                    placeholder="Write your blog content here..."
                />
                {errors.content && (
                    <span className="text-red-500 text-sm">{errors.content}</span>
                )}
            </div>

            <button
                type="submit"
                className="bg-primary hover:bg-primary-hover text-primary-contrast dark:bg-primary-dark dark:hover:bg-primary text-white font-semibold py-2.5 rounded-lg shadow-md transition-all"
            >
                {existingBlog ? "Update Blog" : "Create Blog"}
            </button>
        </form>
    );
};

export default BlogsForm;
