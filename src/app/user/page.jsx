import { Counter } from '@/components/counter'
import React from 'react'

const UserPage = () => {
  async function myAction() {
    'use server'
    // ...
  }
  return (
    <div>
    <form action={myAction}>
      <button type="submit">Add to Cart</button>
    </form>
 
        <Counter/>
    </div>
  )
}

export default UserPage