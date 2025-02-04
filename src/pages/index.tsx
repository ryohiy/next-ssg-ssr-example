import Link from 'next/link';

const HomePage = () => {
  return (
      <div>
        <h1>Next.js SSG vs SSR Example</h1>
        <ul>
          <li>
            <Link href="/ssg">
              Static Site Generation (SSG) Page
            </Link>
          </li>
          <li>
            <Link href="/ssr">
              Server-Side Rendering (SSR) Page
            </Link>
          </li>
        </ul>
      </div>
  );
};

export default HomePage;