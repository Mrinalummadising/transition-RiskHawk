import { useState } from "react";
import ActionLauncherSection from "../src/components/ActionLauncherSection";
import AgentCardItem from "../src/components/AgentCardItem";
import AgentMessanger from "../src/components/AgentMessage";
import AgentsTopHeader from "../src/components/AgentTopHeader";
import AskCaturaSection from "../src/components/AskCaturaSection";
import CaseFavoriteSection from "../src/components/CaseFavoriteSection";
import Sidebar from "../src/components/Sidebar";
import Header from "../src/components/Header";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const onClickToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="app-container">
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div className="home-page-main-container">
        <Header onClickToggleSidebar={onClickToggleSidebar} />
        <div className="home-page-body-container">
          <AgentsTopHeader />
          <div className="home-page-sections">
            <AgentCardItem />
            <AgentMessanger />
            <div className="home-advance-features-section">
              <AskCaturaSection />
              <ActionLauncherSection />
              <CaseFavoriteSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
