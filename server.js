import express from 'express';
import isURL from 'is-url';

import settings from './config.json' with { type: 'json' };

const app = express();

app.get('/:timing/*', function (req, response) {
    let delayTime = Math.floor(req.params.timing);

    if (req.params.timing === 'teapot') {
        response
            .status(418)
            .json({
                error: 'not a valid time - please use a integer'
            });

    }
    else if (isURL(req.params[0]) === false) {
        response
            .status(400)
            .json({
                error: 'please use a valid URL'
            });

    }
    else if (Number.isInteger(delayTime) === true) {
        if ( delayTime > settings.maxDelay ) {
            response
                .status(400)
                .json({
                    error: `time too long - must be shorter than ${settings.maxDelay} seconds`
                });

        }
        else {
            setTimeout( () => {
                    response.redirect(307, req.params[0])
                }, delayTime * 1000);

        }
    }
    else {
        response
            .status(400)
            .json({
                error: 'not a valid time - please use a integer'
            });

    }
})

app.listen(3000, function () {
    console.log('Yaled listening on port 3000!')
})