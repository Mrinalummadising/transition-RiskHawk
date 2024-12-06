import { useState } from "react";
import ActionLauncherSection from "../../frontend/src/components/ActionLauncherSection";
import AgentCardItem from "../../frontend/src/components/AgentCardItem";
import AgentMessanger from "../../frontend/src/components/AgentMessage";
import AgentsTopHeader from "../../frontend/src/components/AgentTopHeader";
import AskCaturaSection from "../../frontend/src/components/AskCaturaSection";
import CaseFavoriteSection from "../../frontend/src/components/CaseFavoriteSection";
import Sidebar from "../../frontend/src/components/Sidebar";
import Header from "../../frontend/src/components/Header";
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
