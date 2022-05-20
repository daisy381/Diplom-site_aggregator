import {IconSelector} from "../../shared/IconSelector";
import {Input} from "../../shared/components/Input";
import {Button} from "../../shared/components/Button";
import {useCart,useFavorite} from "../../hooks";

export const CartCard = ({image_url, price, name, id}) => {
  const {toggleFavorite, isFavorite} = useFavorite({image_url, id, price, name})
  const {deleteItemOnCart} = useCart({image_url, price, name, id})

  return (
      <div className='bg-white shadow gap-x-10 rounded p-[30px] flex'>
        <img width={180} height={180} src={image_url} />
        <div className="flex flex-1 justify-between flex-col">
          <div className='flex  justify-between'>
            <div className='flex gap-x-10'>
              <div className='flex flex-col'>
                <span className='font-medium text-[20px]'>{name}</span>
                <span className='text-[15px] opacity-50'>Текст</span>
              </div>
              <div className='flex gap-x-5'>
                <IconSelector id='star' fill='gold'/>
                <span>3.5</span>
              </div>
            </div>
            <div className='px-2'>
              {isFavorite ? <IconSelector onClick={toggleFavorite} className='cursor-pointer' id='heart-filled'/> : <IconSelector onClick={toggleFavorite} className='cursor-pointer' id='heart' fill='black'/>}

            </div>
          </div>
          <div className='flex flex-col gap-y-2'>
            <span className='text-[15px] opacity-50'>Цена</span>
            <span className='font-medium text-[20px]'>{price}</span>
          </div>
          <div className='flex'>
            <Input type='checkbox'/>
            <Button onClick={deleteItemOnCart} className='max-w-[100px] hover:text-red-400 transition-colors'>Удалить</Button>
          </div>
        </div>
      </div>
  )
}
