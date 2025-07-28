import "./Researchfield.css";

export default function Researchfield() {
  return (
    <div className="researchfield">
      <div className="research-header">
        <div className="research-title">Research and filter</div>
        <div className="research-subtitle">Search logs by tag number or filter by antenna</div>
      </div>

      <div className="research-form">
        <div className="form-group">
          <label className="form-label">tag Number</label>
          <input
            type="text"
            className="form-input"
            placeholder="Enter id tag"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Antenna</label>
          <select className="form-select">
            <option>All</option>
            <option>Antenna 1</option>
            <option>Antenna 2</option>
          </select>
        </div>

        <div className="form-buttons">
          <button className="btn-search">Research</button>
          <button className="btn-clear">Erase</button>
        </div>
      </div>
    </div>
  );
}