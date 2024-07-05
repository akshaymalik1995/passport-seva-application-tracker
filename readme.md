# Passport Seva Application Status Checker

# Passport Seva API

This repository contains an API implemented using Express.js. The API is designed to scrape data from the [Passport Seva](https://passportindia.gov.in/AppOnlineProject/statusTracker/trackStatusInpNew) website.

## Getting Started

To get started with the application, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory: `cd passport-seva-js`.
3. Install the required dependencies by running `npm install`.
4. Start the application by executing the following command: `node index.js`.

## Retrieving Passport Status

Once the application is running, you can retrieve passport status information by sending a POST request to `localhost:5000/api/passport-status` with the following JSON data:

```json
{
  "fileNo": "",
  "optStatus": "Application_Status",
  "applDob": ""
}
```

Please make sure to fill in the required details before making the request.
