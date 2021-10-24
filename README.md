# BandsinTown

A react based web app which uses the BandsinTown API to search for musicians and their upcoming shows

Notes:

- Allows you to search for your favorite musicians and their upcoming events
- Enter the name of the artist in the searchbox and clicl the Search button (unfortunately I was not able to implement the 'enter' key functionality even though I tried using the onChange and onKeyPress events)
- The results are displayed in the form of cards containing the required information
- You can view the location of an event on google maps by clicking on the location hyperlink in the card
- Try replacing the appID in the App.jsx file on line 31 if you get error 403 while searching

Steps to run the app

1. Clone the repository in a local file
2. run npm install in cmd to install any missing packages
3. run npm start in cmd
4. Search your favorite artists and see if they're having any events near you
