```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldCleanup, setShouldCleanup] = useState(true);

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      if (shouldCleanup) {
          console.log('Component unmounting');
      }
    };
  }, [shouldCleanup]);

  const handleUnmount = () => {
      setShouldCleanup(false);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleUnmount}>Unmount</button>
    </div>
  );
}
```