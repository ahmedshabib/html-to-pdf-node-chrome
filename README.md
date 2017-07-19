# Node express App to convert HTML to PDF using Google Chrome Headless

This project creates a express wrapper around https://github.com/westy92/html-pdf-chrome .


## Prerequisites

* Chrome/Chromium 59 or higher (60 or higher for some features). You can install latest chrome stable version as follow.
```bash
sudo apt-get install libxss1 libappindicator1 libindicator7
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome*.deb

#if you encounter an error while installing run
sudo apt-get install -f
```
* Windows(limited), macOS, or Linux
* Node.js v6 or later

## Usage

__Note:__ It is _strongly_ recommended that you keep Chrome running side-by-side with Node.js.  There is significant overhead starting up Chrome for each PDF generation which can be easily avoided.

It's suggested to use [pm2](http://pm2.keymetrics.io/) to ensure Chrome continues to run.  If it crashes, it will restart automatically.

As of this writing, headless Chrome uses about 65mb of RAM while idle.

```bash
# First clone the repository 
git clone https://github.com/ahmedshabib/html-to-pdf-node-chrome html-to-pdf
cd html-to-pdf
npm install

# install pm2 globally
npm install -g pm2
# start Chrome and be sure to specify a port to use in the html-pdf-chrome options.
pm2 start google-chrome \
  --interpreter none \
  -- \
  --headless \
  --disable-gpu \
  --disable-translate \
  --disable-extensions \
  --disable-background-networking \
  --safebrowsing-disable-auto-update \
  --disable-sync \
  --metrics-recording-only \
  --disable-default-apps \
  --no-first-run \
  --remote-debugging-port=9222
# run your Node.js app.

pm2 start index.js
```

## Example Test
```
curl 'localhost:3000' -H 'accept: application/json, text/plain, */*' -H 'content-type: application/json' --data-binary '{"body":"<p>Hello World</p>"}' > test.pdf
```

