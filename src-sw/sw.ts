const VERSION = 2;
const CACHE = "cache_" + VERSION;

const sw = self as ServiceWorkerGlobalScope & typeof globalThis;

const PREFETCH: RequestInfo[] = [
  './index.html'
]
const installFn = async (event: ExtendableEvent): Promise<void> =>{
  try{
    const cache = await caches.open(CACHE);
    return await cache.addAll(PREFETCH);
  }catch(err){
    console.error(err);
    return Promise.reject(err);
  }
}

const activateFn = async (event: ExtendableEvent): Promise<void>  =>{
  // migrate datasources

  // delete old cache
}

const fetchFn = async (event: FetchEvent): Promise<Response>  =>{
  console.log('fetchFn', event.request.url);

  // todo: check network, cache?
  if(navigator.onLine){

  }
  const response = await fetch(event.request);
  return response;
}


// ========================== SERVICE WOrKEr event listeners ===================
sw.addEventListener('install', (event) => {
  console.log('sw install', event);
  event.waitUntil(installFn(event));
});

sw.addEventListener('activate', (event) => {
  console.log('sw activate', event);

  event.waitUntil(activateFn(event));

});

sw.addEventListener('fetch', (event) => {
  console.log('sw fetch', event);
  event.respondWith(fetchFn(event));
});
