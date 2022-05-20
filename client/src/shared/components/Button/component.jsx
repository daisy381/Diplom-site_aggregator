import {useMemo} from "react";
import cn from "classnames";

export const Button = ({children, variant, color, className, onClick, disabled}) => {

  const getButtonVariant = useMemo(() => ({
    'rounded': 'rounded-full'
  }),[variant])

  return <button disabled={disabled} onClick={onClick} className={
    cn('text-center w-full', getButtonVariant[variant], color, className)
  }>
    {children}
  </button>
}
