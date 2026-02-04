import { useState, useEffect, ReactNode } from "react";
import ReactMarkdown from 'react-markdown';

export const Posts = ({ children, mode = 'teaser' }: { children?: ReactNode; mode?: 'teaser' | 'full' }) => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const modules = import.meta.glob('../../content/home-posts/*.json');
      const importedPosts = await Promise.all(
        Object.entries(modules).map(async ([path, importer]) => {
          if (path.includes('example-post')) return null;
          const mod: any = await importer();
          return mod.default || mod;
        })
      );

      // Filter out nulls from skipped example-posts
      const filteredPosts = importedPosts.filter(Boolean);
      setPosts(filteredPosts);
    };

    loadPosts();
  }, []);

  if (posts.length === 0) return null;

  return (
    <div>
      {children}
      {children && <br />}
      {posts.map((post, index) => (
        <div key={index} style={children ? { padding: '16px', paddingTop: 0 } : {}}>
          {mode === 'full' ? (
            <h4>{post.headline}</h4>
          ) : children ? (
            <h4>
              <a href={post.cta_link}>{post.headline}</a>
            </h4>
          ) : (
            <div className="TitleMain">
              <h4>
                <a href={post.cta_link}>{post.headline}</a>
              </h4>
            </div>
          )}
          <br />
          <div style={mode === 'full' ? { color: 'black' } : { minHeight: '60px', color: 'black' }}>
            <ReactMarkdown
              components={{
                img: ({ src, alt }) => (
                  <img src={src} alt={alt} style={{ width: '300px', display: 'block', margin: '0 auto' }} />
                )
              }}
            >
              {mode === 'full' ? (post.full_content || post.intro) : (post.short_post || post.intro)}
            </ReactMarkdown>
          </div>
          {mode === 'teaser' && post.full_content && (
            <>
              <br />
              <br />
              <div className='continueReading'>
                <a href={post.cta_link}>Continue reading...</a>
              </div>
            </>
          )}          {children && index !== posts.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
};
