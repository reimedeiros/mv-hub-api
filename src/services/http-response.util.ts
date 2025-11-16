export function responseMessageAndData(
  responseDB: unknown,
  successMessage: string,
  faildMessage: string,
) {
  return {
    message: responseDB ? successMessage : faildMessage,
    data: responseDB ?? undefined,
  };
}
