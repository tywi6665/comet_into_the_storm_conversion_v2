import React, { useState } from 'react';
import Container from './Components/Containers/Container';
import 'react-tabs/style/react-tabs.css';
import './App.scss';
import Main from './Pages/Main';
import Inflow from './Pages/Inflow';
import Rainbands from "./Pages/Rainbands";
import Eye_Eyewall from "./Pages/Eye&eyewall";
import Outflow from './Pages/Outflow';

function App() {

  const [currentPage, setCurrentPage] = useState("Main")

  const renderCurrentPage = (page) => {
    let renderedPage;
    if (page === "Main") {
      renderedPage = <Main setCurrentPage={setCurrentPage} />
    } else if (page === "Inflow") {
      renderedPage = <Inflow setCurrentPage={setCurrentPage} />
    } else if (page === "Rainbands") {
      renderedPage = <Rainbands setCurrentPage={setCurrentPage} />
    } else if (page === "Eye&eyewall") {
      renderedPage = <Eye_Eyewall setCurrentPage={setCurrentPage} />
    } else if (page === "Outflow") {
      renderedPage = <Outflow setCurrentPage={setCurrentPage} />
    }
    return renderedPage
  }

  return (

    <Container>
      {renderCurrentPage(currentPage)}
    </Container>

  );
}

export default App;
