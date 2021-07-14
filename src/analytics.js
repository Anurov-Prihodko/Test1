function createAnalytics() {
    let counter = 0
    let destroyed = false

    const listener = () => counter += 1

    document.addEventListener('click', listener);

    return {
        destroy() {
            document.removeEventListener('click', listener)
            destroyed = true
        },

        getClicks() {
            if (destroyed) {
                return `Analytics is destroyed. Total clics ${counter}`
            }
            return counter
        }
    }
}

window.analytics = createAnalytics()