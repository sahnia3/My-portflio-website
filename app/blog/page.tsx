import { motion } from "framer-motion";

const BlogPage = () => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden z-[30] pt-48">
      <div className="max-w-7xl mx-auto px-4 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">Blog Coming Soon</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I&apos;m working on some interesting projects/articles, Stay tuned for insightful content!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-[#1B1B1B] border-2 border-[#5656578b] rounded-lg p-6 shadow-[inset_0_0_10px_rgba(70,70,70,0.5)]"
            >
              <div className="w-full h-48 bg-[#141414] rounded-lg mb-4"></div>
              <div className="h-6 w-3/4 bg-[#141414] rounded mb-3"></div>
              <div className="h-4 w-1/2 bg-[#141414] rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
