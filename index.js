import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

function endpoint(req) {
  let type = "";
  let participants = "";

  if (req.body.type === "" && req.body.participants === "") {
    return `random`;
  } else {
    switch (req.body.type) {
      case "education":
        type = "type=education";
        break;
      case "charity":
        type = "type=charity";
        break;
      case "recreational":
        type = "type=recreational";
        break;
      case "busywork":
        type = "type=busywork";
        break;
      case "social":
        type = "type=social";
        break;
      case "diy":
        type = "type=diy";
        break;
      case "music":
        type = "type=music";
        break;
      default:
        type = "";
    }

    switch (req.body.participants) {
      case "1":
        participants = "participants=1";
        break;
      case "2":
        participants = "participants=2";
        break;
      case "3":
        participants = "participants=3";
        break;
      case "4":
        participants = "participants=4";
        break;
      default:
        participants = "";
    }

    return `filter?${type}&${participants}`; ///filter?type=social&participants=3
  }
}

function random(int) {
  return Math.floor(Math.random() * int);
}

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    console.log(result);
    res.render("index.ejs", {
      activity: result.activity,
      type: result.type,
      participants: result.participants,
      error: null,
    });
  } catch (error) {
    console.error("No activities that match your criteria.", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  try {
    const endpointUrl = `https://bored-api.appbrewery.com/${endpoint(req)}`;
    console.log("Endpoint URL:", endpointUrl);

    const response = await axios.get(endpointUrl);
    const result = response.data;
    const randomNumber = random(result.length);

    console.log("Request Data:", req.body);
    console.log("API Response:", result);

    res.render("index.ejs", {
      activity: result[randomNumber].activity || "No activity available",
      type: result[randomNumber].type || "No type available",
      participants: result[randomNumber].participants || "Unknown",
      error: null,
    });
  } catch (error) {
    console.error("No activities that match your criteria.", error.message);
    res.render("index.ejs", {
      error: "No activities that match your criteria.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
