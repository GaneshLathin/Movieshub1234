import React, { useState } from 'react';
import { Search, Download, Star, Calendar, Film, Home, TrendingUp, Clock, Menu, X, ArrowLeft } from 'lucide-react';

// Movie Download Page Component
function MovieDownloadPage({ movie, onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-purple-500/20 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 hover:text-purple-400 transition"
            >
              <ArrowLeft className="w-6 h-6" />
              <span>Back</span>
            </button>
            <div className="flex items-center space-x-2">
              <Film className="w-8 h-8 text-purple-500" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                MovieHub
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Movie Details Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Movie Poster */}
          <div className="md:col-span-1">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-2 rounded-lg flex items-center space-x-1 text-lg font-bold">
                <Star className="w-5 h-5 fill-current" />
                <span>{movie.rating}</span>
              </div>
            </div>
          </div>

          {/* Movie Info */}
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {movie.title}
            </h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center space-x-2 text-gray-300">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span className="text-lg">{movie.year}</span>
              </div>
              <div className="px-4 py-1 bg-purple-600 rounded-full text-lg">
                {movie.language}
              </div>
              <div className="px-4 py-1 bg-pink-600 rounded-full text-lg">
                {movie.quality}
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">About {movie.title}</h2>
              <p className="text-gray-300 leading-relaxed">
                Experience {movie.title} in stunning high definition. Multiple quality options available
                to suit your preferences and bandwidth requirements. Download now and enjoy!
              </p>
            </div>
          </div>
        </div>

        {/* Download Links Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Available Downloads for {movie.title}
          </h2>
          <div className="grid gap-4">
            {movie.downloadLinks.map((link, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-purple-600 rounded-full text-sm font-semibold">
                        {link.quality}
                      </span>
                      <span className="px-3 py-1 bg-pink-600 rounded-full text-sm font-semibold">
                        {link.codec}
                      </span>
                      <span className="px-3 py-1 bg-blue-600 rounded-full text-sm font-semibold">
                        {link.size}
                      </span>
                      <span className="px-3 py-1 bg-green-600 rounded-full text-sm font-semibold">
                        {link.type}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">
                      <span className="font-semibold text-purple-400">Audio:</span> {link.audio}
                    </p>
                    <p className="text-gray-300 text-sm">
                      <span className="font-semibold text-purple-400">Languages:</span> {link.languages}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={link.magnetLink}
                      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg flex items-center space-x-2 transition-all hover:shadow-lg hover:shadow-purple-500/50"
                    >
                      <Download className="w-5 h-5" />
                      <span className="font-semibold">Magnet</span>
                    </a>
                    <a
                      href={link.torrentLink}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg flex items-center space-x-2 transition-all hover:shadow-lg hover:shadow-blue-500/50"
                    >
                      <Download className="w-5 h-5" />
                      <span className="font-semibold">Torrent</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
          <h3 className="text-xl font-bold mb-4 text-purple-400">Download Instructions</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Click on your preferred quality and size</li>
            <li>Use the Magnet link with your torrent client (uTorrent, BitTorrent, etc.)</li>
            <li>Or download the .torrent file and open it with your torrent client</li>
            <li>Wait for the download to complete and enjoy!</li>
          </ol>
        </div>
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
export default MovieDownloadPage