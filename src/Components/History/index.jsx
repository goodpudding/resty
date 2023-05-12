import React from 'react';
import './History.scss';

function History({searchHistory}){
    return (
      <section>
        <h2>Search History</h2>
        {searchHistory.length > 0 ? (
          <ul>
            {searchHistory.map((search, index) => (
              <li key={index}>
                <p>Method: {search.method}</p>
                <p>URL: {search.url}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No Search History</p>
        )}
      </section>
    );
  }
  

export default History;
