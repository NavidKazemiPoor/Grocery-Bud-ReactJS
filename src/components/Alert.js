import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
const Alert = () => {
  const {
    alert: { msg, show, type: alert_type },
    list,
    removeTime,
  } = useGlobalContext();
  useEffect(() => {
    const time = setTimeout(() => {
      removeTime();
    }, 3000);
    return () => {
      clearTimeout(time);
    };
  }, [list]);
  return (
    <div className={`${show ? "alert success " + alert_type : "alert hide"}`}>
      {msg}
    </div>
  );
};

export default Alert;
