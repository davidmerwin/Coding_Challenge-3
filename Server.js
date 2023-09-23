const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

app.post("/message", async (req, res) => {
  const { text } = req.body;

  const watsonResponse = await axios.post(
    "WATSON_API_URL",
    {
      input: { text },
      assistantId: "YOUR_ASSISTANT_ID",
      sessionId: "YOUR_SESSION_ID",
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer YOUR_API_KEY`,
      },
    }
  );

  res.json(watsonResponse.data);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
