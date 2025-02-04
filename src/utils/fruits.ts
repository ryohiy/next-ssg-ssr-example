export const fruits = [
    'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
    'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon'
];

export function getRandomFruits(count: number): string[] {
    const shuffled = [...fruits].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}