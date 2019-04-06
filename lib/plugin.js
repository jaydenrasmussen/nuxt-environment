import * as Bowser from 'bowser'
export default function NuxtEnvironmentPlugin(ctx, inject) {
    let env = {
        browser: () => Bowser.parse(window.navigator.userAgent),
        get os() {
            return this.browser().os;
        },
        get system() {
            return this.browser().system;
        },
        get platform() {
            return this.browser().platform.type;
        },
        get engine() {
            return this.browser().engine
        }
    };
    <% if (options.stages) { %>
        env = Object.assign(env, {
            _stages: '<% options.stages %>',
            get stage() {
                for (let stage of Object.keys(this._stages)) {
                    if (window.location.href.indexOf(_stages[stage]) !== -1)return stage;
                }
            }
        })
    <% } %>

    ctx.$env = env;
    inject('env', env);
}
