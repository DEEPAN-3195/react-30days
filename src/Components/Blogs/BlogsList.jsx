import React from "react";
import { useBlogsStore } from "./useBlogsStore";
import { Link } from "react-router-dom";

const BlogsList = () => {
    const { blogs, deleteBlogs } = useBlogsStore();

    return (
        <div className="min-h-screen bg-neutral-light dark:bg-neutral-dark transition-colors duration-300 pt-24 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-primary-dark dark:text-primary-light">
                        Blog Posts
                    </h1>
                    <Link
                        to="/blogs-create"
                        className="bg-primary hover:bg-primary-hover text-primary-contrast dark:bg-primary-dark dark:hover:bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow-md transition-all"
                    >
                        + New Blog
                    </Link>
                </div>

                {blogs.length === 0 && (
                    <p className="text-neutral-textDark dark:text-neutral-textLight text-lg text-center mt-10">
                        No blogs yet — start by creating your first post ✨
                    </p>
                )}

                <div className="space-y-5">
                    {blogs.map((b) => (
                        <div
                            key={b.id}
                            className="border border-neutral-border bg-white dark:bg-neutral-card text-neutral-textDark dark:text-neutral-textLight p-5 rounded-xl shadow-sm hover:shadow-md transition-all"
                        >
                            <h2 className="font-bold text-xl mb-2 text-primary-dark dark:text-primary-light">
                                {b.title}
                            </h2>
                            <p className="mb-4 leading-relaxed">{b.content}</p>

                            <div className="flex gap-3">
                                <Link
                                    to={`/blogs-edit/${b.id}`}
                                    className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-sm transition-all dark:bg-emerald-600 dark:hover:bg-emerald-500"
                                >
                                    Edit
                                </Link>

                                <button
                                    onClick={() => deleteBlogs(b.id)}
                                    className="px-4 py-2 rounded-lg bg-rose-500 hover:bg-rose-600 text-white font-semibold shadow-sm transition-all dark:bg-rose-600 dark:hover:bg-rose-500"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default BlogsList;
