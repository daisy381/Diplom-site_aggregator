import {useEffect} from "react";

export const useOutsideClick = (ref, cb) => {
  const handler = (e) => {
    if (!ref.current || ref.current.contains(e.target)) {
      return;
    }
    cb()
  }
  useEffect(() => {
    document.addEventListener('click', handler, true)
    return () => {
      document.removeEventListener('click', handler, true)
    }
  }, [])
}
