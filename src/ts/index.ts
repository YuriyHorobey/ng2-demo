/**
 * Created by yuriy.horobey on 17-Jan-17.
 */
import {AppModule} from './app/app.module'
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'

platformBrowserDynamic().bootstrapModule(AppModule )
    .then((res) => {
            console.log('App is Up');
            console.log(res);
        }
    );
