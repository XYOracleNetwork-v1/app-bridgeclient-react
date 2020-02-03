![Logo](logo.png)

# XYO Bridge Manager (app-bridgeclient-react)

## Table of Contents

-   [Title](#app-bridgeclient-react)
-   [Description](#description)
-   [Developer Mode](#developer-mode)
-   [Deployment](#deployment)
-   [Architecture](#architecture)
-   [Contributing](#contributing)
-   [License](#license)
-   [Credits](#credits)


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

## Maintainers

-   Arie Trouw

## Contributing

## License

See the [LICENSE](LICENSE) file for license details.

## Credits

Made with 🔥and ❄️ by [XYO](https://www.xyo.network)
