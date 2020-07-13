import React, { useEffect, useRef } from "react";
import ChangelogWidget from "changelog-widget";

const Widget = () => {
  let ref = useRef();

  useEffect(() => {
    if (!ref.current) return;

    let wg = new ChangelogWidget({
      id: "bBqkizOw_",
      key: "IK-qOU1AGLD5-_bXF3JsB7S",
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
