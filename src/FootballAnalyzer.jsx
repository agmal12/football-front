import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFutbol, FaSearch, FaUser, FaBars, FaTimes, FaUpload, FaChartLine, FaVideo } from 'react-icons/fa';
import { GiSoccerBall, GiSoccerKick, GiAmericanFootballPlayer, GiTennisBall, GiBaseballBat } from 'react-icons/gi';

// Navbar Component
const Navbar = ({ activeSport, setActiveSport }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sports = [
    { name: 'Football', icon: <GiSoccerBall className="mr-2" /> },
    { name: 'Basketball', icon: <FaFutbol className="mr-2" /> },
    { name: 'Tennis', icon: <GiTennisBall className="mr-2" /> },
    { name: 'Baseball', icon: <GiBaseballBat className="mr-2" /> },
    { name: 'American Football', icon: <GiAmericanFootballPlayer className="mr-2" /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
  scrolled ? 'bg-[#0D1117] shadow-lg backdrop-blur-md' : 'bg-transparent'
}`}

    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              className="mr-2"
            >
              <GiSoccerBall className="h-8 w-8 text-green-500" />
            </motion.div>
            <motion.span 
              className="text-xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
            >
              SPORTS<span className="text-green-500">ANALYTICS</span>
            </motion.span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center text-white hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
                  <span>{activeSport}</span>
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-[#161B22] py-1 hidden group-hover:block"
                >
                  {sports.map((sport) => (
                    <motion.a
                      key={sport.name}
                      whileHover={{ x: 5 }}
                      href="#"
                      onClick={() => setActiveSport(sport.name)}
                      className={`flex items-center px-4 py-2 text-sm ${activeSport === sport.name ? 'text-green-500' : 'text-gray-300 hover:text-white'}`}
                    >
                      {sport.icon}
                      {sport.name}
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                <FaChartLine className="inline mr-2" />
                Analysis
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                <FaVideo className="inline mr-2" />
                Tutorials
              </motion.a>

              <motion.div 
                whileHover={{ width: 200 }}
                className="relative"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-[#161B22] text-white pl-10 pr-4 py-2 rounded-full w-32 focus:w-48 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="ml-4 flex items-center"
              >
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full"
                  />
                  <FaUser className="h-6 w-6 text-gray-300 hover:text-white" />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#161B22] overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {sports.map((sport) => (
                <motion.a
                  key={sport.name}
                  whileHover={{ x: 10 }}
                  href="#"
                  onClick={() => {
                    setActiveSport(sport.name);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${activeSport === sport.name ? 'bg-[#0D1117] text-green-500' : 'text-gray-300 hover:bg-[#0D1117] hover:text-white'}`}
                >
                  {sport.icon}
                  {sport.name}
                </motion.a>
              ))}
              
              <motion.a
                whileHover={{ x: 10 }}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-[#0D1117] hover:text-white"
              >
                <FaChartLine className="inline mr-2" />
                Analysis
              </motion.a>

              <motion.a
                whileHover={{ x: 10 }}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-[#0D1117] hover:text-white"
              >
                <FaVideo className="inline mr-2" />
                Tutorials
              </motion.a>

              <div className="relative mt-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-[#0D1117] text-white pl-10 pr-4 py-2 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Main App Component
export default function SportsAnalyticsApp() {
  const [activeSport, setActiveSport] = useState('Football');
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [outputVideoURL, setOutputVideoURL] = useState('');
  const [activeTab, setActiveTab] = useState('Upload');
  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    // Animate features in after component mounts
    const timer = setTimeout(() => {
      setShowFeatures(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      document.getElementById('file-input-label').classList.add('animate-pulse');
      setTimeout(() => {
        document.getElementById('file-input-label').classList.remove('animate-pulse');
      }, 1000);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setProcessing(true);
    setUploadProgress(10);

    const steps = [30, 50, 70, 85, 95, 100];
    steps.forEach((step, i) => {
      setTimeout(() => {
        setUploadProgress(step);
        if (step === 100) {
          setTimeout(() => {
            setProcessing(false);
            setOutputVideoURL('https://example.com/output_video.mp4');
            setActiveTab('Result');
          }, 500);
        }
      }, i * 600);
    });
  };

  const features = [
    {
      icon: <GiSoccerBall className="h-10 w-10 text-green-500" />,
      title: "Advanced Tracking",
      description: "Precise player and ball tracking with AI technology"
    },
    {
      icon: <FaChartLine className="h-10 w-10 text-green-500" />,
      title: "Performance Metrics",
      description: "Detailed stats and analytics for every play"
    },
    {
      icon: <FaVideo className="h-10 w-10 text-green-500" />,
      title: "Video Analysis",
      description: "Break down game footage with our powerful tools"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0E14] to-[#161B22] text-white pt-16">
      <Navbar activeSport={activeSport} setActiveSport={setActiveSport} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600"
          >
            {activeSport} Performance Analytics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Transform your game with our AI-powered {activeSport.toLowerCase()} analysis platform. Upload your footage and get professional-level insights.
          </motion.p>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <button 
              onClick={() => document.getElementById('analysis-section').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg"
            >
              Start Analyzing Now
            </button>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Powerful Features
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={showFeatures ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[#1E242D] p-8 rounded-xl shadow-lg border border-gray-800"
              >
                <div className="text-center mb-4">
                  <motion.div
                    whileHover={{ rotate: 20, scale: 1.1 }}
                    className="inline-block"
                  >
                    {feature.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Analysis Section */}
        <section id="analysis-section" className="bg-[#1E242D] rounded-xl shadow-xl p-6 md:p-8 border border-gray-800">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold mb-8 flex items-center"
          >
            <GiSoccerBall className="mr-3 text-green-500" />
            {activeSport} Video Analysis
          </motion.h2>
          
          <div className="bg-[#161B22] rounded-lg overflow-hidden">
            <div className="flex border-b border-gray-800">
              <button
                onClick={() => setActiveTab('Upload')}
                className={`px-6 py-3 font-medium ${activeTab === 'Upload' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-400 hover:text-white'}`}
              >
                <FaUpload className="inline mr-2" />
                Upload Video
              </button>
              <button
                onClick={() => setActiveTab('Result')}
                className={`px-6 py-3 font-medium ${activeTab === 'Result' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-400 hover:text-white'}`}
              >
                <FaChartLine className="inline mr-2" />
                Analysis Results
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'Upload' ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div>
                    <label 
                      id="file-input-label"
                      htmlFor="file-upload"
                      className="flex flex-col items-center justify-center w-full p-12 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer hover:border-green-500 transition-all duration-300 bg-[#0D1117]"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="mb-4"
                      >
                        <FaUpload className="h-12 w-12 text-gray-400" />
                      </motion.div>
                      <p className="mb-2 text-lg text-gray-300">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-sm text-gray-500">
                        MP4, AVI (Max. 500MB)
                      </p>
                      <input 
                        id="file-upload" 
                        type="file" 
                        accept="video/*" 
                        onChange={handleFileChange} 
                        className="hidden" 
                      />
                    </label>
                    {selectedFile && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-gray-300 mt-2 flex items-center justify-between"
                      >
                        <span>Selected: {selectedFile.name}</span>
                        <span className="text-green-500">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</span>
                      </motion.div>
                    )}
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="w-full"
                  >
                    <button 
                      onClick={handleUpload}
                      disabled={!selectedFile || processing}
                      className={`w-full py-3 px-6 rounded-lg font-bold ${!selectedFile || processing ? 'bg-gray-700 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'} transition-all duration-300 flex items-center justify-center`}
                    >
                      {processing ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <GiSoccerBall className="mr-3" />
                          Analyze {activeSport} Video
                        </>
                      )}
                    </button>
                  </motion.div>
                  
                  {processing && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="overflow-hidden"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-300">Progress</span>
                        <span className="text-sm font-medium text-green-500">{uploadProgress}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2.5">
                        <motion.div 
                          initial={{ width: '0%' }}
                          animate={{ width: `${uploadProgress}%` }}
                          transition={{ duration: 0.5 }}
                          className="bg-green-600 h-2.5 rounded-full"
                        />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key={outputVideoURL ? 'video-loaded' : 'no-video'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mt-2"
                >
                  {outputVideoURL ? (
                    <div className="space-y-6">
                      <div className="relative rounded-lg overflow-hidden">
                        <video 
                          controls 
                          className="w-full"
                          poster="https://via.placeholder.com/800x450/1E242D/FFFFFF?text=Your+Analysis+Results"
                        >
                          <source src={outputVideoURL} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-[#0D1117] p-4 rounded-lg border border-gray-800">
                          <h4 className="font-bold text-green-500 mb-2">Player Statistics</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex justify-between"><span>Distance Covered:</span> <span>8.2 km</span></li>
                            <li className="flex justify-between"><span>Top Speed:</span> <span>32.5 km/h</span></li>
                            <li className="flex justify-between"><span>Pass Accuracy:</span> <span>87%</span></li>
                          </ul>
                        </div>
                        
                        <div className="bg-[#0D1117] p-4 rounded-lg border border-gray-800">
                          <h4 className="font-bold text-green-500 mb-2">Team Performance</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex justify-between"><span>Possession:</span> <span>62%</span></li>
                            <li className="flex justify-between"><span>Shots on Target:</span> <span>8</span></li>
                            <li className="flex justify-between"><span>Corners:</span> <span>5</span></li>
                          </ul>
                        </div>
                        
                        <div className="bg-[#0D1117] p-4 rounded-lg border border-gray-800">
                          <h4 className="font-bold text-green-500 mb-2">Key Moments</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex justify-between"><span>Best Chance:</span> <span>72'</span></li>
                            <li className="flex justify-between"><span>Defensive Error:</span> <span>34'</span></li>
                            <li className="flex justify-between"><span>Turnover:</span> <span>58'</span></li>
                          </ul>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => setActiveTab('Upload')}
                        className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                      >
                        Analyze Another Video
                      </button>
                    </div>
                  ) : (
                    <div className="p-12 text-center border-2 border-dashed border-gray-700 rounded-lg bg-[#0D1117]">
                      <FaVideo className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                      <h3 className="text-xl font-medium text-gray-300 mb-2">No Analysis Results Yet</h3>
                      <p className="text-gray-500 mb-6">Upload and process a {activeSport.toLowerCase()} video to see detailed analytics</p>
                      <button 
                        onClick={() => setActiveTab('Upload')}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300"
                      >
                        Upload Video
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block"
          >
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg">
              Get Professional Analysis
            </button>
          </motion.div>
          <p className="text-gray-400 mt-4">Join thousands of coaches and athletes improving their game</p>
        </section>
      </main>

      <footer className="bg-[#0D1117] mt-20 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <GiSoccerBall className="h-8 w-8 text-green-500 mr-2" />
                <span className="text-xl font-bold">SPORTS<span className="text-green-500">ANALYTICS</span></span>
              </div>
              <p className="text-gray-400 mt-4 text-sm">Revolutionizing sports performance through AI-powered analytics.</p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-green-500 text-sm">Football Analytics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-500 text-sm">Basketball Analytics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-500 text-sm">Tennis Analytics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-500 text-sm">Team Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-green-500 text-sm">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-500 text-sm">Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-500 text-sm">API Reference</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-500 text-sm">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-green-500 text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-500 text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-500 text-sm">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-500 text-sm">Blog</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2023 SportsAnalytics. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-500">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748 1.857.344.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};