import { signMessage, verifyMessage } from "./crypto"

export function createTransaction(
  from: string,
  to: string,
  payload: unknown,
  secretKey: string
) {
  const body = JSON.stringify({ from, to, payload })
  const signature = signMessage(body, secretKey)

  return {
    body,
    signature
  }
}

export function verifyTransaction(
  tx: { body: string; signature: string },
  publicKey: string
) {
  return verifyMessage(tx.body, tx.signature, publicKey)
}
