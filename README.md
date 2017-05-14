# Club Manager

#### _By Gloria Friesen_

### Social Club Management Web Application
Current Version: 1.0 - 05.12.2017

### Description

Web based social club web application using Angular2 framework. Users are able to view club members. Administrators are able to add, edit, and delete members.

### Intended Users

Club members and administrators.

## Database Configuration

This application is built to work with a Firebase database. If you'd like to enjoy my website, please follow these instructions to create a Firebase project and credentials.
* Go to [Firebase](https://firebase.google.com/) and create an account (if you don't have one already).
* Create a remote database for the application through Firebase's website.
  * Select 'Create a New Project' from the dashboard.
  * Select 'Add Firebase to your web app'
  * A pop-up modal window will be generated. It will include your credentials. Keep the credentials handy.
* In the terminal, create a file to house your Firebase credentials `$ touch src/app/api-keys.ts`
* In api-keys.ts file, add the following code:
```
  export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```
* Replace 'xxxx' with the project credentials from Firebase.
* In your Firebase project, change the Rules to allow reading and writing to the database
```
  {
    "rules": {
      ".read": "true",
      ".write": "true"
    }
  }
```
* Import seed data from the included sample-players.json file
  * Visit your Firebase Console and select your project's database.
  * Click on the Database option in the left-hand navigational menu.
  * Select the 3 vertical dots on the right-hand side of the grey bar with your database URL on it. (It's right next to the + and - buttons). This should bring up a small menu.
  * Select Import JSON from this menu. This will result in a modal window prompting you to upload a file.
  * Locate the sample-players.json file from the project, and upload it.

## Installation/Setup

* In the terminal, run:
  * `$ git clone <https://github.com/GloriaFriesen/club-manager>`
  * `$ cd club-manager`
  * `$ npm install`
  * `$ bower install`
  * `$ ng serve`
* In your browser, go to [http://localhost:4200](http://localhost:4200)

## Preparations

#### Stuff it needs:
- [x] player properites
  - [x] name
  - [x] position
  - [x] image
  - [x] join date
- [x] list all members
- [x] player detail page
- [x] about page
- [x] database (firebase)
- [x] filter players with custom pipe
- [x] admin page
  - [x] add players
  - [x] edit players
  - [x] delete players
- [x] player service

#### Stuff it wants:
- [ ] styling
- [x] awesome theme
- [ ] calendar of events (static)
- [ ] deployed to firebase

#### Stuff it would love:
- [ ] message board
- [ ] track stats of members
- [ ] make calendar of events interactive
  - [ ] users can add events
  - [ ] admin can edit and delete events

## Components Needed
|Component|Path|Service|Function|
|---|---|---|---|
|Welcome|' '|No|home/splash page|
|About|'about'|No|Description of club|
|MemberList|'members'|Yes|List all members|
|MemberDetail|'members:id'|Yes|Display more detailed information about individual member|
|Admin|'admin'|Yes|List all members with additional actions: add, edit, delete|
|EditMember|'admin'|Yes|Inside admin component, edit form, delete button|

## Known Bugs
We'll see.

## Support and contact details
Questions? Concerns? Suggestions? Reach out to me via github: <https://github.com/GloriaFriesen>.

## Technologies Used
* _Angular2.js_
* _TypeScript_
* _HTML_
* _CSS_
* _npm_
* _Bower_

## License
This software is licensed under the MIT license.
Copyright (c) 2017 Gloria Friesen.
