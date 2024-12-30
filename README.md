# AGD Insurance Landing Page

This site uses W3 html includes. In order to work on this locally, you must use a local dev server running php, such as MAMP, and view it via localhost. Just previewing in a browser won't execute the includes.

You will also need a sass compiler like [Koala](http://koala-app.com/)

This site uses Bootstrap.

This site is hosted at Heroku.

---

## When committing changes, please make two pushes.

## https://www.myagdinsurance.com/

### THIS REPO HAS BEEN MOVED TO GITHUB

``git push``  
 or  
``git push origin master``

### This will automatically trigger the build on Heroku

---

## This site doesn't actually use PHP

In order to "trick" Heroku into serving this static site (it is not an app), we pretend it's a php app. We do this with two files:

``composer.json`` Although this file is basically empty, it tells Heroku that this is a php app and to look for an index.php file

``index.php`` There is no php code to execute, but Heroku will be looking for an index.php page - so we use this as our home page

---

## Redeploy to Heroku 20 10/14/21