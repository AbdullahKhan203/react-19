import React from 'react'

export default function Ternary() {
    // const age=18;
  return (
    <>
    <div>{age>=18 ? "adult":"minor"}</div>
    <div>{age>=18 && "You can vote"}</div>
    <div>{age || "Guest"}</div>

    </>
  )
}
