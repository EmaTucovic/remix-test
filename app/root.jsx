import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

// import globalCss from "./styles/globalCss";
import globalCss from "~/styles/global.css";

// This function needs to be exported alongside the component with the page you're targeting.
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
        {/* All meta exports on all routes will go here */}
        <Meta />
        {/* All link exports on all routes will go here */}
        <Links />
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
          <li>
            <Link to="/posts" className="logo">
              Blog Post{" "}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container"> {children}</div>
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
