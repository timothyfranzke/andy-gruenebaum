const NewsCard = ({ article, isFeatured = false }: { article: { image: string; title: string; excerpt: string; date: string; }; isFeatured?: boolean }) => {
    return (
      <div className={`group ${isFeatured ? 'col-span-1 md:col-span-2 lg:col-span-2' : ''}`}>
        <div className="relative overflow-hidden rounded-lg shadow-lg h-full">
          <img 
            src={article.image} 
            alt={article.title} 
            className={`w-full ${isFeatured ? 'h-96' : 'h-64'} object-cover transition duration-500 transform group-hover:scale-105`}
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
            <h3 className={`${isFeatured ? 'text-xl' : 'text-lg'} font-bold text-white mb-2`}>{article.title}</h3>
            <p className={`text-white text-opacity-80 mb-2 ${isFeatured ? '' : 'text-sm'}`}>{article.excerpt}</p>
            <span className={`${isFeatured ? 'text-sm' : 'text-xs'} text-blue-300`}>{article.date}</span>
          </div>
        </div>
      </div>
    );
  };    

  export default NewsCard;