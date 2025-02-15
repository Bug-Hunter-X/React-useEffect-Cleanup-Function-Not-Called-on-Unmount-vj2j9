# React useEffect Cleanup Function Not Called on Unmount

This repository demonstrates a common issue in React applications where the cleanup function within a `useEffect` hook might not be called when the component unmounts.  This often happens due to unexpected re-renders or component lifecycle mishaps.

## Problem

The provided code includes a `useEffect` hook with a cleanup function.  The intention is for the cleanup function (`console.log('Component unmounting');`) to execute when the component is unmounted. However, in certain scenarios, this may not occur as expected.

## Solution

The solution focuses on correctly managing the component's lifecycle and ensuring that the cleanup function is executed appropriately.  This might involve adjustments to how the `useEffect` hook is used or how the component is structured.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console output for 'Component mounted' and 'Component unmounting' messages.

## Technologies Used

* React
* JavaScript

