import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import StoriesPage from './components/StoriesPage';
import StoryDetailPage from './components/StoryDetailPage';
import BlogPage from './components/BlogPage';
import BlogPostPage from './components/BlogPostPage';
import BibliographyPage from './components/BibliographyPage';
import TimelinePage from './components/TimelinePage';

function App() {
  return (
    <BrowserRouter basename="/GlobalAsian">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            
            {/* Stories routes */}
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/stories/:slug" element={<StoryDetailPage />} />
            
            {/* Blog routes */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/blog/category/:category" element={<BlogPage />} />
            <Route path="/blog/tag/:tag" element={<BlogPage />} />
            
            <Route path="/bibliography" element={<BibliographyPage />} />
            
            {/* 404 route - redirect to home for now */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;