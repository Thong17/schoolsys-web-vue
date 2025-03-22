import { sha256 } from 'js-sha256'

export const createHash = (str: string) => {
  return sha256.hex(str).toString()
}
