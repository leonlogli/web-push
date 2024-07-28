# Imo Push Web

Web push notification delivery demo app with the WonderPush service.

## Configure Vite for HTTPS and Custom Domain on localhost

Needed to configure web push on WonderPush dashboard to be able to receive push notification on your local machine

Update your vite.config.js file to include the vite-plugin-mkcert plugin and configure the server options:

```
server: {
    host: "imo.push.web",
}
```

Edit Your Hosts File

You need to map your custom domain to localhost in the hosts file. Open the Terminal and use the following command to edit the hosts file with superuser privileges:

```batch
sudo nano /etc/hosts
```

Add the following line at the end of the file:

```
127.0.0.1 imo.push.web
```

## Start the app

```batch
yarn dev
```

It will start on https://imo.push.web:5173. Copy this link to configure your app on WonderPush dashboard

Rename `.env.sample` file to `.env` and fill the app credentials got from WonderPush dashboard

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
