// pages/ssg.tsx
import { GetStaticProps, NextPage } from 'next';
import FruitList from '../components/FruitList';
import { getRandomFruits } from '@/utils/fruits';

interface SSGPageProps {
    fruits: string[];
}

const SSGPage: NextPage<SSGPageProps> = ({ fruits }) => {
    return (
        <div>
            <h1>Static Site Generation (SSG) Page</h1>
            <p>This page is pre-rendered at build time.</p>
            <FruitList fruits={fruits} />
        </div>
    );
};

export const getStaticProps: GetStaticProps<SSGPageProps> = async () => {
    const fruits = getRandomFruits(5);
    return {
        props: { fruits },
        // Optionally, you can add a revalidate property for ISR
        // revalidate: 60, // Regenerate page every 60 seconds
    };
};

export default SSGPage;