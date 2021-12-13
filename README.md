# Google-Account-Photo-API

This API just returns the image of your Google account.

![i want to that image](./assets/i_want_to_that_image.png)

## Usage

Just two steps.

1. Get your own account ID.
    1. Execute People API ([this link](https://developers.google.com/people/api/rest/v1/people/get?apix_params=%7B%22resourceName%22%3A%22people%2Fme%22%2C%22personFields%22%3A%22photos%22%7D))
    1. The account_id of resourceName(ex. `people/<account_id>`) in the Response is your account_id.
1. Request the API.
    1. https://google-account-photo.vercel.app/api/?account_id=<account_id>
    1. The images in your account Photo will be returned.

Using this API, you can embed your Google account image in Markdown. 😎