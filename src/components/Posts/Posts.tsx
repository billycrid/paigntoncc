import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';

export const Posts = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const context = require.context('../../content/home-posts', false, /\.json$/);
      const loadedPosts = context.keys().filter((key) => {
        return !key.includes('example-post')
      }).map((key) => context(key));
      setPosts(loadedPosts);
    };

    loadPosts();
  }, []);

  if (posts.length === 0) {
    return null;
  }

  return (
    <div>
      {children}
      {children && <br />}
      {posts.map((post, index) => (
        <div key={index} style={children && { padding: '16px', paddingTop: 0}}>
          {children ? <h4>
            <a href={post.cta_link}>
              {post.headline}
            </a>
          </h4> : <div className="TitleMain">
            <h4>
              <a href={post.cta_link}>
                {post.headline}
              </a>
            </h4>
          </div>}
          <br />
          <div style={{ minHeight: '60px', color: 'black' }}>
            <ReactMarkdown>{post.intro}</ReactMarkdown>
          </div>
          {children && index !== (posts.length - 1) && <hr/>}
        </div>
      ))}
    </div>
  );
}