# Boot Screen Setup

Steps to configure the raspberry pi to display a custom splash icon.

## Steps

### Remove Rainbow Image (Step 1)

```bash
sudo echo "disable_splash=1" >> /boot/config.txt
```

### Remove Boot Messages (Step 2)

```bash
sudo nano /boot/cmdline.txt
```

Change `console=tty1` to `console=tty3`

Append `splash quiet plymouth.ignore-serial-consoles logo.nologo vt.global_cursor_default=0`

### Replace Splash Image (Step 3)

sudo cp ~/logo.png /usr/share/plymouth/themes/pix/splash.png

