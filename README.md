# A lightweight showcase for the DailyUI Challenge

This is a lightweight showcasing site for the 100 Day Daily UI challenge [dailyui.co](www.dailyui.co). This tool aims to create an easy way for participants to exhibit their work.

See example [here](http://liawesomesaucer.github.io/100ui-showcase).
* This currently running example images from the dailyui.co site but those will be updated as I do the challenge myself

Note that I'm not directly affiliated with the planning or running of the actual Daily UI Challenge

## Getting your own version of this up and running

### Things you'll need
* A GitHub account
* Git installed locally
* A folder with all your UIs, listed like `01_LastName.jpg`, `02_LastName.jpg`, .... `100_LastName.jpg`
* Most common image types are supported. For speed purposes, it might help to have images that aren't too large (not greater than 1000 x 1000)
  * For best results, keep the images in a consistent height:width ratio. Dribbble forces you to do this too
* 10-20 minutes

### Setup

#### Grabbing and downloading the files
First, let's Fork this repository to your GitHub account (button is in the upper right).

Let's clone (download) the files (run these in your terminal)
```
git clone https://github.com/<YOUR_GITHUB_USERNAME>/100ui-showcase.git
cd 100ui-showcase
```
(Remember to replace `<YOUR_GITHUB_USERNAME>` with your Github username. If I ran it, i'd run `git clone https://github.com/liawesomesaucer/100ui-showcase.git`)

#### Making your modifications
With a file explorer, look in `100ui-showcase/images/uis`. You'll see some sample images. You want to replace the folder `uis` with your folder of UI designs. After deleting the old `uis` folder, rename your new folder to `uis`.

Open `100ui-showcase/js/config.js`. Change the variables to match your files.

Go ahead and open `100ui-showcase/index.html` in your browser and double-check that your UIs show.

* If you run into any issues, double check that you've completed all the steps so far correctly, or reach out to someone for help.
* Also make sure the `config.js` is edited properly to match your files.

Now would also be a good time to make any content changes needed to make your version of this showcase stand out. Make sure to change the name to your own!
* For CSS changes (through SASS), head to the [developers](#developers) setup with Gulp.

#### Deploying your files
Let's make a commit and push your files. Run this in your terminal:
```
git add .
git commit -m "Added my UIs, yay!"
git push origin master
```
* This may prompt you for credentials, so you might need to enter those

#### Using gh-pages to showcase our work!
* Head back to your fork on GitHub (`github.com/<YOUR_GITHUB_USERNAME>/100ui-showcase`)
* Click 'Settings'.
* Scroll down to 'GitHub Pages' > 'Source' and select 'master branch' and Save. Don't worry about themes or anything.
* Head over to `<YOUR_GITHUB_USERNAME>.github.io/100ui-showcase` to see your awesome work!

## Developers
If you want to tinker with this, here's how.

Using gulp, so let's set that up.

```
npm install
gulp
```
Now you feel free to make any edits as needed.
