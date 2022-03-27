function StopWatch(){
    let counting = false;
    let duration = {value: 0.000};
    
    // using getters and setters
    this.start = function(){
        //starts counting
        if(counting)
           throw new Error('Stop watch Already running')
        counting = true;
        while(counting ==true){
            duration.value++;
        }
    }
    this.stop = function() {
        //stops counting
        if(!counting)
           throw new Error('Stop watch has not been started')
        counting = false;
    }
    this.reset = function(){
        counting = false;
        duration = {value: 0.000};
    }
    Object.defineProperty(this, 'duration',{
        get: function(){
            return duration;
        },
    })
}