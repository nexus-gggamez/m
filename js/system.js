// Utility: Detect browser name/version
function getBrowserInfo() {
    const ua = navigator.userAgent;
    if (ua.indexOf("Firefox") > -1) return "Firefox " + ua.match(/Firefox\/([0-9\.]+)/)[1];
    if (ua.indexOf("Edg") > -1) return "Edge " + ua.match(/Edg\/([0-9\.]+)/)[1];
    if (ua.indexOf("Chrome") > -1) return "Chrome " + ua.match(/Chrome\/([0-9\.]+)/)[1];
    if (ua.indexOf("Safari") > -1 && ua.indexOf("Chrome") === -1) return "Safari " + ua.match(/Version\/([0-9\.]+)/)[1];
    return ua.split(" ")[0];
  }
  
  // Utility: Detect device type
  function getDeviceType() {
    if (/Mobile|Android|iP(hone|od|ad)|IEMobile|BlackBerry|webOS/i.test(navigator.userAgent)) return "Mobile";
    if (/Tablet|iPad/i.test(navigator.userAgent)) return "Tablet";
    return "Desktop";
  }
  
  // OS Info
  function getOSInfo() {
    const p = navigator.platform || "Unknown";
    if (/Win/i.test(p)) return "Windows";
    if (/Mac/i.test(p)) return "MacOS";
    if (/Linux/i.test(p)) return "Linux";
    if (/Android/i.test(navigator.userAgent)) return "Android";
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) return "iOS";
    return p;
  }
  
  // Time info
  function getTimeStr() {
    return new Date().toLocaleString();
  }
  
  document.getElementById('browserValue').textContent = getBrowserInfo();
  document.getElementById('deviceValue').textContent = getDeviceType();
  document.getElementById('osValue').textContent = getOSInfo();
  document.getElementById('screenValue').textContent = `${window.screen.width} x ${window.screen.height}`;
  document.getElementById('timeValue').textContent = getTimeStr();
  setInterval(() => {
    document.getElementById('timeValue').textContent = getTimeStr();
  }, 5000);
  
  // Battery Info
  const batteryValue = document.getElementById('batteryValue');
  if ('getBattery' in navigator) {
    navigator.getBattery().then(battery => {
      function updateBattery() {
        batteryValue.textContent =
          `Level: ${Math.round(battery.level * 100)}% | Charging: ${battery.charging ? "Yes" : "No"}`;
      }
      updateBattery();
      battery.addEventListener('levelchange', updateBattery);
      battery.addEventListener('chargingchange', updateBattery);
    });
  } else {
    batteryValue.textContent = "N/A";
  }
  
  // Network Info
  const networkValue = document.getElementById('networkValue');
  if ('connection' in navigator) {
    const conn = navigator.connection;
    function updateNetwork() {
      networkValue.textContent =
        `Type: ${conn.type || "?"} | Down: ${conn.downlink}Mbps`;
    }
    updateNetwork();
    conn.addEventListener('change', updateNetwork);
  } else {
    networkValue.textContent = "N/A";
  }
  
  // IP Address (uses public API, can swap for local test/demo IP)
  fetch("https://api.ipify.org?format=json").then(r=>r.json()).then(data=>{
    document.getElementById('ipValue').textContent = data.ip;
  }).catch(()=>{document.getElementById('ipValue').textContent = "N/A";});
  
  // Location (use test/demo data, do not ask permission; show full address, lat/lon, Google Maps link)
  const lat = 40.712776, lon = -74.005974; // Example: New York City
  document.getElementById('locationValue').textContent = `Lat: ${lat.toFixed(6)}, Lon: ${lon.toFixed(6)}`;
  document.getElementById('addressValue').textContent = "350 5th Ave, New York, NY 10118, USA";
  document.getElementById('mapsLink').innerHTML =
    `<a href="https://maps.google.com/?q=${lat},${lon}" target="_blank">View on Google Maps</a>`;