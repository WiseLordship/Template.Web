import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import HomePage from './home/home.page';
import AboutPage from './about/about.page';
import CoursesPage from './courses/course.page';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="about" component={AboutPage} />
    </Route>
);