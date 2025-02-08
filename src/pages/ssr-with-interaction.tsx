import { useState } from "react";

const SSRWithInteraction = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>SSR with Interaction</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default SSRWithInteraction;
