import React from 'react';
import AccountSyntax from './components/Tools/AccountSyntax'
import NavBar from './components/NavBar/NavBar'
import ToolWindow from './components/ToolWindow/ToolWindow'
import styled from 'styled-components'

function App() {
  return (
    <div className="">
      <NavBar />
      <ToolWindow />
      <AccountSyntax />
    </div>
  );
}

export default App;
