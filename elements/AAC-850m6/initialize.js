function(instance, context) {
    instance.data.MyFunction = function TriggerEvent() {
        if (!instance.data.isDisabled){
        	instance.triggerEvent("double_click_detected");
    	}
    }
    instance.data.initSequence = true;
}