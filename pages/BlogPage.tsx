import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../types';

interface BlogPageProps {
  posts: BlogPost[];
}

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2">
    <img src={post.image || `https://picsum.photos/400/250?random=${post.title}`} alt={post.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-serif font-bold text-brand-burgundy">{post.title}</h3>
      <p className="mt-3 text-brand-gray">{post.excerpt}</p>
      <Link to={post.link} className="mt-4 inline-block text-brand-rose-gold font-bold hover:text-brand-burgundy transition-colors">
        Read More &rarr;
      </Link>
    </div>
  </div>
);

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  return (
    <div className="py-20 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-burgundy">
            Insights for Senior Well-being
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-gray">
            A dedicated section to share informative articles on senior health, wellness tips, and valuable resources for family caregivers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <BlogPostCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;