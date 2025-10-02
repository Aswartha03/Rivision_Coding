import { useEffect, useState } from "react";

import DataList from "./dataList";
import OfflineMessage from './message';
import { fetchPosts } from "../api";


const AppContent = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    if (isOnline) {
      fetchPosts().then(setData).catch(console.error);
    }
  }, [isOnline]);

  return (
    <div className="app">
      <h1>📡 Online/Offline API Demo</h1>
      {isOnline ? <DataList data={data} /> : <OfflineMessage />}
    </div>
  );
};

export default AppContent;
