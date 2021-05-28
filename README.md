# Table of contents

- [About](#about)
- [Installation](#installation)
  - [Requirements](#requirements)
  - [Instructions](#instructions)
- [Setting you discord application](#setting-you-discord-application)
  - [Create a new app](#create-a-new-app)
  - [Rich presence assets](#rich-presence-assets)
- [Running the script](#running-the-script)
- [My status doens't change](#my-status-doesnt-change)

# About
Quick discord rpc will help you get a better discord presence in just a minute. 

By following the instructions step-by-step you will be the cooler of your friends 😎

If you have any problem consider hitting me up on discord: Expensiveee#0620 or join my [Discord Server](https://discord.gg/8C4kjsGmrx)

# Installation
### Requirements
- [Node.js](https://nodejs.org/en/download/) 14.0.0 or newer is required.

 ### Instructions
- Clone this repository using git or by downloading it. 

For cloning open your cmd and type this:
```
$ git clone https://github.com/Expensiveee/quick-discord-rpc.git
$ cd quick-discord-rpc
```

- Now, download all the required packages. Still in your cmd type the following and wait dor it to install everything (souldn't take more than 1m):
```
$ npm i
```
 Go to the new downloaded folder and open `index.js` with [Visual Studio Code](https://code.visualstudio.com/download).
 
 Edit all the values that you want. Here is an example, each time you see `//I can be changed` means that you can do whatever you want.
 
 Be aware that the only thing that should be changed is after `:`. 
 Your custom detail can be  `details: "myDetails"` but not `myDetails: "details"`

Example:

```js
activity: {
   details: "details", //I can be changed
   state: "State", //I can be changed
   assets: {
       large_image: "radamyy", //I can be changed
       large_text: "large_image_text" //I can be changed
   },
   timestamps: {
       start: Date.now(), //I can be changed
       // end: Date.now() + 600000 //I can be changed
   },
   buttons: [ //I can be changed
       { label: "Join the Radamyy Community", url: "https://discord.gg/8C4kjsGmrx" }, //I can be changed
       { label: "Take a look at my Github", url: "https://github.com/Expensiveee" }, //I can be changed
   ]
}
```

# Setting you discord application

### Create a new app
To set you discord application:
- Go to the [Discord Developer Portal](https://discord.com/developers/applications) then application.
- Create a new one by clicking on the top right "New application" button
- Give it a name .This name will be displayed as your game, for example if you name you application qfojhslopfs on Discord you will apear like this: Playing qfojhslopfs
- Click on your new app and go to OAuth 2
- Copy the client id and paste it on `line 28` of the index.js between the tow sigle quotes
- Same thing for the client secret that should be next to the client it on the website, paste it on `line 29`

### Rich presence assets
Now that you have you application set with all the ids in index.js, do the following

- Go to the [Discord Developer Portal](https://discord.com/developers/applications) then application.
- Click on your app
- Click on Rich Presence > Art Assets
- Add your image by clicked the bottom left "Add image(s)" button
- Give it a name that is explicit for example logo
- Go back the code and edit `line 11`. Instead of radamyy replace it with the name of your image for me logo so that it will look like this: `large_image: "logo",`

If you reload the page and your image disappears don't worry, it's from discord. Your image has successfully been sent just wait 5 to 10 minutes MAX.

# Running the script
To run the script simply go to your cmd if not opened open a new one in the **same directory as your discord.js**.And type this:

```
$ node .
```

After this you should see your status change.

# My status doens't change
Go to Discord > User Settings > Activity Status and turn in on.

Still can't see you status change? Turn off the program restart Discord by doing Ctrl + R wait for it to launch. Then run the script again