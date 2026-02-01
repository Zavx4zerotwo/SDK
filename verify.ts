import nacl from "tweetnacl"
import bs58 from "bs58"

export function generateKeypair() {
  const keypair = nacl.sign.keyPair()
  return {
    publicKey: bs58.encode(keypair.publicKey),
    secretKey: bs58.encode(keypair.secretKey)
  }
}

export function signMessage(message: string, secretKey: string) {
  const msg = Buffer.from(message)
  const sk = bs58.decode(secretKey)
  const signature = nacl.sign.detached(msg, sk)
  return bs58.encode(signature)
}

export function verifyMessage(
  message: string,
  signature: string,
  publicKey: string
) {
  return nacl.sign.detached.verify(
    Buffer.from(message),
    bs58.decode(signature),
    bs58.decode(publicKey)
  )
}
