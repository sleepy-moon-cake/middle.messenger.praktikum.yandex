export function debounce<DContext = unknown, TOptions = unknown>(
  callback: (value: unknown) => void,
  self: DContext,
  merge: boolean = true,
  delay: number = 0
): DebounceLaunch<TOptions> {
  let timerId: number | null = null;
  let result: TOptions | null = null;

  return function launch(value: TOptions): DebounceLaunch<TOptions> {
    if (timerId) {
      clearTimeout(timerId);
    }

    if (merge) {
      result = Object.assign(result ?? {}, value);
    } else {
      result = value;
    }

    timerId = +setTimeout(() => callback.call(self, result), delay);
    return launch;
  };
}

type DebounceLaunch<TOptions> = (value: TOptions) => DebounceLaunch<TOptions>;
