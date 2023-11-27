console.log('init app...');

const handleServiceWorker= async() => {
  if('serviceWorker' in navigator){
    let registration = await navigator.serviceWorker.register('sw.js', {type: 'module'});
    if(registration.waiting){

    }
  }else{
    console.error('serviceWorker not detected')
  }
}

// =================== MAIN ========================

handleServiceWorker();