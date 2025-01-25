import Blogs from "@/Pages/blogs/Blogs";

const userPaths = [
  {
    name: "Blogs",
    children: [
      {
        name: "Blogs",
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
];

export default userPaths;
