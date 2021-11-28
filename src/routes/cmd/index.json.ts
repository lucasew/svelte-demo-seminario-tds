import { spawn } from 'child_process'

export const get = async (req) => {
    function streamToString(stream) {
        const chunks = []
        return new Promise((res, rej) => {
            stream.on('data', chunk => chunks.push(chunk))
            stream.on('error', rej)
            stream.on('end', () => res(Buffer.concat(chunks).toString('utf-8')))
        })
    }
    const {stdout} = spawn('ls', ['-1'])
    return {
        status: 200,
        body: await streamToString(stdout)
    }
}
