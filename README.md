# CA05 - Flixster Part 1

### Check out the Movie DB API

- [Check out this video](https://youtu.be/Hfoi4N1ES-4?t=243)

1. Poke around in the [The Movie Database documentation](https://developers.themoviedb.org/3/getting-started) to familiarize yourself with the API's general structure and features.

	- ["Now Playing" endpoint.](https://developers.themoviedb.org/3/movies/get-now-playing)
	- Note: It's helpful to install the JSONView Chrome Extension to view the returned JSON more easily.

#### MockUp
You may choose any design libary of your liking. Here are some suggestions:
- [Bootstrap](https://getbootstrap.com/) `npm i bootstrap --save`
- [Material UI](https://material-ui.com) `npm i @material-ui/core --save`
- [Materialize](https://materializecss.com/) `npm install materialize-css@next --save`

### Check point #1 - Developer API key

In order for the project to gather data with the API, you need to use an API Key. The API Key for this API is `a07e22bc18f5cb106bfe4cc1f83ad8ed`. Under the main folder, create a file named `.env.local` and add the following to the file:

`REACT_APP_MOVIE_DB_API_KEY = a07e22bc18f5cb106bfe4cc1f83ad8ed`

* A sample request to link your pictures to the webpage is below. 

        - https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed


### Check point #2 - User Stories 

A user story is a way to capture requirements for an application from an end-user perspective. It is a common practice in app development and helps to simplify the way requirements are specified.

To receive full credit on this project, the following stories must be completed: 
* User can view a list of movies (title, poster image, and overview) currently playing in theaters from the Movie Database API. (10 points)
  * You may use this library to make API calls easier. Download the js file and place it in you project. You will need to remove everywhere it says `use strict;`


* Ensure a responsive layout. The app should reduce the number of elements displayed in a row based on the screen size. (2 points)


* Improve the user interface through styling and coloring. (1 to 5 points depending on the difficulty of UI improvements)
  * An example of improve the interface can be colored backgrounds, cursor changes, font color changes, and smooth transitions. 

Here is an example of the how your Flixster project could look: 

<img src="https://imgur.com/a/GG4UxWU.gif" alt="Mockup Flixster GIF" /> (https://imgur.com/a/GG4UxWU)
