import { useEffect, useState } from "react";

const BatteryStatus = () => {
  const [batteryLevel, setBatteryLevel] = useState(100);
  const [isCharging, setIsCharging] = useState(false);

  useEffect(() => {
    let battery;

    const updateBattery = (bat) => {
      setBatteryLevel(Math.round(bat.level * 100));
      setIsCharging(bat.charging);

      bat.addEventListener("levelchange", () => setBatteryLevel(Math.round(bat.level * 100)));
      bat.addEventListener("chargingchange", () => setIsCharging(bat.charging));
    };

    if (navigator.getBattery) {
      navigator.getBattery().then((bat) => {
        battery = bat;
        updateBattery(battery);
      });
    } else {
      console.warn("Battery API not supported. Using mock data.");
      let mockLevel = 75;
      let mockCharging = false;
      setBatteryLevel(mockLevel);
      setIsCharging(mockCharging);

      const interval = setInterval(() => {
        mockLevel = Math.max(0, mockLevel - 1);
        setBatteryLevel(mockLevel);
      }, 5000);
      return () => clearInterval(interval);
    }

    return () => {
      if (battery) {
        battery.removeEventListener("levelchange", () => {});
        battery.removeEventListener("chargingchange", () => {});
      }
    };
  }, []);

  return (
    <div className="battery-status">
      <h2>🔋 Battery Status</h2>
      <p>Battery Level: {batteryLevel}%</p>
      <p>
        Charging Status:{" "}
        {isCharging ? (
          <span className="charging">⚡ Charging</span>
        ) : (
          "Not Charging"
        )}
      </p>

      {batteryLevel < 20 && !isCharging && (
        <p className="warning">🔴 Low Battery! Please charge.</p>
      )}
    </div>
  );
};

export default BatteryStatus;
