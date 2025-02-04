import React from 'react';

interface FruitListProps {
    fruits: string[];
}

const FruitList: React.FC<FruitListProps> = ({ fruits }) => {
    return (
        <ul>
            {fruits.map((fruit) => (
                <li key={fruit}>{fruit}</li>
            ))}
        </ul>
    );
};

export default FruitList;