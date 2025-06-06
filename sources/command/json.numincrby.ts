import { executeCommand, tryReplyToStringOrNull } from './utils/index.ts';

export function createCommand(key: string, path: string, value: number) {
  return ['JSON.NUMINCRBY', key, path, `${value}`];
}

export async function jsonNumincrby<T>(
  this: T,
  key: string,
  path: string,
  value: number,
): Promise<string | null> {
  return await executeCommand(
    this,
    createCommand(key, path, value),
    tryReplyToStringOrNull,
  );
}
