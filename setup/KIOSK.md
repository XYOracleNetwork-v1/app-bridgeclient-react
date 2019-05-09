# Kiosk Setup

Steps to configure the pi to run as kiosk display

## Steps

### Start Server (Step 1)

sudo nano /etc/rc.local

```
sudo PORT=80 STATIC=/home/pi/Documents/bridge-client/build node /home/pi/Documents/bridge-server/dist/index.js &
exit 0
```

### Start Kiosk (Step 1)

sudo nano /etc/xdg/lxsession/LXDE-pi/autostart

```bash
@xset s off
@xset -dpms
@xset s noblank
@chromium-browser --noerrdialogs --disable-infobars --kiosk --app=http://localhost/
```