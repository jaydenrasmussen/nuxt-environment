# Nuxt-Environment

Easily get information about the browser and url you're running your Nuxt project in

### Installation

`npm install nuxt-environment`

### Usage

```javascript
// nuxt.config.js
...
modules: [
  'nuxt-environment' // option A
],
stages: {
  'dev': 'localhost'
}
...
```

```javascript
// nuxt.config.js
...
modules: [
  ['nuxt-environment', {
    stages: {
      'dev': 'localhost'
    }
  }]
]
...
```

Now, `$env` is available everywhere, and can tell you a lot about where your project is running if that influences your runtime decisions. The object it gives you looks like this

```javascript
{
  "browser": {
    "name": "Chrome",
    "version": "73.0.3683.86"
  },
  "os": {
    "name": "macOS",
    "version": "10.14.3"
  },
  "platform": {
    "type": "desktop",
    "vendor": "Apple"
  },
  "engine": {
    "name": "Blink"
  },
  "_stages": {
    "dev": "localhost"
  }
  "stage": "dev" // or your current stage is based on the stages you added to config
}
```

