export async function strmFetch({ path, setlogText }: { path: string, setlogText: (text: string) => void }) {
    let tmpLog = ""
    const res = await fetch(path, {
        method: "GET",
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
        },
    })

    const reader = res.body!.getReader()

    const decoder = new TextDecoder()

    while (true) {
        const { done, value } = await reader.read()
        if (done) break

        tmpLog += decoder.decode(value) + "\n"
        setlogText(tmpLog)
    }
}