// Get random integer
export default function randomNumber() {
    return +Math.random().toString().split('.')[1].substring(0, 8)
}