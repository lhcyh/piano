self.addEventListener("install",function(event){
    console.log("install");
});

self.addEventListener("activate",function(event){
    console.log("activate");
});


self.addEventListener("fetch",(event)=>{
    event.respondWith(
        caches.match(event.request).then(response=>{
            //console.log("response",response);
            return response || fetch(event.request);
        })
    )
});
