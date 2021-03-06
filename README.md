# Catch of the Day

### Created using https://www.reactforbeginners.com
### Check it out: https://catch-of-the-day-drf2.herokuapp.com/

![Screenshot](https://raw.githubusercontent.com/danfrenette/catch-of-the-day-2/master/public/images/screenshot.png)


## Summary

This is a simple, single page app that might be used by a seafood
company to sell fish.

It's entirely client side, using React to render the vast majority of the HTML
that you see, and [Firebase](https://firebase.google.com/) to store information.


## Getting Started

The first page you'll see is the store picker page. All you have to do here is
enter the name of a store (can be anything) in the input and hit the Visit Store
button. Refresh the page for randomly generated (and often weird) names!

Once you've entered the store, login using GitHub, Facebook, or Twitter. You are
now the owner of this store, and only you can make changes to the fish in this
store.

Scroll to the bottom of the Inventory section, and hit the "Load Sample Fishes"
button to add some sample data into the app.

## Features

This was designed principally as a CRUD app to help teach the basics of React.
Users can add, remove, and update fish in the inventory, then add them to the
order. All of these actions are animated with transitions and will persist after
refreshing/leaving the page.

Other technical tidbits:

* [The app itself makes full use of ES8 (2017)
  JavaScript](https://github.com/danfrenette/catch-of-the-day-2/blob/26a4f379b97f90a7436fe9a31c269997e924195b/src/components/Inventory.js#L52)
* [Built on Google's Firebase Cloud
  Database](https://github.com/danfrenette/catch-of-the-day-2/blob/master/src/base.js)
* [OAuth sign in (Facebook, Github,
  Twitter)](https://github.com/danfrenette/catch-of-the-day-2/blob/master/src/components/Login.js)
* [Extensive use of React components (including stateless functional components)](https://github.com/danfrenette/catch-of-the-day-2/blob/master/src/components/)
* [Extensive templating with
  JSX](https://github.com/danfrenette/catch-of-the-day-2/tree/26a4f379b97f90a7436fe9a31c269997e924195b/src/components/App.js)
* [URL routing with React Router
  4](https://github.com/danfrenette/catch-of-the-day-2/blob/master/src/components/Router.js)
* [Advanced state management with local
  storage](https://github.com/danfrenette/catch-of-the-day-2/blob/26a4f379b97f90a7436fe9a31c269997e924195b/src/components/App.js#L37)
* [Animations with React CSS
  Transitions](https://github.com/danfrenette/catch-of-the-day-2/blob/26a4f379b97f90a7436fe9a31c269997e924195b/src/components/Order.js#L26)
