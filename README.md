# VO_coder

**Quickly generate placeholder voice over assets for prototyping**

## How VO_coder works
VO_coder breaks down a spreadsheet into a list of dialogue lines, then makes multiple requests to Google Translate to convert those lines into audio files and downloads them.

## Before we get started
1) **You're going to need to install:**
Node.js (https://nodejs.org/en/download/)

2) **Download the VO_coder zip, and extract it where you like on your computer.**

3) **Install Grunt**
On PC: double click "install grunt.bat"
On Mac: double click "install grunt.command"
In Terminal: Type "npm install -g grunt-cli" and hit enter

3) **Run the installer**
double click "install vocoder.bat" on windows
double click "install vocoder.command" on mac
Type "npm install" in terminal

*This task will take a while to run, as it downloads things. It'll close when it's finished*

---

## Getting your audio
1) **Edit the src/csv/lines.csv file with your filename and text.**

2) **Replace the default icons in "src/icons" with your own.**
You can use a free online tool to make Windows/mac icons here: https://iconverticons.com/online/

3) **Run the compiler:**
double click "create audio.bat" on windows
double click "create audio.command" on mac
Type "grunt" in terminal and press enter