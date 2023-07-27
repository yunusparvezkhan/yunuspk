import React from "react";
import NavBar from "./components/NavBar";
import Route from "./components/Route";
import { LandingPage, AboutPage, BlogsPage, ProjectsPage, AchievementsPage, AcademicsPage, PlaylistsPage, ContactsPage } from './pages'

function App() {
  return (
    <div className="App">
      <Route path='/home' secondaryPath='/' >
        <LandingPage />
      </Route>

      <Route path='/about'>
        <AboutPage />
      </Route>

      <Route path='/blogs'>
        <BlogsPage />
      </Route>

      <Route path='/projects'>
        <ProjectsPage />
      </Route>

      <Route path='/achievements'>
        <AchievementsPage />
      </Route>

      <Route path='/academics'>
        <AcademicsPage />
      </Route>

      <Route path='/playlists'>
        <PlaylistsPage />
      </Route>

      <Route path='/contact'>
        <ContactsPage />
      </Route>

      <div className="fixed w-full top-0" >
        <NavBar className="fixed" />
      </div>

    </div>
  );
}

export default App;
