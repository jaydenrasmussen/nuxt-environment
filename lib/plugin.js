import * as Bowser from 'bowser'
export default function NuxtEnvironmentPlugin(ctx, inject) {
    let env = {
        client: {
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
        }
    };
    <% if (options.stages) { %>
      const _stages = JSON.parse('<%= JSON.stringify(options.stages) %>' || '{}')
      let stage = '';
      for (let stageName of Object.keys(_stages)) {
        if (window.location.href.indexOf(_stages[stageName].url) !== -1) {
          stage = stageName;
        }
      }
      env.stage = _stages[stage];
    <% } %>
    ctx.$env = env;
    inject('env', env);
}
