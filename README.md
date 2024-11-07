![image](https://github.com/user-attachments/assets/5651472c-3dac-4925-be60-f26c7812d988)

# weatherApp
The Weather App is a simple web application that fetches and displays weather information for a specified location. 

**Project Structure**
weatherApp/
    App.Html
    Style.css
    weatherApp.js
Overview
The Weather App is a simple web application that fetches and displays weather information for a specified location. It consists of three main files:

App.Html: The HTML file that defines the structure of the web page.
Style.css: The CSS file that styles the web page.
weatherApp.js: The JavaScript file that handles fetching weather data from an API and updating the DOM.
Files
App.Html
This file contains the HTML structure of the weather app. It includes a container for displaying weather information, such as temperature, location, time, and weather conditions. It also includes a form for searching weather information for different locations.

Key Elements
.container: A div that contains the entire weather section.
.weather: A div that contains weather information.
.temp: A div that displays the temperature.
.time_location: A div that displays the location and time.
.weather_condition: A div that displays the weather condition and icon.
.nav: A div that contains the search form.
Style.css
This file contains the CSS styles for the weather app. It defines the layout, colors, and fonts used in the app.

Key Styles
*: Resets margin and padding for all elements and sets the font family.
.container: Sets the width, height, and background color of the container.
.weather: Styles the weather section, including alignment and color.
.weather1: Sets the font size for the temperature.
.nav: Styles the navigation bar at the bottom of the page.
weatherApp.js
This file contains the JavaScript code that fetches weather data from an API and updates the DOM with the fetched data.

Key Functions
search(e): Handles the form submission, prevents the default behavior, and calls getWeather with the target location.
getWeather(target): Fetches weather data from the API and updates the DOM with the fetched data.
updateDOM(temp, city, date, emojiSrc, condition): Updates the DOM elements with the fetched weather data.
Usage
Open App.Html in a web browser.
The app will display the weather information for the default location (Chennai).
To search for weather information for a different location, enter the location in the search field and submit the form.
The app will fetch and display the weather information for the specified location.
API
The app uses the WeatherAPI to fetch weather data. The API endpoint used is:
http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=LOCATION&aqi=yes
1 vulnerability
Replace YOUR_API_KEY with your actual API key and LOCATION with the desired location.

Conclusion
This Weather App is a simple and effective way to fetch and display weather information for different locations. It demonstrates the use of HTML, CSS, and JavaScript to create a functional web application.
![Screenshot 2024-11-07 144645](https://github.com/user-attachments/assets/8f5c60af-406f-47d2-b5a9-a38e49b86aa8)
