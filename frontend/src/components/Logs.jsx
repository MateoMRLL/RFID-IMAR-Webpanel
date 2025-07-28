
import { useState } from 'react';
import './Logs.css';

const RFIDLogInterface = () => {
 const [hasEntries, setHasEntries] = useState(true);

 // Sample log entries data
 const logEntries = [
  {
   id: 'TAG002',
   label: 'Entrée principale',
   rssi: -48,
   readings: 15,
   duration: '3 ts',
   status: 'Active',
   timestamp: '15 janv. 2024, 10:15:45'
  },
  {
   id: 'TAG001',
   label: 'Entrée principale',
   rssi: -45,
   readings: 12,
   duration: '2.3s',
   status: 'Active',
   timestamp: '15 janv. 2024, 09:30:15'
  }
 ];

 const toggleView = () => {
  setHasEntries(!hasEntries);
 };

 return (
  <div className="container">
   {/* Header */}
   <div className="header">
    <div>
     <h1 className="title">Entrées de log</h1>
     <p className="subtitle">Historique des détections de tags RFID</p>
    </div>
    <div className="buttons">
     <button
      onClick={toggleView}
      className="btn-secondary"
     >
      Toggle View
     </button>
     <button className="btn-primary">
      {hasEntries ? 'Antenne 001 - Entrée principale' : 'Tous les résultats'}
     </button>
    </div>
   </div>

   {hasEntries ? (
    /* Log Entries View */
    <div className="entries">
     {logEntries.map((entry, index) => (
      <div key={entry.id} className="card">
       <div className="card-header">
        <div className="tag-info">
         <span className="tag-id">{entry.id}</span>
         <span className="tag-label">
          {entry.label}
         </span>
        </div>
        <span className="timestamp">{entry.timestamp}</span>
       </div>

       <div className="data-grid">
        <div>
         <span className="label">RSSI:</span>
         <div className="value">{entry.rssi} dBm</div>
        </div>
        <div>
         <span className="label">Lectures:</span>
         <div className="value">{entry.readings}</div>
        </div>
        <div>
         <span className="label">Durée:</span>
         <div className="value">{entry.duration}</div>
        </div>
        <div>
         <span className="label">Statut:</span>
         <div className="status">
          <div className="status-dot"></div>
          <span className="status-text">{entry.status}</span>
         </div>
        </div>
       </div>
      </div>
     ))}
    </div>
   ) : (
    /* Empty State View */
    <div className="empty-state">
     <div className="empty-icon">
      <FileText className="icon" />
     </div>
     <h2 className="empty-title">Aucun log à afficher</h2>
     <p className="empty-text">
      Entrez un numéro de tag ou sélectionnez une antenne pour voir les entrées de log
     </p>
    </div>
   )}
  </div>
 );
};

export default RFIDLogInterface;