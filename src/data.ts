import crypto from "crypto"

export function hashData(data: unknown): string {
  return crypto
    .createHash("sha256")
    .update(JSON.stringify(data))
    .digest("hex")
}

export function createDataProof(agentId: string, data: unknown) {
  return {
    agentId,
    hash: hashData(data),
    timestamp: Date.now()
  }
}
