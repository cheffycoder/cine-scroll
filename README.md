# Cine-Scroll
Cine-Scroll is a movie information app that displays a list of movies from The Movie Database (TMDb) API. The app shows top movies for each year, and users can filter by genre. It also loads top movies from previous or next years as the user scrolls through the list.


## Setting Up the Project Locally

1. **Clone the Repository**:
   - Clone the project from `https://github.com/cheffycoder/cine-scroll`.

2. **Install Dependencies**:
   - Run `npm i` to install all necessary dependencies.

3. **Configure Environment Variables**:
   - Set up the `.env` file with the following variables:
     ```env
     REACT_APP_TOKEN="your-api-key"
     REACT_APP_BASE_URL="https://api.themoviedb.org/3/"
     ```

4. **Start the Development Server**:
   - Run `npm run dev` to start the development server.

## Features Implemented
1. **Custom Build Configurations**: Configured the build process without using Create React App (CRA).
2. **SCSS Styling**: Utilized SCSS for styling components.
3. **TypeScript**: Implemented TypeScript for type safety and improved developer experience.
4. **API Calls with Axios**: Used the Axios library to make API requests.
5. **Modular Code Structure**: Adopted a modular approach for defining components.
6. **State Management**: Managed state using the `useState` hook, without additional state management libraries.
7. **Environment Variables**: Configured environment variables for enhanced security.
8. **Infinite Scroll**: Implemented infinite scrolling for seamless movie browsing.
9. **Upward Scroll**: Added functionality for scrolling upwards to load more content.
10. **Search Functionality**: Integrated search functionality to find movies easily.
11. **Genre Filtering**: Enabled filtering of movies by genre.
12. **Loaders**: Added loaders to indicate data fetching during API calls for better user experience.

## Potential Enhancements

1. **Response Caching**: Implement caching of API responses for improved performance.
2. **Advanced State Management**: Consider using other state management libraries as the project grows.
3. **User Experience**: Add toast/notification messages to enhance user experience.
4. **Dynamic DOM Management**: Implement dynamic addition and removal of sections to ensure the DOM remains lightweight and performance is optimized.


## Project Requirements

### Layout and UI - DONE

- Created custom UI components for the app, ensuring reusability.
- Displayed a list of movies sorted in descending order of popularity.
- Each movie card shows the movie title, image, genre, cast, director, and a short description.

### Default Page Load State - DONE

- Loaded only 20 movies per year by default.
- Displayed movies from the year 2012 when the user lands on the page.
- Implemented smooth scrolling behavior to load more movies as the user scrolls in any direction, ensuring a jitter-free experience.

### API Integration - DONE

- Used the provided URL to fetch a list of movies.
- Implemented fetching of movies for a specific year based on user scroll direction.
- Ensured movies have received at least 100 votes for popularity.

### Genre Filter - DONE

- Provided a filter UI that allows users to filter movies by genre.
- Fetched genres from the API and displayed them as filters.
- Fetched a fresh list of movies whenever a genre is selected, displaying only movies of the selected genres.

### Code Quality - DONE

- Wrote well-structured and maintainable code.
- Avoided using pre-built component libraries for creating UI components.

### Bonus  - DONE

- Ensured smooth scrolling even with more movies loaded in the DOM.
- Implemented a search bar for finding movies based on search strings.
- Used TypeScript for enhanced type safety and code quality.