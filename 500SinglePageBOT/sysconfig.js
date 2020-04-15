/**
 * System configuration file
 */
const os = require('os');


// define chrome executable path
const osPlatform = os.platform(); // possible values are: 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'
// console.log('Scraper running on platform: ', osPlatform);
let executablePath;
if (/^win/i.test(osPlatform)) {
  executablePath = '';
} else if (/^linux/i.test(osPlatform)) {
  executablePath = '/usr/bin/google-chrome';
}

// define device
const devices = require('puppeteer/DeviceDescriptors');
const devicesExpanded = [
  {
    name: 'Desktop 1920x1080',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36',
    viewport: {
      width: 1920,
      height: 1080
    }
  },
  {
    name: 'Desktop 1920x1080',
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36',
    viewport: {
      width: 1920,
      height: 1080
    }
  },
  {
    name: 'Desktop 1024x768',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36',
    viewport: {
      width: 1024,
      height: 768
    }
  },
  {
    name: 'Laptop 1280x800',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36',
    viewport: {
      width: 1280,
      height: 800
    }
  },
  devices['iPad'],
  devices['iPad landscape']
];
const device = devicesExpanded[1];


module.exports = {
  osPlatform,
  device,
  cookie_file: process.env.COOKIE_FILE || `./cookie.json`,
  debugFF: false, // debug FunctionFlow

  viewport: {
    width: 1350,
    height: 1100
  },

  puppeteer: {
    executablePath: executablePath,
    headless: true,
    devtools: false,  // Open Chrome devtools at the beginning of the test
    dumpio: false,
    slowMo: 25,  // Wait 250 ms each step of execution, for example chars typing
    args: ['--ash-host-window-bounds=1350x1100', '--window-size=1350,1100', '--window-position=700,20']
  }

};
