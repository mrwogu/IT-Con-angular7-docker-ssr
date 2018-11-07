# IT-Con - Angular7 with SSR

## How to start?

1.: Clone this repo

2.: Install dependencies
    
    npm install
    
3.: Build & run application in SSR mode

    npm run build:ssr && npm run serve:ssr

or alternatively: Build & run application in CSR development mode

    npm start

## How to build Docker image?

    docker build -t angular7:latest .
    
## How to run Docker container from built image?

    docker run -it -p 4000:4000 --name angular-ssr angular7:latest
    
## Useful links

* https://angular.io/resources
* https://prerender.io
* https://angular.io/guide/universal
* https://github.com/GoogleChrome/rendertron
* https://github.com/angular/preboot
* https://github.com/fgnass/domino
* https://github.com/angular/universal/blob/master/modules/common/src/transfer_http.ts
* https://youtu.be/AdMqCUhvRz8
