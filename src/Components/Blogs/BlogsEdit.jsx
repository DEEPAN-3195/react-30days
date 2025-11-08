import React from 'react'
import { useParams } from 'react-router-dom'
import { useBlogsStore } from './useBlogsStore';
import BlogsForm from './BlogsForm';

const BlogsEdit = () => {
    const { id } = useParams();
    const blog = useBlogsStore((s) => s.blogs.find((b) => b.id === Number(id)));

    return (
        <BlogsForm existingBlog={blog} />
    )
}

export default BlogsEdit
