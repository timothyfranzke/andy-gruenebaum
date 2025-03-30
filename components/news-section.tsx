`"use client"`

import NewsCard from "./new-card";

const NewsSection = ({ news }: { news: { id: number; image: string; title: string; excerpt: string; date: string; }[] }) => {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">NEWS</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.slice(0, 1).map(article => (
              <NewsCard key={article.id} article={article} isFeatured={true} />
            ))}
            
            {news.slice(1, 4).map(article => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-sm font-semibold transition duration-300">
              MORE NEWS
            </a>
          </div>
        </div>
      </section>
    );
  };

  export default NewsSection;