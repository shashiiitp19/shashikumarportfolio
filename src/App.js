import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import UserProfile from "./components/Profile/UserProfile";
// import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
// import Animation from "./pages/Animation";
import { PageTransition } from "@steveeeie/react-page-transition";


function App() {
  return (
    <Layout>
      {/* <PageTransition> */}
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/education" exact>
          <Education />
        </Route>
        <Route path="/experience" exact>
          <Experience />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
      {/* </PageTransition> */}
    </Layout>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// import { PageTransition } from "@steveeeie/react-page-transition";
// import './styles.css';
// import classes from "./App.module.css";

// const Links = () => (
//   <>
//     <Link to="/home">Home</Link>
//     <Link to="/education">Education</Link>
//     <Link to="/experience">Experience</Link>
//   </>
// );

// const Home = (props) => <h1>Home</h1>;

// const education = (props) => <h1>Education</h1>;

// const experience = (props) => <h1>Experience</h1>;

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Links />
//         <Route
//           render={({ location }) => {
//             return (
//               <PageTransition
//                 preset="moveToLeftFromRight"
//                 transitionKey={location.pathname}
//               >
//                 <Switch location={location}>
//                   <Route path="/" exact>
//                     <HomePage />
//                   </Route>
//                   <Route path="/home" exact>
//                     <HomePage />
//                   </Route>
//                   <Route path="/education" exact>
//                     <Education />
//                   </Route>
//                   <Route exact path="/" component={<HomePage />} />
//                   <Route exact path="/education" component={<Education />} />
//                   <Route exact path="/experience" component={<Experience />} />
//                 </Switch>
//               </PageTransition>
//             );
//           }}
//         />
//       </Layout>
//     </BrowserRouter>
//   );
// }
