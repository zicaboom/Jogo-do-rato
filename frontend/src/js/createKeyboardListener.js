export default function createKeyboardListener() {
    const observers = []

    addEventListener('keydown', whichKeyNotify)
    
    function whichKeyNotify(event) {
        let keyPress = event.key

        for (const obs in observers) {
            observers[obs](keyPress)
        }
    }
    function subscribeObserver(obs){
        observers.push(obs)
    }
    return {
        subscribeObserver
    }
}