import React from 'react';
import AutomationForm from './components/AutomationForm';
import RealTimeAutomation from './components/RealTimeAutomation';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Process Automation Dashboard</h1>
      <AutomationForm />
      <RealTimeAutomation />
    </div>
  );
}