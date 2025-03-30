

interface HeaderProps {
  socialLinks: {
    instagram: string;
    twitter: string;
    facebook: string;
    youtube: string;
  };
}

export const Header = ({ socialLinks }: HeaderProps) => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">AG1</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-blue-400">HOME</a></li>
            <li><a href="#" className="hover:text-blue-400">NEWS</a></li>
            <li><a href="#" className="hover:text-blue-400">BIOGRAPHY</a></li>
            <li><a href="#" className="hover:text-blue-400">STATS</a></li>
            <li><a href="#" className="hover:text-blue-400">GALLERY</a></li>
            <li><a href="#" className="hover:text-blue-400">CONTACT</a></li>
          </ul>
        </nav>
        <div className="flex space-x-4">

        </div>
      </div>
    </header>
  );
};