import React, { useEffect, useRef, useCallback } from "react";
import ChangelogWidget from "changelog-widget";
import ChangelogSidebar from "changelog-sidebar";

const sidebar = new ChangelogSidebar({
  id: "PROJECT_ID",
  key: "INTEGRATION_KEY"
});

const SideBar = () => {
  const toggleChangelog = useCallback(() => {
    sidebar.toggle();
  }, []);

  return (
    <div>
      <button onClick={toggleChangelog}>Toggle Sidebar</button>
    </div>
  );
};

const Widget = () => {
  let ref = useRef();

  useEffect(() => {
    if (!ref.current) return;

    let wg = new ChangelogWidget({
      id: "PROJECT_ID",
      key: "INTEGRATION_KEY",
      element: ref.current
    });
    wg.toggle();

    return () => {
      wg.remove();
    };
  }, []);

  return (
    <div ref={ref}>
      <button>Toggle widget</button>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Widget />
      <SideBar />
    </div>
  );
}
