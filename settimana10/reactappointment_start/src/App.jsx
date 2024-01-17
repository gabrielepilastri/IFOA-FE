import { Component } from 'react'
import data from './data'
import List from './components/List'


class App extends Component {
  state = {
    appointments: data,
  }

  reloadList = () => appointments.setState(data);

  removeAppointment = (id) => {
    this.setState((prevState) => ({
      appointments: prevState.appointments.filter((item) => item.id !== id),
    }));
  };

  render() {
    return(
      <section>
      <div className="container">
        <h2 style={{ color: "var(--bg-blue)" }}>Prossimi Appuntamenti</h2>
        <div className="people-list">
          <List data={this.state.appointments} removeAppointment={this.removeAppointment} />
        </div>
        <div className="btn-group">
          <button className="btn btn-reset" onClick={this.reloadList}>Ricarica Lista</button>
          <button className="btn btn-delete" onClick={() => setAppointments([])}>Cancella Tutto</button>
        </div>
      </div>
  </section>
    )
  }
}




// function App() {

//   const [appointments, setAppointments] = useState(data)

//   const reloadList = () => {
//     setAppointments(data)
//   }

//   const removeAppointment = (id) => {
//     setAppointments((actualAppointments) => actualAppointments.filter((item) => item.id !== id));
//   }


//   return (
//     <section>
//         <div className="container">
//           <h2 style={{ color: "var(--bg-blue)" }}>Prossimi Appuntamenti</h2>
//           <div className="people-list">
//             <List data={appointments} removeAppointment={removeAppointment} />
//           </div>
//           <div className="btn-group">
//             <button className="btn btn-reset" onClick={reloadList}>Ricarica Lista</button>
//             <button className="btn btn-delete" onClick={() => setAppointments([])}>Cancella Tutto</button>
//           </div>
//         </div>
//     </section>
//   )
// }

export default App