import React, { useState } from 'react'
import LeftNavBar from '../common/LeftNavBar/LeftNavBar'
import TopBar from '../common/TopBar/TopBar';
import Recruitment from '../../pages/Recruitment/Recruitment'
import Schedule from '../../pages/Schedule/Schedule';

function AppLayout() {

  const [activeTab, setActiveTab] = useState("Recruitment");

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <h1>This is Dashboard </h1>;
      case "Employee":
        return <h1>This is Employee </h1>;
      case "Recruitment":
        return <Recruitment />;
      case "Payroll":
        return <h1>This is Payroll </h1>;
      case "Schedule":
        return <Schedule />;
      case "Business & Marketing":
        return <h1>This is Business & Marketing </h1>;
      case "Design":
        return <h1>This is Design </h1>;
      case "Project Manager":
        return <h1>This is Project Manager </h1>;
      case "Human Resources":
        return <h1>This is Human Resources </h1>;
      case "Development":
        return <h1>This is Development </h1>;

      default:
        return <h1>This is Dashboard </h1>;
    }
  };

  return (
    <main className='flex'>
      <aside className='bg-white w-64 fixed overflow-y-auto hideScrollBar z-[100]'>
        <LeftNavBar setActiveTab={setActiveTab} activeTab={activeTab} />
      </aside>
      <section className='flex-grow contentWidth'>
        <div className='w-full py-[0.65rem] px-7 border-b border-stone-300 sticky top-0 bg-white z-50'>
          <TopBar />
        </div>
        <div className='p-7 bg-gray-100'>{renderContent()}</div>
      </section>
    </main>
  )
}

export default AppLayout