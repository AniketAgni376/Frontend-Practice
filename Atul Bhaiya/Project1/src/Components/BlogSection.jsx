function BlogSection() {
    return (
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Latest Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border rounded shadow-lg p-4">
                <h3 className="text-xl font-bold">Blog Title {item}</h3>
                <p className="text-gray-600 mt-2">A short preview of the blog post content...</p>
                <a href="#" className="text-blue-500 hover:underline mt-2 block">Read more</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default BlogSection;
  