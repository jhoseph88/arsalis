export default async function sendEmail(from, to, subject, body) {
  const res = await fetch('https://zklwxiah0a.execute-api.us-east-1.amazonaws.com/dev/send', {
    method: 'POST',
    body: JSON.stringify({ from: from, to: to, subject: subject, body: body })
  })
  const resJson = await res.json()
  return resJson
}
