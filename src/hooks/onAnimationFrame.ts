export default function onAnimationFrame(callback: () => void) {
    window.requestAnimationFrame(() => {
        callback()
        onAnimationFrame(callback)
    })
}