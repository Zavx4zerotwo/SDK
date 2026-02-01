import { generateKeypair } from "./crypto"

export class Agent {
  id: string
  publicKey: string
  secretKey: string

  constructor(id: string) {
    const keys = generateKeypair()
    this.id = id
    this.publicKey = keys.publicKey
    this.secretKey = keys.secretKey
  }
}
