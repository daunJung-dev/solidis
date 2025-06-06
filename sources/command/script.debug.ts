import { executeCommand, tryReplyOK } from './utils/index.ts';

import type { RespYesOrNo } from '../index.ts';

export function createCommand(mode: RespYesOrNo) {
  return ['SCRIPT', 'DEBUG', mode];
}

export async function scriptDebug<T>(this: T, mode: RespYesOrNo) {
  return await executeCommand(this, createCommand(mode), tryReplyOK);
}
