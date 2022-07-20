import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import globalCss from "~/styles/globalCss";

export function meta() {
  const description = "Description Blog";
  const keywords = "remix react";
  return { title: "New Remix App", description, keywords };
}

export const links = () => [{ rel: "stylesheet", href: globalCss }];

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <Links />
        <Meta />
        <title>{title || "Reimx Blog"}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          Remix
        </Link>
        <ul className="nav">
          <li to="/posts">Posts</li>
        </ul>
        <div className="container"> {children}</div>
      </nav>
    </>
  );
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}
