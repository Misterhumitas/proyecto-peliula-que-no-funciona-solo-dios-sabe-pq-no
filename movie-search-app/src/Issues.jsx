import React, { useState, useEffect } from "react";
import axios from "axios";

const IssuesList = () => {
  const [issues, setIssues] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://developer.imdb.com/");
      setLoading(false);
      setError(null);
    } catch (err) {
      setError("No se pudo cargar la pelicula. Intenta nuevamente.");
      setLoading(false);
    }
  };

  const filteredIssues = issues.filter(issue =>
    issue.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Lista de Issues</h1>
      <input
        type="text"
        placeholder="Buscar pelicula..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />
      {loading && <p>Cargando...</p>}
      {error && <p className="error-message">{error}</p>}
      <ul className="issues-list">
        {filteredIssues.map((issue) => (
          <li key={issue.id} className="issue-item">
            <h3>{issue.title}</h3>
            <p>{issue.description}</p>
            <a href={issue.link} target="_blank" rel="noopener noreferrer">
              Ver más detalles
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <IssuesList />
    </div>
  );
};

export default App;
