//----For-backup-purpose---This is news component with the api key of the NewspaperIcon.com----//

// import React, { useState, useEffect } from 'react';

// const NewsComponent = () => {
//   const [articles, setArticles] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNews = async () => {
//       setIsLoading(true);
      
//       const API_KEY = 'khOEgCQs50dZmiVVgbCw6vthRWMp2mD3j3kzvwLH';
//       const url = `https://api.thenewsapi.com/v1/news/top?api_token=${API_KEY}&locale=us&limit=10`;
  
//       try {
//         const response = await fetch(url);
        
//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || "Failed to fetch news");
//         }
  
//         const data = await response.json();
//         console.log(data); // Check the response structure
//         setArticles(data.data || []); // TheNewsAPI uses 'data' property
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error loading news:", error);
//         setError(error.message);
//         setIsLoading(false);
//       }
//     };
  
//     fetchNews();
//   }, []);

//   return (
//     <section className="news">
//       <h1 className='latest-news'>Latest News</h1>
//       <div id="news-container">
//         {isLoading && <p>Loading news...</p>}
//         {error && <p>Error: {error}</p>}
//         {!isLoading && !error && articles.length > 0 && (
//           <div className="articles-list">
//             {articles.map((article, index) => (
//               <div key={index} className="article" style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd' }}>
//                 {article.image_url && (
//                   <img 
//                     src={article.image_url} 
//                     alt={article.title} 
//                     style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
//                   />
//                 )}
//                 <h2>{article.title}</h2>
//                 <p>{article.description}</p>
//                 <a 
//                   href={article.url} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   style={{ color: '#0066cc' }}
//                 >
//                   Read more
//                 </a>
//                 <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
//                   {article.source} • {new Date(article.published_at).toLocaleDateString()}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//         {!isLoading && !error && articles.length === 0 && (
//           <p>No articles found.</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default NewsComponent;

import { useState, useEffect } from 'react';


const NewsComponent = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      
      const API_KEY = "55f88a4f4278689a1c50f08c427f0366";
      const url = `https://gnews.io/api/v4/top-headlines?token=${API_KEY}&lang=en&country=us&max=10`;

      try {
        const response = await fetch(url);
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch news");
        }

        const data = await response.json();
        console.log(data);
        setArticles(data.articles || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading news:", error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="news-section">
      <h1 className="news-title">Latest News</h1>
      
      <div className="news-container">
        {isLoading && (
          <div className="loading-container">
            <p className="loading-text">Loading news...</p>
          </div>
        )}
        
        {error && (
          <div className="error-container">
            <p>Error: {error}</p>
          </div>
        )}
        
        {!isLoading && !error && articles.length > 0 && (
          <div className="articles-grid">
            {articles.map((article, index) => (
              <div key={index} className="article-card">
                {article.image && (
                  <div className="article-image-container">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="article-image"
                    />
                  </div>
                )}
                
                <div className="article-content">
                  <h2 className="article-title">
                    {article.title}
                  </h2>
                  
                  <p className="article-description">
                    {article.description}
                  </p>
                  
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="read-more-link"
                  >
                    Read more →
                  </a>
                  
                  <div className="article-meta">
                    {article.source?.name} • {new Date(article.publishedAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {!isLoading && !error && articles.length === 0 && (
          <div className="no-articles">
            <p>No articles found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsComponent;