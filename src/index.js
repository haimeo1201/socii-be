const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const routes = require("./routes/index");

const port = process.env.PORT;
const frontendPort = process.env.FRONTEND_URL;
app.use("/images", express.static("./public/image"));
app.use("/video", express.static("./public/video"));

app.use(
  cors({
    origin: [frontendPort],
    credentials: true,
  })
);

app.use(express.json());

routes(app);

app.listen(port, () => {
  console.log("listen at port " + port);
});
