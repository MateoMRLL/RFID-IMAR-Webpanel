import './Logs.css';

export default function LogEntry({ entry }) {
 const statusClass = entry.status.toLowerCase(); // 'active' or 'inactive'

 return (
  <div className="entry">
   <div className="entry-header">
    <a href="#">{entry.tag}</a>
    <span className={`status ${statusClass}`}>
     <span className="dot"></span> {entry.status}
    </span>
   </div>
   <div className="location">{entry.location}</div>
   <div className="entry-body">
    <div><strong>RSSI:</strong> {entry.rssi}</div>
    <div><strong>Lectures:</strong> {entry.reads}</div>
    <div><strong>Durée:</strong> {entry.duration}</div>
   </div>
   <div className="timestamp">
    {new Date(entry.timestamp).toLocaleString("fr-FR")}
   </div>
  </div>
 );
}
