import Socket from 'socket.io-client'

export const Production =  "https://stolen-report-demo.herokuapp.com/"
export const localhost = "http://localhost:8080/"

export const ws = Socket(Production)
//export const ws = Socket(localhost)