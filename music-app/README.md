# Music app

## Introduction

In this application, a user will find a Music app that will build out a library of songs based on the API. Along with the library of songs, the user will be able to access songs by genre. The genres will be compartmentalized in playlists. The user will be able to view all the artists in the library as well. The user will also be able to add songs their choosing to their library.

### Deliverables/Requirements

Per Phase 2 project requirements, the app is required to satisfy the following:

1) You must make a single page application (only one index.html file) using create-react-app.

2) Your app should use at least 5 components in a way that keeps your code well organized.

3) There should be at least 3 client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes. |

4) Use a json-server to create a RESTful API for your backend and make both a GET and a POST request to the json server. Use a form to make your post request, specifically a controlled form/component. Additionally, you may choose to incorporate data from an external API but it is not required.
    - You should keep your json-server data simple: avoid nested data and associations. You'll learn how to work with more complex data in the next two phases. Focus on the frontend for this project.
    
    - Upon return of json from your POST request, a state update by a setState function is required!

5) Add some styling: you're encouraged to write your CSS from scratch, either by using styled components or writing CSS files and using id/className to style your elements. You can also incorporate a UI framework (like React Bootstrap, Semantic UI, or Material UI) if you prefer.

#### Features
- SPA
- Client-side routing navigating through pages/components
- Dynamic Client-side routing to view playlists by genre
- View List of artists
- Add new songs to library/API
- Clean UI