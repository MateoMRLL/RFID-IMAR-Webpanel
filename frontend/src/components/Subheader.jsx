import "./Subheader.css";

export default function Subheader() {
 return (
  <div className="subheader">
   <div className="subheader-update">
    <div className="update-indic">
     <div className="green-light">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="circle-icon"><circle cx="12" cy="12" r="10" /></svg>
     </div>
     <span className="update-indic-text"> Online</span>
    </div>
    <div className="antennas-infos">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="antenna-icon"><path d="M4 10a7.31 7.31 0 0 0 10 10Z" /><path d="m9 15 3-3" /><path d="M17 13a6 6 0 0 0-6-6" /><path d="M21 13A10 10 0 0 0 11 3" /></svg>
     <span className="antennas-infos-text">numbers of antennas</span>
    </div>
   </div>
  </div>
 )
} 