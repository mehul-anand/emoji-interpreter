import { useState } from "react";
import "./styles.css";

var headingText = "Emoji Interpretor";
var colorPrim = "lightgreen";
var colorBg = "orange";
// var userName = prompt("Give me your Name");
var userName = "Mehul";

var emojiDictionary = {
  "⌚": "watch",
  "💎": "gem stone",
  "📱": "smart phone",
  "💻": "laptop",
  "🔮": "crystal ball",
  "📌": "pin",
  "🔔": "bell",
  "📓": "notebook",
  "🗿": "moyai",
  "📷": "camera"
};
var emojis = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("Emojis we know");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else if (userInput == "") {
      setMeaning("Enter an emoji");
    } else {
      setMeaning("This emoji does not exist in our database 🙁");
    }
  }
  function emojiClickHandler(item) {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: colorPrim }}>{headingText}</h1>
      <input
        placeholder={"Search your emoji"}
        onChange={emojiInputHandler}
        style={{ padding: "0.8rem" }}
      ></input>
      <h3>{meaning}</h3>
      {emojis.map(function (item) {
        return (
          <span
            onClick={() => emojiClickHandler(item)}
            style={{
              fontSize: "2rem",
              padding: "1.5rem",
              marginBottom: "1rem"
            }}
            key={item}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
