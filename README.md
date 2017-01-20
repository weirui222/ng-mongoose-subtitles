# Angular Mongoose Subtitles
Original Subtitle project: <https://github.com/WDI-SEA/subtitles-solution>

Today we're converting an old project to use Angular and Mongoose. The site
displays a short clip of a video and renders subtitles in front of the video.
The old site always showed subtitles as defined in a JavaScript file.

We're going to update the site so users can edit the subtitles to say whatever
they want, and allow users to save their changes to a database. Our final site
will have a homepage where it lists all the subtitle variations available and
users can click which one they want to view with the video.

At a high level here's the pages our website will have:
* **homepage** - displays a list of all subtitle variations.
* **watch page** - a page that plays the video with one subtitle variation.
* **edit page** - a page that allows users to edit a subtitle variation.

The homepage should include an option to create a new subtitle variation. Users
should have the option to choose whether they want to create subtitles from
a blank template, or copy another subtitle variation to use as a starting point.

Angular is an effective choice for our front end work because we'll be able to
easily display a list of all the current subtitles, allow users to change
subtitles inline and instantly see the effect of their change.

Mongoose is an effective choice for a database because we'll be able to
easily store our complex subtitle JSON objects without putting too much
effort into a database design.

Good luck! Have fun.

## Reading Current Video Time Inside Angular
Angular and the video element may not play nicely together naturally. You'll
probably need to use vanilla JavaScript to obtain a reference to the video
element inside a controller, then use Angular's $interval service to constantly
read the time.

Don't use jQuery!

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
