// IMPORTANT: speedkitComponent must be equal projekt import
import FontCollection from 'nuxt-speedkit/classes/FontCollection';
import { hydrateWhenVisible } from 'vue-lazy-hydration';

const routesCache = [];

export default {
  install (Vue) {
    Vue.mixin({
      provide () {
        return {
          criticalParent: this.critical || this.criticalParent
        };
      },

      inject: {
        criticalParent: { default: () => this.critical || false }
      },

      props: {
        critical: {
          type: Boolean,
          default: false
        }
      },

      data () {
        return {
          fontActive: false,
          fontCollection: new FontCollection()
        };
      },

      head () {
        const head = this.fontCollection.getHeadDescription ? this.fontCollection.getHeadDescription(this.isCritical, this.$crossorigin) : {};

        // remove third route
        routesCache.length > 2 && routesCache.shift();

        // create cache and collect styles per route
        let routeStyleCcache = routesCache.find(({ path }) => path === this.$route.fullPath);
        if (!routeStyleCcache) {
          routeStyleCcache = { path: this.$route.fullPath, styles: new Map() };
          routesCache.push(routeStyleCcache);
        }
        head.style.forEach(style => routeStyleCcache.styles.set(style.hid, style));

        // replace head style with current and last font styles
        head.style = routesCache.reduce((result, cache) => {
          result.push(...Array.from(cache.styles.values()));
          return result;
        }, (head.style = []));

        console.log('fonts', head.style.length);
        return head;
      },

      computed: {
        isCritical () {
          return this.criticalParent || this.critical;
        }
      },

      beforeCreate () {
        const components = Object
          .entries(this.$options.speedkitComponents || {})
          .reduce((result, [key, value]) => {
            return Object.assign(result, {
              [key]: hydrateWhenVisible(value, {
                observerOptions: { rootMargin: process.env.NUXT_SPEEDKIT_LAZY_OFFSET_COMPONENT || '0%' }
              })
            });
          }, {});
        Object.assign(this.$options.components, components);
      }
    });
  }
};
