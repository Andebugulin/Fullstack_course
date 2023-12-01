import { useState } from "react";

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }
  if (message.includes("addition")) {
    return <div className="notification-addition">{message}</div>;
  } else if (message.includes("removal")) {
    return <div className="notification-removal">{message}</div>;
  } else if (message.includes("change")) {
    return <div className="notification-change">{message}</div>;
  } else {
    return <div className="error">{message}</div>;
  }
};

export default Notification;
