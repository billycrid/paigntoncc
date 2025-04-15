import React, { useState, useEffect } from "react";

export const Posts = () => {
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
  
    return (
      <section>
        {posts.map((post, index) => (
          <div key={index}>
            <div className="TitleMain">
                <h4>
                    <a href={post.cta_link}>
                    {post.headline}
                    </a>
                </h4>
            </div>
            <br/>
            <div style={{minHeight: '60px', color: 'black'}}>
                {post.intro}
            </div>
          </div>
        ))}
      </section>
    );
}