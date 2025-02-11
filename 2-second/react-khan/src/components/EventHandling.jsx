import React from 'react'

export const EventHandling = () => {
    const handleChangeOne=(e)=>{
       console.log(e)
       console.log(e.target)
       console.log(e.target.value)
    }

    const passingArgument=(arg)=>{
      console.log(`Hey user ${arg}`)
    }
  return (
    <>
    {/* <input type="text" name="nam" id="inp"  onChange={handleChangeOne}/>
    <button>Click me</button> */}
     {/* get more info of above code in section one */}
     <input style={{background:"white",borderWidth:"2px"}} type="text" name="nam" id="inp"  onChange={()=>{console.log(event.target.value)}}/>
     {/* The event object is still accessible inside the arrow function, but this is not a good practice. Here's why it works:
      in this way object is comming from global even object,which is available in broser javascript elemenet.but this is not good method*/}
      {/* good is */}
      {/* <input style={{background:"white",borderWidth:"2px"}} type="text" name="nam" id="inp"  onChange={(event)=>{console.log(event.target.value)}}/> */}
       {/* get more explaination from below in section third*/}
        {/* passing argument to the function */}
        <button style={{color:"white",background:"red"}} onClick={()=>passingArgument("ali")}>Inline arrow function</button>
        {/* why we can't write  like onClick={passingArgument("ali")} for passing argument. answer is n section 4*/}
        {/* Why Not Just Write onClick={passingArgument("ali")}?
If you write:

<button onClick={passingArgument("ali")}>Click Me</button>
Here’s what happens:

When the component renders, React sees onClick={passingArgument("ali")}.

React immediately runs passingArgument("ali") because you’re calling the function directly.

The result of passingArgument("ali") (which is likely undefined) is assigned to onClick.

When the button is clicked, nothing happens because onClick is now undefined.

This is not what you want. You want passingArgument("ali") to run only when the button is clicked, not during rendering. */}

{/* Key Points to Remember
Inline Arrow Function:
() => passingArgument("ali") creates a function that "holds" the code passingArgument("ali").

This function is only called when the button is clicked.

Direct Function Call:

passingArgument("ali") runs immediately during rendering, which is not what you want for an event handler.

Event Handlers Need a Function:
onClick Event Handlers expects a function to call when the button is clicked. The inline arrow function provides that function.

Use () => passingArgument("ali") to create a function that runs passingArgument("ali") only when the button is clicked.
*/}
    </>
  )
}



// notes  by deepseek
// section one
// React event handlers are functions that are triggered in response to specific events, such as clicks, input changes, form submissions, etc. They allow you to handle user interactions and update the UI dynamically. In this explanation, I'll break down React event handlers in detail so you can understand them thoroughly.

// ---

// ### 1. **What are Event Handlers in React?**
// Event handlers in React are similar to event listeners in plain JavaScript. However, React provides a synthetic event system that wraps the native browser events, making them consistent across different browsers.

// - **Synthetic Events**: React normalizes events so they work the same way across all browsers.
// - **Naming Convention**: Event handlers are written in camelCase (e.g., `onClick`, `onChange`, `onSubmit`).

// ---

// ### 2. **Common Event Handlers**
// Here are some commonly used event handlers in React:

// | Event Handler      | Description                                                                 |
// |--------------------|-----------------------------------------------------------------------------|
// | `onClick`          | Triggered when an element is clicked.                                       |
// | `onChange`         | Triggered when the value of an input, select, or textarea changes.         |
// | `onSubmit`         | Triggered when a form is submitted.                                        |
// | `onMouseEnter`     | Triggered when the mouse pointer enters an element.                        |
// | `onMouseLeave`     | Triggered when the mouse pointer leaves an element.                        |
// | `onKeyDown`        | Triggered when a key is pressed down.                                      |
// | `onFocus`          | Triggered when an element receives focus.                                  |
// | `onBlur`           | Triggered when an element loses focus.                                     |

// ---

// ### 3. **How to Use Event Handlers**
// Event handlers are passed as props to React elements. You can define them inline or as separate functions.

// #### Example 1: Inline Event Handler
// ```jsx
// function App() {
//   return (
//     <button onClick={() => alert('Button clicked!')}>
//       Click Me
//     </button>
//   );
// }
// ```

// #### Example 2: Separate Function as Event Handler
// ```jsx
// function App() {
//   const handleClick = () => {
//     alert('Button clicked!');
//   };

//   return (
//     <button onClick={handleClick}>
//       Click Me
//     </button>
//   );
// }
// ```

// ---

// ### 4. **Passing Arguments to Event Handlers**
// If you need to pass arguments to an event handler, you can use an arrow function.

// #### Example:
// ```jsx
// function App() {
//   const handleClick = (message) => {
//     alert(message);
//   };

//   return (
//     <button onClick={() => handleClick('Hello, React!')}>
//       Click Me
//     </button>
//   );
// }
// ```

// ---

// ### 5. **Event Object**
// React passes a synthetic event object to the event handler. This object contains information about the event, such as the target element, event type, etc.

// #### Example:
// ```jsx
// function App() {
//   const handleChange = (event) => {
//     console.log('Input value:', event.target.value);
//   };

//   return (
//     <input type="text" onChange={handleChange} />
//   );
// }
// ```

// ---

// ### 6. **Binding `this` in Class Components**
// In class components, you need to bind `this` to access the component's state and props.

// #### Example:
// ```jsx
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { message: 'Hello' };
//     this.handleClick = this.handleClick.bind(this); // Bind `this`
//   }

//   handleClick() {
//     alert(this.state.message);
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         Click Me
//       </button>
//     );
//   }
// }
// ```

// Alternatively, you can use an arrow function to avoid binding:
// ```jsx
// class App extends React.Component {
//   state = { message: 'Hello' };

//   handleClick = () => {
//     alert(this.state.message);
//   };

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         Click Me
//       </button>
//     );
//   }
// }
// ```

// ---

// ### 7. **Preventing Default Behavior**
// Some events, like form submissions, have default behavior (e.g., page reload). You can prevent this using `event.preventDefault()`.

// #### Example:
// ```jsx
// function App() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert('Form submitted!');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// ```

// ---

// ### 8. **Conditional Event Handling**
// You can conditionally execute logic inside an event handler based on certain conditions.

// #### Example:
// ```jsx
// function App() {
//   const handleClick = (event) => {
//     if (event.shiftKey) {
//       alert('Shift key was held while clicking!');
//     } else {
//       alert('Regular click!');
//     }
//   };

//   return (
//     <button onClick={handleClick}>
//       Click Me
//     </button>
//   );
// }
// ```

// ---

// ### 9. **Best Practices**
// - **Keep Event Handlers Small**: Move complex logic outside the event handler to keep your code clean.
// - **Avoid Inline Arrow Functions in Render**: Inline arrow functions can cause unnecessary re-renders. Define the function outside the render method.
// - **Use Functional Components and Hooks**: With React hooks (`useState`, `useEffect`), you can manage state and side effects without class components.

// ---

// ### 10. **Example: Full Component with Event Handlers**
// Here’s a complete example demonstrating multiple event handlers:

// ```jsx
// import React, { useState } from 'react';

// function App() {
//   const [inputValue, setInputValue] = useState('');
//   const [message, setMessage] = useState('');

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setMessage(`You typed: ${inputValue}`);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleChange}
//           placeholder="Type something..."
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default App;
// ```

// ---

// ### Summary
// - React event handlers are functions that respond to user interactions.
// - Use camelCase for event handler names (e.g., `onClick`, `onChange`).
// - Pass event handlers as props to React elements.
// - Use the synthetic event object to access event details.
// - Prevent default behavior with `event.preventDefault()`.
// - Use functional components and hooks for modern React development.

// Let me know if you need further clarification or examples! 🚀



// Q:- How event working?
// ans:-Sure! Let me break it down for you in simple words so you can understand it clearly.

// ---

// ### **What is the Event Object?**
// When an event (like a click, typing, etc.) happens in React, React creates a special object called the **"event object"**. This object contains all the details about the event, such as:
// - What element triggered the event (e.g., an input field, button, etc.).
// - What type of event happened (e.g., `click`, `change`, etc.).
// - Any additional data related to the event (e.g., the value typed in an input field).

// In React, this event object is called a **"synthetic event"** because React wraps the native browser event into its own event system to make it consistent across all browsers.

// ---

// ### **How Does It Work?**
// Let’s look at the example you provided:

// ```jsx
// function App() {
//   const handleChange = (event) => {
//     console.log('Input value:', event.target.value);
//   };

//   return (
//     <input type="text" onChange={handleChange} />
//   );
// }
// ```

// Here’s what’s happening step by step:

// 1. **An Input Field is Rendered**:
//    - The `<input>` element is displayed on the screen. It’s a text box where the user can type something.

// 2. **User Types in the Input Field**:
//    - When the user types something in the input field, the `onChange` event is triggered. This event fires every time the value of the input changes (e.g., with every keystroke).

// 3. **React Passes the Event Object**:
//    - When the `onChange` event is triggered, React automatically creates an **event object** and passes it to the `handleChange` function.

// 4. **Accessing the Event Object**:
//    - Inside the `handleChange` function, the event object is available as the first argument (`event` in this case).
//    - The event object has a property called `target`, which refers to the element that triggered the event (in this case, the `<input>` element).
//    - The `event.target.value` gives the current value of the input field (what the user typed).

// 5. **Logging the Input Value**:
//    - In this example, `console.log('Input value:', event.target.value)` prints the value of the input field to the console every time the user types something.

// ---

// ### **Key Points to Understand**
// 1. **`event.target`**:
//    - This refers to the element that triggered the event. In this case, it’s the `<input>` element.

// 2. **`event.target.value`**:
//    - This gives the current value of the input field. For example, if the user types "hello", `event.target.value` will be `"hello"`.

// 3. **Why Use the Event Object?**
//    - The event object helps you get information about the event and the element that triggered it. This is useful for handling user input, validating forms, or updating the UI dynamically.

// ---

// ### **Example Walkthrough**
// Let’s say the user types "React" in the input field. Here’s what happens:

// 1. User types "R" → `onChange` fires → `event.target.value` is `"R"`.
// 2. User types "e" → `onChange` fires → `event.target.value` is `"Re"`.
// 3. User types "a" → `onChange` fires → `event.target.value` is `"Rea"`.
// 4. This continues until the user finishes typing "React".

// At each step, `console.log('Input value:', event.target.value)` will print:
// ```
// Input value: R
// Input value: Re
// Input value: Rea
// Input value: Reac
// Input value: React
// ```

// ---

// ### **Why is This Useful?**
// - You can use the event object to:
//   - Get user input from forms.
//   - Validate input (e.g., check if the input is empty or meets certain criteria).
//   - Update the state of your component dynamically as the user types.

// ---

// ### **Another Example**
// Here’s a slightly modified example to show how you can use the event object to update the state in a React component:

// ```jsx
// import React, { useState } from 'react';

// function App() {
//   const [inputValue, setInputValue] = useState('');

//   const handleChange = (event) => {
//     setInputValue(event.target.value); // Update state with the input value
//   };

//   return (
//     <div>
//       <input type="text" onChange={handleChange} placeholder="Type something..." />
//       <p>You typed: {inputValue}</p>
//     </div>
//   );
// }

// export default App;
// ```

// #### How It Works:
// 1. The `inputValue` state stores the current value of the input field.
// 2. When the user types, `handleChange` is called, and `event.target.value` is used to update the `inputValue` state.
// 3. The updated value is displayed below the input field in real-time.

// ---

// ### **Summary**
// - The **event object** is automatically passed to event handlers in React.
// - It contains information about the event, such as the element that triggered it (`event.target`) and the value of the input (`event.target.value`).
// - You can use the event object to handle user input, update state, or perform other actions based on the event.

// Let me know if you have more questions or need further clarification! 😊



// section third
// Great question! Let me explain why the code you provided works and why it’s not the recommended way to handle events in React.

// ---

// ### **Why Does This Work?**
// In your code:
// ```jsx
// <input 
//   style={{background:"white",borderWidth:"2px"}} 
//   type="text" 
//   name="nam" 
//   id="inp"  
//   onChange={() => { console.log(event.target.value); }}
// />
// ```

// The `event` object is still accessible inside the arrow function, but **this is not a good practice**. Here's why it works:

// 1. **Global `event` Object**:
//    - In some browsers (like older versions of Chrome and Firefox), there is a **global `event` object** that is automatically available in the browser's JavaScript environment.
//    - When the `onChange` event is triggered, the browser assigns the event details to this global `event` object.
//    - So, when you use `event.target.value` inside the arrow function, it refers to this global `event` object.

// 2. **Implicit Access**:
//    - Since the global `event` object is automatically available, you don’t need to explicitly pass it as an argument to the function.

// ---

// ### **Why Is This Not Recommended?**
// While the code works, it has several **issues**:

// 1. **Browser Dependency**:
//    - The global `event` object is not part of the official JavaScript or React specification. It’s a legacy feature that may not work in all browsers (e.g., modern browsers or strict mode).
//    - Relying on it makes your code **non-portable** and **unreliable**.

// 2. **Confusing and Implicit**:
//    - Using the global `event` object makes your code less explicit. It’s not clear where `event` is coming from, which can confuse other developers (or even yourself when debugging).

// 3. **React Best Practices**:
//    - React uses a **synthetic event system**, and it explicitly passes the event object as an argument to the event handler. Ignoring this and relying on the global `event` object goes against React’s design principles.

// ---

// ### **The Correct Way**
// The recommended way to handle events in React is to **explicitly pass the event object** as an argument to the event handler. Here’s how you should write it:

// ```jsx
// <input 
//   style={{background:"white",borderWidth:"2px"}} 
//   type="text" 
//   name="nam" 
//   id="inp"  
//   onChange={(event) => { console.log(event.target.value); }}
// />
// ```

// #### Why This is Better:
// 1. **Explicit and Clear**:
//    - By writing `(event) => { ... }`, you’re explicitly telling React to pass the event object to your function. This makes it clear where `event` is coming from.

// 2. **Portable and Reliable**:
//    - This approach works consistently across all browsers and environments because it follows React’s synthetic event system.

// 3. **Follows React Best Practices**:
//    - React is designed to work this way, so you’re writing code that aligns with how React is meant to be used.

// ---

// ### **What Happens Under the Hood?**
// When you write:
// ```jsx
// onChange={(event) => { console.log(event.target.value); }}
// ```

// 1. React attaches an event listener to the `<input>` element.
// 2. When the `onChange` event is triggered (e.g., when the user types), React creates a **synthetic event object**.
// 3. React passes this synthetic event object as the first argument to your arrow function (`event`).
// 4. You can then access `event.target.value` to get the current value of the input field.

// ---

// ### **Key Takeaways**
// 1. **Always Pass the Event Object Explicitly**:
//    - Use `(event) => { ... }` to handle events in React. This is the correct and recommended way.

// 2. **Avoid Relying on the Global `event` Object**:
//    - The global `event` object is legacy behavior and should not be used in modern React applications.

// 3. **Write Clear and Portable Code**:
//    - Explicitly passing the event object makes your code easier to understand, debug, and maintain.

// ---

// ### **Example of Correct Usage**
// Here’s a complete example of how to handle the `onChange` event properly in React:

// ```jsx
// import React from 'react';

// function App() {
//   return (
//     <div>
//       <input 
//         style={{background:"white",borderWidth:"2px"}} 
//         type="text" 
//         name="nam" 
//         id="inp"  
//         onChange={(event) => { console.log(event.target.value); }}
//       />
//     </div>
//   );
// }

// export default App;
// ```

// In this example:
// - Every time the user types in the input field, the `onChange` event is triggered.
// - The `event` object is passed to the arrow function, and `event.target.value` logs the current value of the input field.

// ---

// Let me know if you have more questions or need further clarification! 😊





// section four 
// Great question! This is a common point of confusion for beginners in React. Let me explain why we need to use an **inline arrow function** (or a function reference) instead of directly calling the function like `passingArgument("ali")`.

// ---

// ### **The Problem with Direct Function Calls**
// When you write something like this:
// ```jsx
// <button onClick={passingArgument("ali")}>Click Me</button>
// ```

// Here’s what happens:
// 1. The function `passingArgument("ali")` is **called immediately** when the component renders, not when the button is clicked.
// 2. The return value of `passingArgument("ali")` is assigned to `onClick`. If the function doesn’t return another function, this will likely result in an error or unexpected behavior.
// 3. This is **not what you want** because you want the function to be called only when the button is clicked, not during rendering.

// ---

// ### **Why Use an Inline Arrow Function?**
// When you write:
// ```jsx
// <button onClick={() => passingArgument("ali")}>Click Me</button>
// ```

// Here’s what happens:
// 1. The `() => passingArgument("ali")` part creates a **new function** that will call `passingArgument("ali")` when the button is clicked.
// 2. This function is not executed immediately during rendering. Instead, it’s passed as a **callback** to the `onClick` event handler.
// 3. When the button is clicked, the arrow function is executed, and `passingArgument("ali")` is called.

// ---

// ### **Key Difference**
// - **Direct Function Call**: The function is executed immediately during rendering.
// - **Inline Arrow Function**: The function is executed only when the event (e.g., button click) occurs.

// ---

// ### **Example to Illustrate**
// Let’s say you have a function `passingArgument` that logs a message:

// ```jsx
// function passingArgument(name) {
//   console.log(`Hello, ${name}!`);
// }
// ```

// #### Case 1: Direct Function Call (Wrong)
// ```jsx
// <button onClick={passingArgument("ali")}>Click Me</button>
// ```

// - When the component renders, `passingArgument("ali")` is called immediately, and you’ll see `Hello, ali!` in the console.
// - The `onClick` handler is now `undefined` (or whatever `passingArgument` returns), so clicking the button does nothing.

// #### Case 2: Inline Arrow Function (Correct)
// ```jsx
// <button onClick={() => passingArgument("ali")}>Click Me</button>
// ```

// - The `() => passingArgument("ali")` creates a function that will call `passingArgument("ali")` when the button is clicked.
// - Nothing happens during rendering. When you click the button, `Hello, ali!` is logged to the console.

// ---

// ### **When to Use Each Approach**
// 1. **Inline Arrow Function**:
//    - Use this when you need to pass arguments to the function.
//    - Example: `onClick={() => passingArgument("ali")}`.

// 2. **Function Reference**:
//    - Use this when you don’t need to pass arguments.
//    - Example: `onClick={passingArgument}` (assuming `passingArgument` doesn’t require arguments).

// ---

// ### **Why Not Always Use Inline Arrow Functions?**
// While inline arrow functions are convenient, they have a small performance cost:
// - A new function is created every time the component renders.
// - For most cases, this is negligible, but if you’re optimizing a performance-critical app, you might want to avoid inline arrow functions.

// ---

// ### **Alternative: Bind the Function**
// If you want to avoid inline arrow functions, you can use `.bind` to pre-bind arguments:

// ```jsx
// <button onClick={passingArgument.bind(null, "ali")}>Click Me</button>
// ```

// This works similarly to the inline arrow function but avoids creating a new function on every render.

// ---

// ### **Summary**
// - Use **inline arrow functions** (e.g., `() => passingArgument("ali")`) when you need to pass arguments to the function.
// - Use **function references** (e.g., `onClick={passingArgument}`) when you don’t need to pass arguments.
// - Avoid **direct function calls** (e.g., `onClick={passingArgument("ali")}`) because they execute immediately during rendering.

// ---

// ### **Full Example**
// Here’s a complete example to demonstrate the correct usage:

// ```jsx
// import React from 'react';

// function App() {
//   const passingArgument = (name) => {
//     console.log(`Hello, ${name}!`);
//   };

//   return (
//     <div>
//       {/* Correct: Inline arrow function */}
//       <button onClick={() => passingArgument("ali")}>
//         Say Hello to Ali
//       </button>

//       {/* Correct: Function reference (no arguments) */}
//       <button onClick={passingArgument}>
//         Say Hello (no arguments)
//       </button>
//     </div>
//   );
// }

// export default App;
// ```

// In this example:
// - The first button uses an inline arrow function to pass the argument `"ali"`.
// - The second button uses a function reference without arguments.

// Let me know if you have more questions! 😊