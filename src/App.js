import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import { useReducer } from "react";
import TicketForm from "./components/TicketForm";
import ticketReducer from "./reducers/ticketReducer";
import TicketList from "./components/TicketList";
function App() {
  const initialState = { tickets: [] };
  const [state, dispatch] = useReducer(ticketReducer, initialState);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Bluster</h1>
        <TicketForm dispatch={dispatch}></TicketForm>

        {state.tickets.length > 0 && (
          <div className="result">
            <h2>All Tickets</h2>
            <TicketList
              tickets={state.tickets}
              dispatch={dispatch}
            ></TicketList>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
