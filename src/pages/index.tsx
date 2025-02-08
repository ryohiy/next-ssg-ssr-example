import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Next.js SSG vs SSR Example</h1>
      <ul>
        <li>
          <Link href="/ssg" prefetch={false}>
            Static Site Generation (SSG) Page
          </Link>
        </li>
        <li>
          <Link href="/ssr" prefetch={false}>
            Server-Side Rendering (SSR) Page
          </Link>
        </li>
        <li>
          <Link href="/ssg-with-interaction" prefetch={false}>
            SSG with Interaction Page
          </Link>
        </li>
        <li>
          <Link href="/ssr-with-interaction" prefetch={false}>
            SSR with Interaction Page
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
