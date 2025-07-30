import { useState } from "react";
import "./Researchfield.css";

export default function Researchfield({ onFilter }) {
  const [tagNumber, setTagNumber] = useState("");
  const [selectedAntenna, setSelectedAntenna] = useState("All");
  const [isLoading, setIsLoading] = useState(false);

  const handleResearch = async () => {
    setIsLoading(true);

    try {
      // Create filter object for backend
      const filters = {
        tagNumber: tagNumber.trim(),
        antenna: selectedAntenna
      };

      // Call the parent function to fetch filtered data from backend
      await onFilter(filters);
    } catch (error) {
      console.error("Error during search:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleErase = async () => {
    setIsLoading(true);

    try {
      // Reset form fields
      setTagNumber("");
      setSelectedAntenna("All");

      // Clear all filters - load all logs
      await onFilter({ tagNumber: "", antenna: "All" });
    } catch (error) {
      console.error("Error during clear:", error);
    } finally {
      setIsLoading(false);
    }
  };

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
            placeholder="Enter tag data"
            value={tagNumber}
            onChange={(e) => setTagNumber(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Antenna</label>
          <select
            className="form-select"
            value={selectedAntenna}
            onChange={(e) => setSelectedAntenna(e.target.value)}
            disabled={isLoading}
          >
            <option>All</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div className="form-buttons">
          <button
            className="btn-search"
            onClick={handleResearch}
            disabled={isLoading}
          >
            {isLoading ? "Searching..." : "Research"}
          </button>
          <button
            className="btn-clear"
            onClick={handleErase}
            disabled={isLoading}
          >
            Erase
          </button>
        </div>
      </div>
    </div>
  );
}