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
