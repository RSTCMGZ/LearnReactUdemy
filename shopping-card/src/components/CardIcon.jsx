import { FiShoppingCart } from 'react-icons/fi'
import { MyContext } from '../main'
import { useContext } from 'react'
function CardIcon({ cart }) {

    const { myState, setMyState } = useContext(MyContext)


    return (
        <div>

            <div className='relative'>
                <FiShoppingCart className='text-2xl' />

                {
                    cart.length > 0 && (
                        <span className='bg-red-500 text-white  w-5 h-5 flex items-center justify-center rounded-full absolute -top-2 -right-4 text-sm-xs'>
                            {cart.length}
                        </span>
                    )
                }

            </div>
        </div>
    )
}

export default CardIcon