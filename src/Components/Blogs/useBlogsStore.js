import { create } from "zustand";
export const useBlogsStore = create((set) => ({
  blogs: [],
  addBlogs: (blog) =>
    set((state) => {
      const newId =
        state.blogs.length > 0 ? state.blogs[state.blogs.length - 1].id + 1 : 1;
      return { blogs: [...state.blogs, { ...blog, id: newId }] };
    }),
  deleteBlogs: (id) =>
    set((state) => ({
      blogs: state.blogs.filter((b) => id !== b.id), //filter return new array
    })),

  updateBlogs: (id, updatedBlog) =>
    set((state) => ({
      blogs: state.blogs.map((b) => (id === b.id ? updatedBlog : b)),
    })),
}));
