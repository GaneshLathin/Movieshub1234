    import React, { useState } from 'react';
import { Search, Download, Star, Calendar, Film, Home, TrendingUp, Clock, Menu, X, ArrowLeft, Play } from 'lucide-react';
import MovieDownloadPage from './MovieDownloadPage';
export default function MovieDownloadSite() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const categories = [
    { id: 'all', name: 'All Movies', icon: Film },
    { id: 'trending', name: 'Trending', icon: TrendingUp },
    { id: 'latest', name: 'Latest', icon: Clock },
    { id: 'tamil', name: 'Tamil' },
    { id: 'hindi', name: 'Hindi' },
    { id: 'english', name: 'English' },
    { id: 'telugu', name: 'Telugu' },
    { id: 'malayalam', name: 'Malayalam' }
  ];

  const movies = [
    {
      id: 1,
      title: 'Greedy People',
      year: '2024',
      rating: 8.8,
      language: ['English','Tamil','Hindi','Telugu'],
      image: 'https://content.gucca.dk/covers/400/g/r/greedy-people_664231.jpg',
      category: ['trending', 'english'],
      downloadLinks: [
        {
          quality: '1080p',
          codec: 'x264',
          audio: 'DTS-HD MA 5.1',
          size: '2.3GB',
          languages: ['English','Tamil','Hindi','Telugu'],
          type: 'BluRay',
          magnetLink: 'magnet:?xt=urn:btih:inception1080p',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143812&key=167fca95b848cb12aa26ba3416ebf1f5'
        },
        {
          quality: '720p',
          codec: 'x264',
          audio: 'DD 5.1',
          size: '1.3GB',
          languages: ['English','Tamil','Hindi','Telugu'],
          type: 'BluRay',
          magnetLink: 'magnet:?xt=urn:btih:inception720p',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143811&key=a30dbefe07522ddd86648e30f3799fa2'
        },
         {
          quality: 'BR-RIP',
          codec: 'x264',
          audio: 'DD 5.1',
          size: '450MB',
          languages: ['English','Tamil','Hindi','Telugu'],
          type: 'BluRay',
          magnetLink: 'magnet:?xt=urn:btih:inception720p',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143813&key=540bbacafe69ea3666de734f6663207c'
        }
      ]
    },
    {
      id: 2,
      title: 'Vikram',
      year: '2022',
      rating: 8.4,
      language: ['Tamil', 'Telugu', 'Hindi', 'Malayalam', 'Kannada'],
      image: 'https://e1.pxfuel.com/desktop-wallpaper/113/573/desktop-wallpaper-vikram-movie-kamal-haasan-vikram.jpg',
      category: ['tamil', 'trending'],
       downloadLinks: [
        {
          quality: '1080p',
          codec: 'x264',
          audio: 'DD+5.1 ATMOS - 768Kbps',
          size: '19GB',
          languages: 'Tamil(DTS) + Telugu + Kannada + Malayalam + Hindi',
          type: 'BluRay',
          magnetLink: 'magnet:?xt=urn:btih:7b18018d134dff833f6852f9b4abc71c8581b64a',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143770&key=e65e36efbc21b78b307865c1b20200bf'
        },
        {
          quality: '1080p',
          codec: 'x264',
          audio: 'DD+5.1 ATMOS - 768Kbps & AAC',
          size: '3.7GB',
          languages: 'Tamil',
          type: 'HQ BluRay',
          magnetLink: 'magnet:?xt=urn:btih:caa1f96fbc133988ffd861a1d10f1584f07d64c0',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143771&key=8d76c3c84d37e399bd8c7ff3a22731ed'
        },
        {
          quality: '1080p',
          codec: 'x264',
          audio: 'DD5.1 - 640Kbps & AAC',
          size: '3.3GB',
          languages: 'Tamil',
          type: 'HQ BluRay',
          magnetLink: 'magnet:?xt=urn:btih:88864f9bfe604f4b5bf6ed3c30157d077c59b53e',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143772&key=39c96b8cf5251e08e612b05a920e38fd'
        },
        {
          quality: '1080p',
          codec: 'HEVC x265',
          audio: 'DD+5.1 - 224Kbps & AAC',
          size: '1.8GB',
          languages: 'Tamil',
          type: 'HQ BluRay',
          magnetLink: 'magnet:?xt=urn:btih:df37cc657cdaf00959fdb93454e605e5ba99efab',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143773&key=3ec4bafba81ed433769e216951855365'
        },
        {
          quality: '720p',
          codec: 'x264',
          audio: 'DD+5.1 - 224Kbps & AAC',
          size: '1.4GB',
          languages: 'Tamil',
          type: 'HQ BluRay',
          magnetLink: 'magnet:?xt=urn:btih:346e968feab4fd4f686115f756fa0e7b2c9eafd4',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143774&key=38c8f5029cc18b4e4dea1d271ba7292e'
        },
        {
          quality: '720p',
          codec: 'HEVC x265',
          audio: 'DD+5.1 - 224Kbps & AAC',
          size: '1.2GB',
          languages: 'Tamil',
          type: 'HQ BluRay',
          magnetLink: 'magnet:?xt=urn:btih:df69e335b7adae6aa7a8a8696b53c3aea1db9772',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143775&key=c870ea8eaf6aa194989a133258201020'
        },
        {
          quality: 'BR-Rip',
          codec: 'x264',
          audio: 'AAC 2.0',
          size: '700MB',
          languages: 'Tamil',
          type: 'HQ BR-Rip',
          magnetLink: 'magnet:?xt=urn:btih:be26c1d64c8b47d6712ae51be49c53b730fcb136',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143776&key=bcc3e0bae2fce3ff30b187a2fbcd07d1'
        },
        {
          quality: 'BR-Rip',
          codec: 'x264',
          audio: 'AAC 2.0',
          size: '400MB',
          languages: 'Tamil',
          type: 'HQ BR-Rip',
          magnetLink: 'magnet:?xt=urn:btih:ef6914d69be018cb26bb79e22b98c144e5838cba',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143777&key=ea5b1c294da7627d3360f26688e707ab'
        }
      ]
    },
    {
      id: 3,
      title: 'Shinchan: Our Dinosaur Diary',
      year: '2025',
      rating: 8.0,
      language: ['Telugu', 'Tamil', 'Hindi', 'Malayalam','Japanese'],
      image: 'https://s.pacn.ws/1/p/191/crayon-shinchan-our-dinosaur-diary-jigsaw-puzzle-300-large-piece-810807.1.jpg?v=sfku6f',
      category: ['telugu', 'trending'],
      downloadLinks: [
        {
          quality: '1080p',
          codec: 'x264',
          audio: 'DD+5.1 ATMOS',
          size: '2.5GB',
          languages: 'Telugu + Tamil + Hindi + Malayalam + Japanese',
          type: 'BluRay',
          magnetLink: 'magnet:?xt=urn:btih:rrr1080pmulti',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143803&key=26f7e9a81578c748327bd7893b533bca'
        },
        {
          quality: '720p',
          codec: 'HEVC x265',
          audio: 'DD 5.1',
          size: '1.4GB',
          languages: 'Telugu + Tamil + Hindi + Malayalam + Japanese',
          type: 'HQ BluRay',
          magnetLink: 'magnet:?xt=urn:btih:rrr720phevc',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143802&key=552b7de66474e45e55705dac39226af1'
        },
        {
          quality: 'BR-RIP',
          codec: 'HEVC x265',
          audio: 'DD 5.1',
          size: '450MB',
          languages: 'Telugu + Tamil + Hindi + Malayalam + Japanese',
          type: 'HQ BluRay',
          magnetLink: 'magnet:?xt=urn:btih:rrr720phevc',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143804&key=05431f33d3e59e5f833b56006527c794'
        } 
      ]
    },
    {
      id: 4,
      title: 'Bison',
      year: '2025',
      rating: 7.5,
      language: ['Tamil'],
      image: 'https://assetscdn1.paytm.com/images/cinema/Bison---Gallery-0f6cd7d0-d81c-11ef-83bf-1dede4761f84.jpg',
      category: ['Tamil', 'latest'],
      downloadLinks: [
        {
          quality: '1080p',
          codec: 'x264',
          audio: 'DD+5.1',
          size: '6.4GB',
          languages: 'TAMIL',
          type: 'WEB-DL',
          magnetLink: 'magnet:?xt=urn:btih:pathaan1080p',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143745&key=bd9ee15af3610a4a2c3455215065a748'
        },
        {
          quality: '1080p',
          codec: 'x264',
          audio: 'DD+5.1',
          size: '3.1GB',
          languages: 'TAMIL',
          type: 'WEB-DL',
          magnetLink: 'magnet:?xt=urn:btih:pathaan1080p',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143747&key=e40af80e61538d7025ecf2d7c175bd05'
        },
        {
          quality: '720p',
          codec: 'x264',
          audio: 'AAC 2.0',
          size: '1.4GB',
          languages: 'TAMIL',
          type: 'WEB-DL',
          magnetLink: 'magnet:?xt=urn:btih:pathaan720p',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143746&key=121ae6905d16a204b361fd55d9b5c27e'
        },
        {
          quality: '720p',
          codec: 'x264',
          audio: 'AAC 2.0',
          size: '950MB',
          languages: 'TAMIL',
          type: 'WEB-DL',
          magnetLink: 'magnet:?xt=urn:btih:pathaan720p',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143748&key=93491d1f4d13162b7b47151128c27d3e'
        }
      ]
    },
    {
      id: 5,
      title: 'Diesel',
      year: '2025',
      rating: 7.5,
      language: ['Tamil'],
      image: 'https://static.moviecrow.com/gallery/20220919/205437-gi3.jpg',
      category: ['Tamil', 'latest'],
      downloadLinks: [
        {
          quality: '1080p',
          codec: 'x264',
          audio: 'DD+5.1',
          size: '5.3GB',
          languages: 'TAMIL',
          type: 'WEB-DL',
          magnetLink: 'magnet:?xt=urn:btih:pathaan1080p',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143682&key=ef6b192b2989dc14ff9241f7e0290871'
        },
        {
          quality: '1080p',
          codec: 'x264',
          audio: 'DD+5.1',
          size: '2.9GB',
          languages: 'TAMIL',
          type: 'WEB-DL',
          magnetLink: 'magnet:?xt=urn:btih:pathaan1080p',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143688&key=e790d1e2fb024f053b2bec48daf7efae'
        },
        {
          quality: '720p',
          codec: 'x264',
          audio: 'AAC 2.0',
          size: '1.4GB',
          languages: 'TAMIL',
          type: 'WEB-DL',
          magnetLink: 'magnet:?xt=urn:btih:pathaan720p',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143684&key=80af401a85570df3f40d64b2a32fea91'
        },
        {
          quality: '720p',
          codec: 'x264',
          audio: 'AAC 2.0',
          size: '950MB',
          languages: 'TAMIL',
          type: 'WEB-DL',
          magnetLink: 'magnet:?xt=urn:btih:pathaan720p',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143683&key=5004e21f0003c51a48509e7b144e4720'
        }
      ]
    },
    {
      id: 6,
      title: 'Dude',
      year: '2025',
      rating: 7.5,
      language: ['Tamil'],
      image: 'https://www.cinejosh.com/newsimg/newsmainimg/dude-boxoffice-collections_b_2010250258.jpg',
      category: ['Tamil', 'latest'],
      downloadLinks: [
        {
          quality: '1080p',
          codec: 'x264',
          audio: 'DD+5.1',
          size: '7.4GB',
          languages: 'TAMIL',
          type: 'WEB-DL',
          magnetLink: 'magnet:?xt=urn:btih:pathaan1080p',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143603&key=96a3de8a4e6e798055b93c14b88e4a60'
        },
        {
          quality: '1080p',
          codec: 'x264',
          audio: 'DD+5.1',
          size: '2.5GB',
          languages: 'TAMIL',
          type: 'WEB-DL',
          magnetLink: 'magnet:?xt=urn:btih:pathaan1080p',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143609&key=d3c7c810e33beb99a1c5c12f519c8175'
        },
        {
          quality: '720p',
          codec: 'x264',
          audio: 'AAC 2.0',
          size: '1.4GB',
          languages: 'TAMIL',
          type: 'WEB-DL',
          magnetLink: 'magnet:?xt=urn:btih:pathaan720p',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143607&key=1bdaecdaa6981a0784d815e9623f43c8'
        },
        {
          quality: '720p',
          codec: 'x264',
          audio: 'AAC 2.0',
          size: '950MB',
          languages: 'TAMIL',
          type: 'WEB-DL',
          magnetLink: 'magnet:?xt=urn:btih:pathaan720p',
          torrentLink: 'https://www.1tamilmv.rest/applications/core/interface/file/attachment.php?id=143608&key=8aedd5f67e2d7fd05cfa2ac16e874cf7'
        }
      ]
    },
   
  ];

  // If a movie is selected, show the download page with that movie's specific links
  if (selectedMovie) {
    return (
      <MovieDownloadPage
        movie={selectedMovie}
        onBack={() => setSelectedMovie(null)}
      />
    );
  }

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           movie.category.includes(selectedCategory) || 
                           movie.language.map(lang => lang.toLowerCase()).includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-purple-500/20 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Film className="w-8 h-8 text-purple-500" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                MovieHub
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="hover:text-purple-400 transition flex items-center space-x-1">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </a>
              <a href="#" className="hover:text-purple-400 transition flex items-center space-x-1">
                <TrendingUp className="w-4 h-4" />
                <span>Trending</span>
              </a>
              <a href="#" className="hover:text-purple-400 transition flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>Latest</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-2">
              <a href="#" className="hover:text-purple-400 transition flex items-center space-x-2 py-2">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </a>
              <a href="#" className="hover:text-purple-400 transition flex items-center space-x-2 py-2">
                <TrendingUp className="w-4 h-4" />
                <span>Trending</span>
              </a>
              <a href="#" className="hover:text-purple-400 transition flex items-center space-x-2 py-2">
                <Clock className="w-4 h-4" />
                <span>Latest</span>
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-3xl"></div>
        <div className="container mx-auto px-4 py-12 relative">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
              Download Latest Movies
            </h2>
            <p className="text-gray-300 text-lg">HD Quality • Fast Downloads • Multiple Languages</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-400 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full flex items-center space-x-2 transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/50'
                    : 'bg-gray-800/50 hover:bg-gray-700/50 border border-purple-500/20'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Movies Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMovies.map(movie => (
            <div
              key={movie.id}
              className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="relative overflow-hidden aspect-[2/3]">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded-lg flex items-center space-x-1 text-sm font-bold">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{movie.rating}</span>
                </div>
              
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition">
                  {movie.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{movie.year}</span>
                  </div>
                  <span className="text-purple-400">{movie.language.join(', ')}</span>
                </div>
                <button
                  onClick={() => setSelectedMovie(movie)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg flex items-center justify-center space-x-2 transition-all hover:shadow-lg hover:shadow-purple-500/50"
                >
                  <Download className="w-5 h-5" />
                  <span className="font-semibold">Download Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="text-center py-20">
            <Film className="w-16 h-16 mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400 text-xl">No movies found</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-purple-500/20 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="mb-2">© 2024 MovieHub. All rights reserved.</p>
          <p className="text-sm">Download movies for personal use only. Respect copyright laws.</p>
        </div>
      </footer>
    </div>
  );
}