import "./Card.css";

export default function Card({ log }) {
 // Format timestamp to readable date
 const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString('fr-FR', {
   day: '2-digit',
   month: 'short',
   year: 'numeric',
   hour: '2-digit',
   minute: '2-digit',
   second: '2-digit'
  });
 };

 // Extract tag ID from data (assuming it's the hex part after RB1)
 const extractTagId = (data) => {
  // Remove RB1 prefix and get meaningful part
  if (data.startsWith('RB1')) {
   return data.substring(3); // Remove RB1 prefix
  }
  return data;
 };

 return (
  <div className="card">
   <div className="header-card">
    <div className="header-left">
     <span className="tag-name">ID: {log.id}</span>
     <span className="entry-point">Antenna {log.antenna}</span>
    </div>
    <div className="date">{formatTimestamp(log.timestamp)}</div>
   </div>

   <div className="metrics-grid">
    <div className="metric">
     <span className="metric-label">Type:</span>
     <span className="metric-value">{log.data_type}</span>
    </div>
    <div className="metric">
     <span className="metric-label">Bytes:</span>
     <span className="metric-value">{log.byte_count}</span>
    </div>
    <div className="metric">
     <span className="metric-label">Antenna:</span>
     <span className="metric-value">{log.antenna}</span>
    </div>
   </div>

   <div className="data-section">
    <div className="data-row">
     <span className="data-label">Tag Data:</span>
     <span className="data-value">{extractTagId(log.data)}</span>
    </div>
    <div className="data-row">
     <span className="data-label">Raw Bytes:</span>
     <span className="data-value raw-bytes">{log.raw_bytes}</span>
    </div>
   </div>

   <div className="header-subtitle">
    <span className="header-subtitle-content">
     RFID tag detection from antenna {log.antenna} - {log.data_type}
    </span>
   </div>
  </div>
 );
}