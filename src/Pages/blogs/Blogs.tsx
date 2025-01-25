import BlogCard from "@/components/BlogCard";
import { LoadingSpinnerCircle } from "@/components/LoadingSpinnerCircle";
import { SectionHead } from "@/components/SectionHead";
import { useGetAllBlogsQuery } from "@/redux/features/admin/blogsManagementApi";

const Blogs = () => {
  const { data: blogsData, isLoading } = useGetAllBlogsQuery(undefined);
  // console.log(blogsData);
  if (isLoading) return <LoadingSpinnerCircle />;
  return (
    <div>
      <SectionHead
        title="Blogs"
        para={`"Where Ideas Take Flight and Inspiration Finds You, One Blog at a Time."`}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {blogsData?.data?.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
