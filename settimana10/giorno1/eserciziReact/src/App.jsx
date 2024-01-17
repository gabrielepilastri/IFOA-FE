import { useState } from "react";

function App() {
  const [appointments, setAppointments] = useState(0);

  const reloadList = () => {
    setAppointments(data)
  }

  return (
    <section>
      <div className="container">
        <h2 style={{color: "var(--bg-blue)"}}>Prossimi Appuntamenti</h2>
        <div className="people-list">

        </div>
        <div className="btn-group">
          <button className="btn btn-reset" onClick={reloadList}>Ricarica Lista</button>
          <button className="btn btn-delete" onClick={() => setAppointment([])}>Cancella Tutto</button>
        </div>
      </div>
    </section>
  );
}

export default App;
