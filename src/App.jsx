import { useState } from "react";
import ActionLauncherSection from "../../frontend/src/components/ActionLauncherSection/index";
import AgentCardItem from "../../frontend/src/components/AgentCardItem/index";
import AgentMessanger from "../../frontend/src/components/AgentMessage/index";
import AgentsTopHeader from "../../frontend/src/components/AgentTopHeader/index";
import AskCaturaSection from "../../frontend/src/components/AskCaturaSection/index";
import CaseFavoriteSection from "../../frontend/src/components/CaseFavoriteSection/index";
import Sidebar from "../../frontend/src/components/Sidebar/index";
import Header from "../../frontend/src/components/Header/index";
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
