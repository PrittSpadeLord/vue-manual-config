export function padZeros(num: number): string {
    if(num < 10) return `0${num}`
    return `${num}`
}

export function to12Hour (num: number): number {
    if(num === 0) return 12
    if(num > 12) return num - 12
    return num
}

export function getAmPm (num: number): ('AM' | 'PM') {
    if(num > 12) return 'PM'
    return 'AM'
}