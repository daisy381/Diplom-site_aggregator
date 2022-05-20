import {useRef, Fragment} from "react";
import {Button} from "../Button";
import {useAppContext} from "../../../context";
import {useOutsideClick} from "../../../hooks";

export const Modal = () => {
  const {modal, setModal, clearItemsOnCart} = useAppContext()
  const ref = useRef()
  const onClose = () => setModal({title: '', description: '', isShow: false})

  useOutsideClick(ref, onClose)

  const onCheckoutProduct = () => {
    clearItemsOnCart()
    onClose()
  }

  if (!modal.isShow) {
        return (
            <Fragment>

            </Fragment>
        )
  };
  return (
      <div className="fixed inset-0">
        <div  className="fixed cursor-pointer inset-0 bg-black opacity-50"/>
        <div ref={ref} className="fixed rounded top-1/2 justify-between items-center right-1/2 flex min-h-[200px] min-w-[400px] flex-col translate-x-1/2 flex justify-center bg-white shadow-lg  p-4">
          <h1 className='text-[20px] font-medium'> {modal.title} </h1>
          <span className='text-[18px] font-medium'> {modal.description} </span>
          <Button onClick={onCheckoutProduct} className='bg-secondary text-white font-medium rounded p-2'>Оформить заказ</Button>
          <Button onClick={onClose} className='bg-red-400 text-white font-medium rounded p-2'>Закрыть</Button>
        </div>
      </div>
  )
}
