import { FiShoppingCart } from 'react-icons/fi'

function CardIcon() {
    return (
        <div>

            <div className='relative'>
                <FiShoppingCart className='text-2xl' />
                <span className='bg-red-500 text-white  w-5 h-5 flex items-center justify-center rounded-full absolute -top-2 -right-4 text-sm-xs'>0</span>
            </div>
        </div>
    )
}

export default CardIcon