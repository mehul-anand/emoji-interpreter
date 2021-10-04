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
- `onChange` to call a function which will take the input ftom the `input` box using `event.target.value`
- then we check wether this input is in our dictionary(the emoji dictionary) or not and then use conditional programming to tell wether the meaning of the emoji if it is in our database or not
### When user clicks on the emojis available


