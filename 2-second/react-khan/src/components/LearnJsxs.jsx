import React from 'react'

export default function LearnJsxs() {
  const content="Ali Khan"
  return  (
    <div>
      {
        <>
         <div>Hello world</div>
         {content}
         {18/5.24}
         </>
      }
    </div>
  )
}
