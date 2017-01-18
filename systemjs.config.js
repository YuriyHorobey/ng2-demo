/**
 * Created by yuriy.horobey on 17-Jan-17.
 */
SystemJS.config({
    defaultJSExtensions: true,
    defaultExtension: 'js',
    transpiler: "TypeScript",

    map: {
        '@angular/core': 'node_modules/@angular/core/bundles/core.umd',

        '@angular/common': 'node_modules/@angular/common/bundles/common.umd',
        '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd',
        '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd',

        '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd',

        'rxjs': 'node_modules/rxjs/'
    }
});