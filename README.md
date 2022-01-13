# npm-post-install-script

Add script to your `package.json` to execute after installing main project dependencies. It will automatically execute npm install in the folders matching path `'./src/js/apps/*/package.json'`

```json
"scripts": {
    "postinstall": "node npm-install.js"
  }
```
