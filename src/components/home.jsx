import React, { useState, useEffect } from 'react';
import './styles.css'; 

const NewsComponent = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [isGridView, setIsGridView] = useState(false);

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=fede78c0d19c49859326d80daaeaaea7';
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setLatestNews(data.articles || []);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchLatestNews();
  }, []);

  const changeView = () => {
    setIsGridView(!isGridView);
  };

  const getNewsContainerStyle = () => {
    if (isGridView) {
      return gridStyle;
    } else {
      return listStyle;
    }
  };

  return (
    <div className="NewsComponent">
      <h1>Latest News</h1>
      <div className="view-buttons">
        <button onClick={changeView}>{isGridView ? "List View" : "Grid View"}</button>
      </div>
      <div className="news-container" style={getNewsContainerStyle()}>
        {latestNews.map((article, index) => (
          <div key={index} className='news'>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <button onClick={() => window.open(article.url, '_blank')}>Get More Info</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const listStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '20px',
};

export default NewsComponent;
