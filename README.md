# emoji-interpreter
### A web app made using React JS which interprets emojis

## Contents 
- Header
- Input Box
- Output div
- List of Emojis

## Working
-  we have a header where we used `style={{ backgroundColor: colorPrim }}>`
-  Here `colorPrim` is a variable unlike VanilaJS where we use use `style.backgroundColor=""` or in css where we use `h1{background-color:}`
This is because React is **declarative** unlike VanilaJS which is **imperative**
### When user gives the input
- Here we are using `<input>` tag to take the user's input
- we are also using a `placeholder` and `onChange`
- `onChange` to call a function which will take the input ftom the `input` box using `event.target.value` whenever something chnages in the input box
- then we check wether this input is in our dictionary(the emoji dictionary) or not and then use conditional programming to tell wether the meaning of the emoji if it is in our database or not using `set`
### To dsiplay the list of the emojis
- First we will take out all the emojis(keys) from the emoji dictionary we made
- To do this we will use `Object.keys` 👇
`var emojis = Object.keys(emojiDictionary);`
- Now we have a list of emojis which were the keys in our emoji dictionary
- Here we will `map` to access the elements in emojis list and then use this function in `map` to display all the emojis using the `<span>` tag
- All these emojis are clickable i.e we are using `onClick` to call a function which will tell us the meaning of the emoji that the user clicked
### When user clicks on the emojis available
- Here we are using `<span>` tag [a generic inline container for phrasing content like div]
- we are using `onClick` which will call a function whenever an emoji is clicked
- here we are using `emojiDictionary[item]` here item is the emoji we(user) clicked and we are using `[]` to access the `key` to find their respective `value`
- then using `set` we will display the meaning of the emoji
### Display the Meaning
- Here we used `var [meaning, setMeaning] = useState("Emojis we know");` 
- Here `meaning` is a **parameter** and `setMeaning` will be used to **update the meaning**
- by default `meaning` will have have the same value as in the `()` 👉 `useState(here)`
- then to update the meaning we can use `setMeaning(meaning);`
### Resources
- [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
- [onChange](https://www.w3schools.com/jsref/event_onchange.asp)
- [onClick](https://www.w3schools.com/jsref/event_onclick.asp)
- [useState and set](https://stackoverflow.com/questions/53165945/what-is-usestate-in-react)
- [event.target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) 
- [value](https://developer.mozilla.org/en-US/docs/Glossary/Value)
- [span](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)


