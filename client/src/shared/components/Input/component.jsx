import cn from "classnames";

export const Input = ({type, title, name, id, className, reversed = false}) => {
  return (
      <div className={cn('checkboxContainer')}>
        {!reversed  ? (<>
          <input id={id} name={name} type={type} className="opacity-0 absolute cursor-pointer"/>
          <label htmlFor={id} className='flex items-center cursor-pointer' >
            {title}
          </label>
        </>) : <>
          <label htmlFor={id} className='flex items-center cursor-pointer' >
            {title}
          </label>
          <input id={id} name={name} type={type} className="opacity-0 absolute cursor-pointer"/>
        </>}

      </div>
  )
}
