import './styles.css'

export type Message = {
  name: string
  message: string
}

const defaultMessage: Message = {
  name: 'John',
  message: 'Hello, world!',
}

const printMessage = (message = defaultMessage) => {
  console.log(`${message.name}: ${message.message}`)
}

export default printMessage
