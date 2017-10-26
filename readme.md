# Yaled
<small>It's delay backwards.</small>

Totally inspired by (Deelay.me)[http://www.deelay.me] and (Atwood's Law)[https://blog.codinghorror.com/the-principle-of-least-power].

This is a delay proxy, allowing you to test what happens when one or more assets load slowly. Useful for breaking things.

## Install
Requires Node (tested on v8.6.0) and Yarn (tested on 1.2.1).

Clone the repo, then `yarn install` to get the dependencies.

Then it's `node server.js` to run.

## Use
Change a resource's URI to be proxied by Yaled:

`http://your-domain:3000/{integer: 20}/{url: http://mysite.com/image.gif}`

The {integer} is the time delay you want in seconds - maximum of 20 by default. (You can change this is `config.json`)

The {url} is the full resource you want to delay loading.

For example, delaying the loading of an image by 10 seconds:
`<img src="http://localhost:3000/10/https://www.wwf.org.uk/donate-with-apple-pay/assets/images/polar-bear-looking-up_v5lekv_c_scale,w_1260.jpg" alt="Polar bear">`

Or the loading of scripts:
`<script src-"http://localhost:3000/10/https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" async defer></script>`
`<script src-"http://localhost:3000/10/https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>`


## To do
 - Package for NPM
 - Global install?
 - ??
