import React, { useEffect, useRef, useCallback } from "react";
import ChangelogWidget from "changelog-widget";
import ChangelogSidebar from "changelog-sidebar";

const sidebar = new ChangelogSidebar({
  key: "IK-jFLnip_HY-72CQf4H3cr",
  id: "DnVDiFOFE"
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
  let buttonRef = useRef();

  useEffect(() => {
    if (!buttonRef.current) return;

    let wg = new ChangelogWidget({
      id: "DnVDiFOFE",
      key: "IK-jFLnip_HY-72CQf4H3cr",
      element: buttonRef.current
    });

    return () => {
      wg.remove();
    };
  }, []);

  return (
    <div>
      <button ref={buttonRef}>Toggle widget</button>
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
