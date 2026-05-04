const axios = require("axios");

const SERVICE_A_URL = process.env.SERVICE_A_URL || "http://localhost:5000";

async function poll() {
  try {
    const res = await axios.get(`${SERVICE_A_URL}/data`);
    console.log("Received:", res.data);
  } catch (err) {
    console.error("Error fetching data:", err.message);
  }
}

// Run every 10 seconds
setInterval(poll, 10000);

// Run immediately on start
poll();
