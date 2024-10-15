function hacktool(socialMedia, userName) {
    let a = [
        `Initializing Hack tool...`,
        `Connecting to ${socialMedia}...`,
        `Connecting to server 1...`,
        `Connection failed. Retrying...`,
        `Connecting to server 2`,
        `Connected Successfully...`,
        `Username ${userName} ...`,
        `Trying Brute Force...`,
        `200K passwords tried...`,
        `Match not found`,
        "Another 200K passwords tried...",
        "Match not found...",
        "Another 200K passwords tried...",
        "Match not found...",
        "Another 200K passwords tried...",
        "Match found...",
        "Accessing Account...",
        "Hack Successful..."
    ]

    const sleep = async (seconds) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => { resolve(true) }, seconds * 1000)
        })
    }

    const showHack = async (message) => {
        await sleep(2)
        // console.log(message)
        info.innerHTML = info.innerHTML + message + "<br>"
    }

    (async () => {
        for (let i = 0; i < a.length; i++) {
            await showHack(a[i])
        }
    })()
}