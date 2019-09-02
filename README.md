# Nuxt-Environment

Easily inject your environment into a nuxt project, and get information about what environment your application is running on.

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
  'dev': {
    url: 'dev.site.url'
    apiUrl: 'https://httpstat.us'
  }
}
...
```

```javascript
// nuxt.config.js
...
modules: [
  ['nuxt-environment', {
    stages: {
      'dev': {
        url: 'dev.site.url'
        apiUrl: 'https://httpstat.us'
      }
    }
  }]
]
...
```

Now, `$env` is available everywhere, and can tell you a lot about where your project is running if that influences your runtime decisions. The object it gives you looks like this

```javascript
{
  client: {
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
    }
  },
  "stage": {
    url: 'dev.site.url'
    apiUrl: 'https://httpstat.us'
  }
}
```

