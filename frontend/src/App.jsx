import { useEffect, useState } from 'react';
import "./App.css";
import Card from "./components/Card";
import Researchfield from "./components/Researchfield";

const App = () => {
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to build API URL based on filters
  const buildApiUrl = (filters) => {
    const baseUrl = "http://localhost:3000";

    const hasTag = filters.tagNumber && filters.tagNumber !== "";
    const hasAntenna = filters.antenna && filters.antenna !== "All";

    // If BOTH filters are applied, use the combined search endpoint
    if (hasTag && hasAntenna) {
      const params = new URLSearchParams();
      params.append('tag', filters.tagNumber);
      params.append('antenna', filters.antenna);
      const url = `${baseUrl}/logs/search?${params.toString()}`;
      console.log("Combined search URL:", url);
      return url;
    }

    // If only tag filter
    if (hasTag) {
      const url = `${baseUrl}/logs/tag/${encodeURIComponent(filters.tagNumber)}`;
      console.log("Tag-only search URL:", url);
      return url;
    }

    // If only antenna filter
    if (hasAntenna) {
      const url = `${baseUrl}/logs/antenna/${filters.antenna}`;
      console.log("Antenna-only search URL:", url);
      return url;
    }

    // Default: get all logs
    console.log("Loading all logs");
    return `${baseUrl}/logs`;
  };

  // Function to fetch logs based on filters
  const fetchLogs = async (filters = { tagNumber: "", antenna: "All" }) => {
    setIsLoading(true);
    setError(null);

    try {
      const apiUrl = buildApiUrl(filters);
      console.log("Fetching from:", apiUrl);
      console.log("Applied filters:", filters);

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(`API returned ${data.length} results`);
      setLogs(data);

    } catch (err) {
      console.error("Error fetching logs:", err);
      setError(err.message);
      setLogs([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle filter from Researchfield component
  const handleFilter = async (filters) => {
    console.log("=== APPLYING FILTERS ===");
    console.log("Tag:", filters.tagNumber || "None");
    console.log("Antenna:", filters.antenna || "All");
    await fetchLogs(filters);
  };

  // Load all logs on component mount
  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="app-container">
      <Researchfield onFilter={handleFilter} />

      {/* Loading state */}
      {isLoading && (
        <div className="loading-state">
          <p>Loading logs...</p>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="error-state">
          <p>Error: {error}</p>
          <button onClick={() => fetchLogs()}>Retry</button>
        </div>
      )}

      {/* Results info */}
      {!isLoading && !error && (
        <div className="results-info">
          {logs.length} log(s) found
        </div>
      )}

      {/* Cards container */}
      {!isLoading && !error && (
        <div className="cards-container">
          {logs.length > 0 ? (
            logs.map(log => (
              <Card key={`${log.id}-${log.timestamp}`} log={log} />
            ))
          ) : (
            <div className="no-results">
              No logs found matching your criteria.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;