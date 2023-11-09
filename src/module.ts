/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addImportsDir,
  installModule,
  addComponentsDir,
} from "@nuxt/kit";

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@WorkRootTech/nuxt-form",
    configKey: "WRNuxtForm",
  },

  defaults: {},

  hooks: {},

  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    addPlugin(resolver.resolve("./runtime/plugin"));

    addComponentsDir({ path: resolver.resolve("runtime/components") });
    addImportsDir(resolver.resolve("runtime/composables"));
    nuxt.options.css.push(resolver.resolve("./runtime/style.css"));

    nuxt.hook("nitro:config", (nitroConfig) => {
      nitroConfig.publicAssets ||= [];
      nitroConfig.publicAssets.push({
        dir: resolver.resolve("./runtime/public"),
        maxAge: 60 * 60 * 24 * 365, // 1 year
      });
    });

    await installModule("@nuxtjs/tailwindcss", {
      exposeConfig: true,
      config: {
        darkMode: "class",
        content: {
          files: [
            resolver.resolve("./runtime/components/**/*.{vue,mjs,ts}"),
            resolver.resolve("./runtime/*.{mjs,js,ts}"),
          ],
        },
      },
    });

    await installModule("nuxt-icon", {
      exposeConfig: false,
    });

    nuxt.hook("close", (nuxt) => {
      // Your custom code here
    });
  },
});
