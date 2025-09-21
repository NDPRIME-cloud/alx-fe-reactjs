import React from 'react'
import {create } from 'zustand'
import { persist } from 'zustand/middleware'
 
const Usestore = create(persist((set) =>({
    count: 0,
    increase: () => set((state) => ({count: state.count + 1})),
    decrease: () => set((state) => ({count: state.count - 1})),
    reset: ()=> set({count:0})
}),
{
    name: 'counter-storage',
    
    getStorage: () => localStorage
}))
// const Usestore = create( persist((set) =>({
//     data: [],
//     fetch: async() =>{
//         const response = await fetch('https://Apicom.com/data');
//         const json = await response.json();
//         set({data:json})

//     }
// }),
// {
//     name:'counter-storage',
//     getStorage: () => localStorage
// }))
export default Usestore;