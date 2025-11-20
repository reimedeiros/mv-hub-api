export function responseMessageAndData<T, M extends string>(
  responseDB: T | null | undefined,
  successMessage: M,
  faildMessage: M,
) {
  return {
    message: responseDB ? successMessage : faildMessage,
    data: responseDB ?? (undefined as T | undefined),
  };
}
