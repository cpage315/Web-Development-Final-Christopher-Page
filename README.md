# Web Development Final Christopher Page

## PLEASE READ FIRST

I am most certainly not finished with this project. In fact far from it.
This is mostly due to me struggling with the project every step of the way, and not being the most encapsulated by web development as a whole
However, I would like to see it through over the summer if I can.

There are some issues with the profile page. The main issue is that sometimes it does not show your profile information.
I have not been able to troubleshoot it yet. If anything, I've made the issues worse from trying solutions outside of my knowledge.

I am not entirely pleased with the front end of the assignment. When I continue on this project I am going to try and revamp the front end entirely.
Stay tuned for that!

---

## Project's Purpose

The project is made to be a website for baseball instructor's clients.
As an instructor/coach myself, I figrued that an idea like this would help organizing information on both client and instructor side.
User's on this application can register/make a profile and schedule appointments.
In the future, I would like to add tabs for instructors to see their clients and potentially tabs for clients to input video of game footage.
This app is not finished.


## Bugs

So the biggest issue that I have newly run into as stated earlier is that the profile page is not working correctly right now.
Sometimes it displays the information and sometimes it does not.
I am not sure of how to fix the issue.
I tried to fix it with some online resources along with some inspiration from other applications, but no solution yet.

### UNIMPLEMENTED

Also in this menu, you can switch between the different charts associated with your user account.
In the final menu, you can name these charts and give them a fitting description.

Charts can then be saved to a user account and exported into various file formats (PNG, JSON, TXT, etc.).

## Bugs/Important Information

-   NOTE: It may be worth noting that 90% of testing was done on Firefox, the other 10% on Chromium. Chromium may have bugs and other browsers are untested.

-   _ISSUE_: Card animations have been removed for now.

-   **MAJOR**: Charts are not saved to the database.
    While chart state is persistent on the front end (via localStorage), I was not able to save this information given the time constraints of the course.

## Running locally

### Depends on:

```
nodejs      (>v8.1.2)
npm         (>v16.13.2)
postgresql  (>v14)
```

### Setting up the database:

With PostgreSQL, create the database with the following command:

```sql
CREATE DATABASE chartmaker;
```

The name of this database must match `PG_DATABASE` in `server/.env` (covered later).

Tables will automatically be created when the server is started.

_BUG: The server may need to be started more than once to create the tables._
_This is due to key dependancy when not every table exists yet_

### For development:

```sh
cd client
npm install
npm run dev
```

```sh
cd server
npm install
npm run dev
```

### For production:

```sh
cd client
npm install
npm run build
npm run preview
```

```sh
cd server
npm install
npm run build
npm run start
```

The following environment variables must be provided in `server/.env` (default values provided)

If `DEV` is set to `true`, tables will automatically seed themselves.

```
LAST_FM_KEY
EX_PORT=5000
PG_USERNAME
PG_PASSWORD
PG_DATABASE=chartMaker
PG_PORT=5432
(optional) DEV=false (boolean)
```


## Pictures

### Maker

![maker1](doc/img/maker1.png)
![maker2](doc/img/maker2.png)

### With light mode

![light](doc/img/light.png)

### On a phone

![phone](doc/img/phone.png)

### Sign in page

![dark](doc/img/signin.png)

### Sidebar (while signed in)

![sidebar](doc/img/sidebar.png)