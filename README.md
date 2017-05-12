# Club Manager

#### _By Gloria Friesen_

### Social Club Management Web Application
Current Version: 1.0 - 05.12.2017

### Description

Web based social club web application using Angular2 framework. Users are able to view club members. Administrators are able to add, edit, and delete members.

### Intended Users

Club members and administrators.

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
- [ ] member properites
  - [ ] name
  - [ ] role
  - [ ] image
  - [ ] join date
  - [ ] contact info
- [ ] list all members
- [ ] member detail page
- [ ] about page
- [ ] database (firebase)
- [ ] filter members with custom pipe
- [ ] admin page
  - [ ] add members
  - [ ] edit members
  - [ ] delete members
- [ ] member service

#### Stuff it wants:
- [ ] styling
- [ ] awesome theme
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
