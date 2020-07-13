import React, { useEffect, useRef } from "react";
import ChangelogWidget from "changelog-widget";
<<<<<<< HEAD
import ChangelogSidebar from "changelog-sidebar";

const sidebar = new ChangelogSidebar({
  key: "",
  id: ""
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
=======
>>>>>>> b3bec75f172c2422a7bfdb796dfae711ca59cc32

const Widget = () => {
  let ref = useRef();

  useEffect(() => {
    if (!ref.current) return;

    let wg = new ChangelogWidget({
      id: "DnVDiFOFE",
      key: "IK-jFLnip_HY-72CQf4H3cr",
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
    </div>
  );
}
