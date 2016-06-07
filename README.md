# Awhere

### Installing Necessary Components

To install Ionic, run the following from the command line: `npm install -g cordova ionic`  
*Note this requires npm, so if you do not have Node installed, navigate to [the Node.js site](https://nodejs.org/en/)  
For more information on installing Ionic, [look here](http://ionicframework.com/getting-started/).

If Ionic installs successfully, you now need to install a few dependecies.  
To do this, run `npm install` from the command line.  
After this, you will need to install/update bower. You can do this by running `bower install`  
(You may need to run `bower update` as well).

In order to restore functionality to the Maps feature for Events, you must obtain a Google Maps API key from [here](https://developers.google.com/maps/documentation/javascript/get-api-key#key), and put it in www/index.html at line 24


### Testing, Uploading, and Building

There are couple of ways to test an Ionic app. Easiest is to run `ionic serve` from the app directory on the command line.  
This will run the app in your default browser. To test on different browsers, simply copy and paste the URL.

The second way to test is to upload to the IonicView app. First, you will have to install the app on your mobile device. Second, if prompted on the app, you will have to create a free account to link the app to your uploads.  
Finally, run `ionic upload` from the app directory on your command line, and enter your login information if prompted. Now, once you open IonicView on your mobile device, you should see your app listed.

When the time comes you want to build the app for publishing to either the App Store or Google Play, follow the instructions [here to do so](http://ionicframework.com/docs/guide/publishing.html).

### Known Issues

* Can't put double quotes in event names
* The Facebook button on Event pages doesn't work on IonicView or in the Browser
* Scrolling sometimes has issues when filtering

### Specific Limitations

* No backend - still runs on static test data
* 
