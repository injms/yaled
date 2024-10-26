# Yaled
<small>It's delay backwards.</small>

Totally inspired by Deelay.me (now defunct) and [Atwood's Law](https://blog.codinghorror.com/the-principle-of-least-power).

This is a delay proxy, allowing you to test what happens when one or more assets load slowly. Useful for breaking things.

## Install
Requires Node v23.

Clone the repo, then `npm install` to get the dependencies.

Then it's `npm start` to run.

## Use
Change a resource's URI to be proxied by Yaled:

```html
http://your-domain:3000/{integer: 20}/{url: http://mysite.com/image.gif}`
```

The {integer} is the time delay you want in seconds - maximum of 20 by default. (You can change this is `config.json`)

The {url} is the full resource you want to delay loading.

For example, delaying the loading of an image by 10 seconds:

```html
<img src="http://localhost:3000/10/https://www.placeholder-image.com/image.jpeg" alt="A placeholder image">
```

Or the loading of scripts:

```html
<script src-"http://localhost:3000/10/https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" async defer></script>`

<script src-"http://localhost:3000/10/https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```

## To do
 - Package for NPM
 - Global install?
 - ??
