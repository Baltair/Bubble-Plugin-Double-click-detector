function(instance, properties, context) {
    instance.data.isDisabled = properties.isDisabled;
    
    if (instance.data.initSequence){
        if (properties.mode === "Both" || properties.mode === "Attach to ID"){
            window.addEventListener("load", () => {
                let listOfElem = document.querySelectorAll(`[id=${properties.attribute_id}]`);
                listOfElem.forEach((element) => {
                    element.addEventListener("dblclick", instance.data.MyFunction);
                });
            });
        }

        if (properties.mode === "Both" || properties.mode === "Detector Area"){
                instance.canvas.addEventListener("dblclick", instance.data.MyFunction);
        }  
        instance.data.initSequence = false;
    }

}