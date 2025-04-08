import reactLogo from "/src/assets/react.svg";
import viteLogo from "/vite.svg";
import "./menu.css";

function MenuComponent() {
  return (
    <div className="menu">
      <div className="cards">
        <div className="card">
          <img src={viteLogo} className="logo_vite" alt="Vite logo" />
          <p>
            Vite is a build tool that aims to provide a faster and leaner
            development experience for modern web projects.
          </p>
          <p>
            Vite is a next-generation, front-end tool that focuses on speed and
            performance. It consists of two major parts: <br />
            1. A development server that provides rich feature enhancements over
            native ES modules. <br />
            2. A build command that bundles your code with Rollup,
            pre-configured to output optimized static assets for production.
          </p>
        </div>
        <div className="card">
          <img src={reactLogo} className="logo_react" alt="React logo" />
          <p>
            eact (also known as React.js or ReactJS) is a free and open-source
            front-end JavaScript library that aims to make building user
            interfaces based on components more "seamless". It is maintained by
            Meta (formerly Facebook) and a community of individual developers
            and companies.
          </p>
          <p>
            A key advantage of React is that it only re-renders those parts of
            the page that have changed, avoiding unnecessary re-rendering of
            unchanged DOM elements.
          </p>
        </div>
      </div>
    </div>
  );
}
export default MenuComponent