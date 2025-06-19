import React from "react";

const Newsletter = () => {
  return (
    <div>
      <section className="py-1 mt-50 bg-gray-50 dark:bg-dark/50 rounded-lg shadow-md overflow-hidden animate-slideUp">
        <div className="p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Subscribe To My Newsletter
                </h2>
                <p className="text-gray-600 dark:text-gray-300 md:w-2/3">
                  Get the latest updates on my projects,blog posts, and tech
                  insights delivered straight to your inbox.
                </p>
              </div>
              <form className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border rounded-lg border-gray-300 text-black dark:text-white dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors"
              >
                Subscribe
              </button>
              </form>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
