import React from 'react'

export default function ShowOutput() {
    let students=[1];
  return (
    <div>
      {/* The line {students.length && "No student found"} will show 0 instead of "No student found" because students.length is 0, which is a falsy value in JavaScript. When the && operator is used, it returns the first falsy value it encounters or the last value if none are falsy. Since students.length is 0, it is returned and rendered.because && check both sides if left side is false then it does not even check its right side thats the reason it ignores right side and return false value 0 */}
        {/* {students.length && "No student found"} */}
        {/* other example */}
        {students.length && <p>There are students in the list.</p>}
            {students.length === 0 && <p>No student found</p>}

         {/* other example */} 
         <br />  
         With or operator:-{students.length || "No student found"}
          {/* other example */}
         <br />  
         With && and ! operator:-{!students.length && "No student found"}
         <br />
          Number of students:{students.length}
           {/* other example */}
            <br />
            With Boolean keyword and && oerrator:-{!Boolean(students.length) && "No student found"}
            <br />
            Number of student:-{students.length}
    </div>
  )
}


// react does not render `false`, `undefined`, `null`, or `NaN` in DOM.These values when used in JSX,will result is nothing being displayed.

// How ever 0 and empty string are exceptions:

// 0 will be rendered in the DOM because it is a valid react dom.This means if `0` is result of react result expression,it will apear in ui.

// Empty string are also valid and are rendered as well; if empty string is result of react expression, it will appear in ui.