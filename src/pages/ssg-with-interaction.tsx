import { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import FruitList from "../components/FruitList";
import { getRandomFruits } from "@/utils/fruits";

interface SSGPageProps {
  fruits: string[];
}

const SSGWithInteraction: NextPage<SSGPageProps> = ({ fruits }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>SSG with Interaction</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <FruitList fruits={fruits} />
    </div>
  );
};

export async function getStaticProps() {
  const fruits = getRandomFruits(5);
  return {
    props: { fruits },
    // Optionally, you can add a revalidate property for ISR
    // revalidate: 60, // Regenerate page every 60 seconds
  };
}

export default SSGWithInteraction;
