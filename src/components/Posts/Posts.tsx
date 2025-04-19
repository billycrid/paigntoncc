import { useState, useEffect, ReactNode } from "react";
import ReactMarkdown from 'react-markdown';

export const Posts = ({ children }: { children?: ReactNode }) => {
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
          {children ? (
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
          <div style={{ minHeight: '60px', color: 'black' }}>
            <ReactMarkdown>{post.intro}</ReactMarkdown>
          </div>
          {children && index !== posts.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
};
