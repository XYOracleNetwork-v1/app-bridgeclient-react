![Logo](logo.png)

# XYO Bridge Manager (app-bridgeclient-react)

## Branches

### Master

[![Build Status](https://travis-ci.com/XYOracleNetwork/app-bridgeclient-react.svg?branch=master)](https://travis-ci.com/XYOracleNetwork/app-bridgeclient-react)
[![BCH compliance](https://bettercodehub.com/edge/badge/XYOracleNetwork/app-bridgeclient-react?branch=master&token=75e0ed2470ac349132bdaefb1fd64991cbd85d23)](https://bettercodehub.com/results/XYOracleNetwork/app-bridgeclient-react)
[![Maintainability](https://api.codeclimate.com/v1/badges/f84e767728bcb7b5f0e7/maintainability)](https://codeclimate.com/github/XYOracleNetwork/app-bridgeclient-react/maintainability)

### Develop

[![Build Status](https://travis-ci.com/XYOracleNetwork/app-bridgeclient-react.svg?branch=develop)](https://travis-ci.com/XYOracleNetwork/app-bridgeclient-react)
[![BCH compliance](https://bettercodehub.com/edge/badge/XYOracleNetwork/app-bridgeclient-react?branch=develop&token=75e0ed2470ac349132bdaefb1fd64991cbd85d23)](https://bettercodehub.com/results/XYOracleNetwork/app-bridgeclient-react)

## Description

The web application to manage and monitor XYO Bridges.

## Developer Mode

### Requirements (Step 1)

Install Node 10.x or later from: [NodeJs](https://nodejs.org/en/download/current/)

### Install Dependencies (Step 2)

```bash
yarn
```

### Build Dependencies (Step 3)

```bash
yarn build
```

### Proxy Bridge Server

package.json
```
{
  "homepage": "http://$YOUR_BRIDGE_IP",
  ...
}
```

### Start App (Step 4)

```bash
yarn start
```

## Deployment

### Build and Compress (step 1)

```bash
yarn package
```

### Transfer to Bridge (step 2)

```bash
$IP={YOUR_BRIDGE_IP} yarn deploy
```

## License

Only for internal XY Company use at this time

## Credits

Made with ❤️
by [XYO](https://xyo.network)