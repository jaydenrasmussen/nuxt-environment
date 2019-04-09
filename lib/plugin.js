import * as Bowser from 'bowser'
export default function NuxtEnvironmentPlugin(ctx, inject) {
    let env = {
        _browser: () => Bowser.parse(window.navigator.userAgent),
        get browser() {
          return this._browser().browser;
        },
        get os() {
            return this._browser().os;
        },
        get platform() {
            return this._browser().platform;
        },
        get engine() {
            return this._browser().engine;
        },
        size: {
          get type() {
            if (this.x < 640) return "xs";
            if (this.x > 640 && this.x <= 960) return "sm";
            if (this.x > 960 && this.x <= 1280) return "md";
            if (this.x > 1280 && this.x <= 1680) return "lg";
            if (this.x > 1680 && this.x <= 1920) return "xl";
            if (this.x > 1920) return "xxl";
          },
          get x() {
            return window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth;
          },
          get y() {
            return window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight;
          }
        }
    };
    <% if (options.stages) { %>
      env._stages = JSON.parse('<%= JSON.stringify(options.stages) %>' || '{}')
      Object.defineProperty(env, 'stage', {
        get: function() {
          for (let stage in this._stages) {
            if (window.location.href.indexOf(this._stages[stage]) !== -1) {
              return stage;
            }
          }
        }
      })
    <% } %>

    ctx.$env = env;
    inject('env', env);
}
