/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export async function loadFonts() {
  const webFontLoader = await import( /* webpackChunkName: "webfontloader" */ 'webfontloader')

  webFontLoader.load({
    google: {
      families: ['Noto+Serif:300,400&display=swap', 'Roboto:300,400,500&display=swap'],
    },
  })
}