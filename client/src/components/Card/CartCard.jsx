//components
import {Divider} from "antd";
import {Button} from "../../shared/components/Button";

//helpers
import {useCart,useFavorite} from "../../hooks";
import {addSpaces} from "../../helpers/util";

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
                <span className='text-[15px] opacity-50'>цвет черный, 2.5 кг</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-y-2'>
            <span className='font-bold text-2xl' style={{color:'#282828'}}>{addSpaces(price)}</span>
          </div>
          <div className='flex'>
            <Button onClick={deleteItemOnCart} className='max-w-[100px] hover:text-red-400 transition-colors text-blue-600/75 text-left'>Удалить</Button>
            <Divider type="vertical" style={{ height: "80%" , border:'1px solid grey', marginTop:5}}/>
            {
              isFavorite ?
                  <Button onClick={toggleFavorite}
                          className='max-w-[200px] hover:text-red-400 transition-colors text-blue-600/75'>Удалить из избранных</Button>
                  :
                  <Button onClick={toggleFavorite}
                          className='max-w-[100px] hover:text-red-400 transition-colors text-blue-600/75'>В избранное</Button>
            }
          </div>
        </div>
      </div>
  )
}
