const GalleryItem = ({ item }: { item: { id: number; image: string; title: string; } }) => {
    return (
      <div className="group relative overflow-hidden rounded-lg shadow-lg">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-64 object-cover transition duration-500 transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <h3 className="text-white text-lg font-bold">{item.title}</h3>
        </div>
      </div>
    );
  };
  
  // Gallery Section Component
  const GallerySection = ({ gallery }: { gallery: { id: number; image: string; title: string; }[] }) => {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">PHOTOS AND VIDEOS</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map(item => (
              <GalleryItem key={item.id} item={item} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-sm font-semibold transition duration-300">
              VIEW ALL
            </a>
          </div>
        </div>
      </section>
    );
  };

  export default GallerySection;