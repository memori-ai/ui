export const MAX_MSG_CHARS = 4000
export const MAX_MSG_WORDS = 300

export const truncateMessage = (message: string) => {
  let truncatedMessage = message
  if (message.length > MAX_MSG_CHARS) {
    truncatedMessage = `${message.slice(0, MAX_MSG_CHARS)}\n<br />...`
  }
  if (truncatedMessage.split(' ').length > MAX_MSG_WORDS) {
    truncatedMessage = truncatedMessage
      .split(' ')
      .slice(0, MAX_MSG_WORDS)
      .join(' ')
  }
  return truncatedMessage
}
