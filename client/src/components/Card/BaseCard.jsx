//styles
import cn from 'classnames';

//library
import {useNavigate} from "react-router-dom";

//components
import {IconSelector} from "../../shared/IconSelector";
import {Button} from "../../shared/components/Button";
import {Rate} from "antd";

//hooks
import {useCart,useFavorite} from "../../hooks";


export const BaseCard = ({name, image_url, price, id,rating,hideOrderButton = false}) => {
    const navigate = useNavigate()


    const {toggleFavorite, isFavorite} = useFavorite({name, image_url, price, id} || {})
    const {addItemOnCart,itemsOnCart} = useCart({name, image_url, price, id} || {})

    price = price.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')

    const goToProduct = (e) => {
        e.stopPropagation()
        navigate(`/product/${id}`)
    }

    return (
        <div onClick={goToProduct} className='flex max-w-[330px] max-h-[520px] flex-col p-[25px] cursor-pointer hover:scale-105 transition-transform rounded shadow-md bg-white'>
            <img src={image_url || ''} alt=""/>
            <div className="flex justify-between items-center mt-[30px]">
                <span className="text-[14px] wra">{name.length > 10 ? name.slice(0, 45).concat('...') : name}</span>
            </div>
            <div className='flex space-x-2 mt-2'>
                <Rate style={{display:'inherit',fontSize:20,marginRight:40}} disabled value={rating}/>
                {
                    isFavorite ?
                        <IconSelector onClick={toggleFavorite} id='heart-filled' className='cursor-pointer'/>
                        :
                        <IconSelector onClick={toggleFavorite} id='heart' className='cursor-pointer' fill='black'/>
                }
            </div>
            <span className="mt-2 font-sans text-2xl">{price}</span>
            {
                !hideOrderButton && (
                    <Button disabled={itemsOnCart} onClick={addItemOnCart} className={
                        cn('group mt-5 flex justify-center py-1 cursor  transition-all rounded', {
                            'hover:bg-secondary hover:border-transparent text-[15px] border border-black hover:text-white': !itemsOnCart,
                            'border-gray-200 border text-gray-200': itemsOnCart
                        })
                    }>
                        <span className='mr-2'>
                            <IconSelector id='basket'
                                          className={cn('fill-black', {
                                              'group-hover:fill-white': !itemsOnCart,
                                              'fill-gray-200': itemsOnCart
                            })}/>
                        </span>
                        {
                            itemsOnCart ? 'В корзине' : 'Добавить в корзину'}
                    </Button>
                )}
        </div>
    )
}
