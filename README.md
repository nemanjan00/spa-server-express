# spa-server-express

Express based server for single page applications. 

Place your app in public dir, install this package and run: 

```bash
node_modules/.bin/spa-server-express
```

This is ment for usage on Heroku/Dokku/Flynn/Deis. 

Put this in Procfile: 

```
web: node_modules/.bin/spa-server-express
```

