/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Login from './screens/Login';
import SuperAdminSchools from './screens/SuperAdminSchools';
import AdminTeachers from './screens/AdminTeachers';
import TeacherTest from './screens/TeacherTest';

export type Screen = 'login' | 'superadmin-schools' | 'admin-teachers' | 'teacher-test';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <Login onNavigate={setCurrentScreen} />;
      case 'superadmin-schools':
        return <SuperAdminSchools onNavigate={setCurrentScreen} />;
      case 'admin-teachers':
        return <AdminTeachers onNavigate={setCurrentScreen} />;
      case 'teacher-test':
        return <TeacherTest onNavigate={setCurrentScreen} />;
      default:
        return <Login onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-sans selection:bg-primary/30 selection:text-primary">
      {renderScreen()}
    </div>
  );
}
