import React, { useState } from 'react';
import { Youtube, Play, Bell, Search, TrendingUp, Video, Users, Eye, ThumbsUp, Mail, MapPin, Phone, Send, Award, Target, Heart, Zap, ExternalLink, Menu, X } from 'lucide-react';
// ovieshub
// About Page Component
function AboutPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white">
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-red-500/20 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => onNavigate('home')} className="flex items-center space-x-3">
              <Youtube className="w-10 h-10 text-red-500" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  MAKE SOMETHING DIFFERENT
                </h1>
              </div>
            </button>
            <nav className="hidden md:flex items-center space-x-6">
              <button onClick={() => onNavigate('home')} className="hover:text-red-400 transition">Home</button>
              <button onClick={() => onNavigate('about')} className="text-red-400">About</button>
              <button onClick={() => onNavigate('contact')} className="hover:text-red-400 transition">Contact</button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-40 h-40 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/50 animate-pulse">
              <Youtube className="w-20 h-20 text-white" />
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Our Story
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Inspiring creativity, one video at a time
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 hover:border-red-500/60 transition-all hover:scale-105">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-red-500/50">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-red-400">Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To empower creators worldwide by sharing innovative ideas, practical tutorials, and inspiring content that transforms imagination into reality. We believe everyone has the potential to make something different.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-900/40 to-yellow-900/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30 hover:border-orange-500/60 transition-all hover:scale-105">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-orange-500/50">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-orange-400">Our Vision</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To become the go-to platform for creators seeking unique perspectives and unconventional solutions. We envision a community where innovation thrives and creativity knows no bounds.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
            What We Create
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-red-500/20 hover:border-red-500/50 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-red-400">Tutorials</h4>
              <p className="text-gray-300">
                Step-by-step guides that break down complex projects into easy-to-follow instructions for creators of all skill levels.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-orange-400">DIY Projects</h4>
              <p className="text-gray-300">
                Innovative do-it-yourself projects that inspire you to create unique items and solutions using everyday materials.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-yellow-400">Reviews</h4>
              <p className="text-gray-300">
                Honest, in-depth reviews of tools, materials, and products that help creators make informed decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 backdrop-blur-sm rounded-2xl p-12 border border-red-500/30 mb-16">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-500/50">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-red-400">Passion</h4>
              <p className="text-gray-300 text-sm">
                We love what we do and it shows in every video
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/50">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-orange-400">Innovation</h4>
              <p className="text-gray-300 text-sm">
                Always pushing boundaries and trying new things
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-500/50">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-yellow-400">Community</h4>
              <p className="text-gray-300 text-sm">
                Building a supportive space for all creators
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-pink-500/50">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-pink-400">Excellence</h4>
              <p className="text-gray-300 text-sm">
                Committed to delivering high-quality content
              </p>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
            Our Journey
          </h3>
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  2020
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 flex-1 border border-red-500/20">
                <h4 className="text-xl font-bold mb-2 text-red-400">The Beginning</h4>
                <p className="text-gray-300">
                  Started with a simple idea: share creative projects that inspire others to think differently.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  2022
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 flex-1 border border-orange-500/20">
                <h4 className="text-xl font-bold mb-2 text-orange-400">Growth Phase</h4>
                <p className="text-gray-300">
                  Reached 100K subscribers and expanded content to include tutorials and reviews.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  2024
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 flex-1 border border-yellow-500/20">
                <h4 className="text-xl font-bold mb-2 text-yellow-400">Thriving Community</h4>
                <p className="text-gray-300">
                  Growing community of 500K+ subscribers making something different every day!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-900/60 to-orange-900/60 backdrop-blur-sm rounded-2xl p-12 border border-red-500/30">
            <h3 className="text-3xl font-bold mb-4 text-white">Join Our Journey</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Be part of our growing community and start making something different today!
            </p>
            <a
              href="https://www.youtube.com/@MAKESOMETHINGDIFFERENT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-10 py-4 rounded-full text-xl font-bold transition-all hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105"
            >
              <Bell className="w-6 h-6" />
              <span>Subscribe Now</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900/50 border-t border-red-500/20 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 MAKE SOMETHING DIFFERENT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Contact Page Component
function ContactPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white">
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-red-500/20 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => onNavigate('home')} className="flex items-center space-x-3">
              <Youtube className="w-10 h-10 text-red-500" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  MAKE SOMETHING DIFFERENT
                </h1>
              </div>
            </button>
            <nav className="hidden md:flex items-center space-x-6">
              <button onClick={() => onNavigate('home')} className="hover:text-red-400 transition">Home</button>
              <button onClick={() => onNavigate('about')} className="hover:text-red-400 transition">About</button>
              <button onClick={() => onNavigate('contact')} className="text-red-400">Contact</button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a question, collaboration idea, or just want to say hi? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 mb-8">
              <h3 className="text-3xl font-bold mb-6 text-red-400">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white">Email</h4>
                    <a href="mailto:contact@makesomethingdifferent.com" className="text-gray-300 hover:text-red-400 transition">
                      contact@makesomethingdifferent.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Youtube className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white">YouTube Channel</h4>
                    <a 
                      href="https://www.youtube.com/@MAKESOMETHINGDIFFERENT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-red-400 transition inline-flex items-center space-x-1"
                    >
                      <span>@MAKESOMETHINGDIFFERENT</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white">Location</h4>
                    <p className="text-gray-300">
                      Creating content from around the world
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/40 to-yellow-900/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30">
              <h3 className="text-2xl font-bold mb-6 text-orange-400">Connect With Us</h3>
              <p className="text-gray-300 mb-6">
                Follow us on social media for the latest updates, behind-the-scenes content, and community highlights!
              </p>
              <a
                href="https://www.youtube.com/@MAKESOMETHINGDIFFERENT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-6 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-red-500/50 hover:scale-105"
              >
                <Youtube className="w-5 h-5" />
                <span className="font-semibold">Visit Our Channel</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
            <h3 className="text-3xl font-bold mb-6 text-white">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-red-500/30 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-white placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-red-500/30 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-white placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-red-500/30 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-white placeholder-gray-500"
                  placeholder="Collaboration Opportunity"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-red-500/30 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-white placeholder-gray-500 resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-green-400">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 disabled:from-gray-600 disabled:to-gray-700 text-white py-4 rounded-lg flex items-center justify-center space-x-2 transition-all hover:shadow-lg hover:shadow-red-500/50 font-semibold text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-red-500/20">
              <h4 className="text-xl font-bold mb-2 text-red-400">How can I collaborate with you?</h4>
              <p className="text-gray-300">
                We're always open to collaborations! Send us a message through the contact form above with details about your project or idea.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20">
              <h4 className="text-xl font-bold mb-2 text-orange-400">Do you take video requests?</h4>
              <p className="text-gray-300">
                Yes! We love hearing from our community. Share your ideas in the comments on YouTube or send us a message here.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20">
              <h4 className="text-xl font-bold mb-2 text-yellow-400">Can I use your content for my project?</h4>
              <p className="text-gray-300">
                Please contact us with details about how you'd like to use our content, and we'll be happy to discuss permissions and attribution.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900/50 border-t border-red-500/20 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 MAKE SOMETHING DIFFERENT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Main Home Component
function HomePage({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getYouTubeVideoId = (url) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([\w-]+)/);
    return match ? match[1] : null;
  };

  const categories = [
    { id: 'all', name: 'All Videos', icon: Video },
    { id: 'trending', name: 'Trending', icon: TrendingUp },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'projects', name: 'DIY Projects' },
    { id: 'reviews', name: 'Reviews' },
  ];

  const videos = [
    {
      id: 1,
      videoUrl: 'https://youtu.be/eTFnRroIi6o?si=2WrXuCM57pfyF_RB',
      category: ['tutorials', 'trending'],
    },
    {
      id: 2,
      videoUrl: 'https://youtu.be/h65ACGyinxc?si=uCNbu5m2S-jY-N1A',
      category: ['projects', 'trending'],
    },
    {
      id: 3,
      videoUrl: 'https://youtu.be/xM797ZOX5ro?si=CFNEkvMIgoVEGEGT',
      category: ['tutorials'],
    },
    {
      id: 4,
      videoUrl: 'https://youtu.be/woRHjbfFP4E?si=tbepBInqfvoGXJig',
      category: ['reviews', 'trending'],
    },
    {
      id: 5,
      videoUrl: 'https://youtu.be/XFmkIKWi1Lw?si=JEnWZIwocoQs9LhD',
      category: ['projects'],
    },
    {
      id: 6,
      videoUrl: 'https://youtu.be/kAqeoWYGFg8?si=fES5VvIH5QXNhr87',
      category: ['tutorials'],
    },
    {
      id: 7,
      videoUrl: 'https://youtu.be/kOYqhG_Dbb8?si=_AKcG-uxWxrNS5-b',
      category: ['reviews'],
    },
    {
      id: 8,
      videoUrl: 'https://youtu.be/5o53oMUQvGc?si=HUWeAQce-Ezn7kDT',
      category: ['projects', 'trending'],
    },
    {
      id: 9,
      videoUrl: 'https://youtu.be/F5M35oKmerk?si=BNNRFwE8qtGKdyAq',
      category: ['tutorials'],
    },
    {
      id: 10,
      videoUrl: 'https://youtu.be/04VQZAaReoc?si=r0JY4LtuwUGEAOth',
      category: ['reviews', 'trending'],
    },
  ];

  const filteredVideos = videos.filter(video => {
    const matchesCategory = selectedCategory === 'all' || video.category.includes(selectedCategory);
    return matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-red-500/20 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Youtube className="w-10 h-10 text-red-500" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  MAKE SOMETHING DIFFERENT
                </h1>
                <p className="text-xs text-gray-400">YouTube Creator</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button onClick={() => onNavigate('home')} className="text-red-400 flex items-center space-x-1">
                <Video className="w-4 h-4" />
                <span>Videos</span>
              </button>
              <button onClick={() => onNavigate('about')} className="hover:text-red-400 transition flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>About</span>
              </button>
              <button onClick={() => onNavigate('contact')} className="hover:text-red-400 transition flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </button>
              <a 
                href="https://www.youtube.com/@MAKESOMETHINGDIFFERENT"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-6 py-2 rounded-full flex items-center space-x-2 transition-all hover:shadow-lg hover:shadow-red-500/50"
              >
                <Bell className="w-4 h-4" />
                <span className="font-semibold">Subscribe</span>
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
              <button onClick={() => onNavigate('home')} className="text-red-400 flex items-center space-x-2 py-2">
                <Video className="w-4 h-4" />
                <span>Videos</span>
              </button>
              <button onClick={() => onNavigate('about')} className="hover:text-red-400 transition flex items-center space-x-2 py-2">
                <Users className="w-4 h-4" />
                <span>About</span>
              </button>
              <button onClick={() => onNavigate('contact')} className="hover:text-red-400 transition flex items-center space-x-2 py-2">
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </button>
              <a 
                href="https://www.youtube.com/@MAKESOMETHINGDIFFERENT"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-600 to-orange-600 px-6 py-2 rounded-full flex items-center space-x-2 justify-center"
              >
                <Bell className="w-4 h-4" />
                <span className="font-semibold">Subscribe</span>
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-3xl"></div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="text-center mb-8">
            <div className="inline-block mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/50">
                <Youtube className="w-16 h-16 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-400 via-orange-500 to-red-400 bg-clip-text text-transparent">
              MAKE SOMETHING DIFFERENT
            </h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Creating unique content that inspires creativity and innovation. Join our community of makers and dreamers!
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-red-500/20">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-red-400" />
                  <div>
                    <p className="text-2xl font-bold text-red-400">500K+</p>
                    <p className="text-sm text-gray-400">Subscribers</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-red-500/20">
                <div className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-orange-400" />
                  <div>
                    <p className="text-2xl font-bold text-orange-400">10M+</p>
                    <p className="text-sm text-gray-400">Total Views</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-red-500/20">
                <div className="flex items-center space-x-2">
                  <Video className="w-5 h-5 text-yellow-400" />
                  <div>
                    <p className="text-2xl font-bold text-yellow-400">200+</p>
                    <p className="text-sm text-gray-400">Videos</p>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="https://www.youtube.com/@MAKESOMETHINGDIFFERENT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105"
            >
              <Youtube className="w-6 h-6" />
              <span>Visit YouTube Channel</span>
              <ExternalLink className="w-5 h-5" />
            </a>
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
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 shadow-lg shadow-red-500/50'
                    : 'bg-gray-800/50 hover:bg-gray-700/50 border border-red-500/20'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Videos Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map(video => {
            const videoId = getYouTubeVideoId(video.videoUrl);
            return (
              <div
                key={video.id}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500/20 hover:border-red-500/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
              >
                <div className="relative overflow-hidden aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`YouTube video ${video.id}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                
                <div className="p-4">
                  <a
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-4 py-2 rounded-lg transition-all hover:shadow-lg hover:shadow-red-500/50 text-sm font-semibold w-full justify-center"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-20">
            <Video className="w-16 h-16 mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400 text-xl">No videos found</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-red-500/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Youtube className="w-6 h-6 text-red-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              MAKE SOMETHING DIFFERENT
            </span>
          </div>
          <p className="text-gray-400 mb-2">
            Creating content that inspires innovation and creativity
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <button onClick={() => onNavigate('about')} className="text-gray-400 hover:text-red-400 transition">
              About
            </button>
            <button onClick={() => onNavigate('contact')} className="text-gray-400 hover:text-red-400 transition">
              Contact
            </button>
            <a
              href="https://www.youtube.com/@MAKESOMETHINGDIFFERENT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 transition inline-flex items-center space-x-1"
            >
              <span>Visit Channel</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 MAKE SOMETHING DIFFERENT. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Main App Component with Navigation
export default function ChannelWebsite() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'about') {
    return <AboutPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'contact') {
    return <ContactPage onNavigate={handleNavigate} />;
  }

  return <HomePage onNavigate={handleNavigate} />;
}
