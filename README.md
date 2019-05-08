[logo]: https://cdn.xy.company/img/brand/XY_Logo_GitHub.png

[![logo]](https://xy.company)


# XYO Bridge Manager (app-bridgeclient-react)

## Branches

### Master

[![Build Status](https://travis-ci.com/XYOracleNetwork/app-bridgeclient-react.svg?branch=master)](https://travis-ci.com/XYOracleNetwork/app-bridgeclient-react)
[![David Badge](https://david-dm.org/xyoraclenetwork/app-bridgeclient-react/status.svg)](https://david-dm.org/xyoraclenetwork/app-bridgeclient-react) [![David Badge](https://david-dm.org/xyoraclenetwork/app-bridgeclient-react/dev-status.svg)](https://david-dm.org/xyoraclenetwork/app-bridgeclient-react)

[![BCH compliance](https://bettercodehub.com/edge/badge/XYOracleNetwork/app-bridgeclient-react?branch=develop&token=cf211435bbe943ac885db4029189241f961ad84a)](https://bettercodehub.com/)
[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=XYOracleNetwork_app-bridgeclient-react&metric=alert_status)](https://sonarcloud.io/dashboard?id=XYOracleNetwork_app-bridgeclient-react)
[![Maintainability](https://api.codeclimate.com/v1/badges/f84e767728bcb7b5f0e7/maintainability)](https://codeclimate.com/github/XYOracleNetwork/app-bridgeclient-react/maintainability)

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