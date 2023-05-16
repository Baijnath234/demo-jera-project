import React from 'react';
import logo from './logo.svg';
import './App.css';
import  {Button}  from './stories/Button';
import { Header } from './stories/Header';
import { CheckBox } from './stories/Checkbox';
function App() {
  return (
    <div className="App">
     <Header
  onCreateAccount={() => {}}
  onLogin={() => {}}
  onLogout={() => {}}
  user={{
    name: 'Jane Doe'
  }}
/>
<Button
  label="Button"
  onClick={() => {}}
  primary
/>
<CheckBox
  checked
  label="CheckBox label"
  onChange={() => {}}
/>
    </div>
  );
}

export default App;
