import { useEffect } from 'react'

export default function useWindowSize(callback: ({ width, height }: {width:number, height: number}) => void) {
  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        callback({ width, height });
      }
    });
    observer.observe(document.body);
    callback({
      width: document.body.clientWidth,
      height: document.body.clientHeight,
    });
    return () => {
      observer.disconnect();
    };
  }, [callback]);
}