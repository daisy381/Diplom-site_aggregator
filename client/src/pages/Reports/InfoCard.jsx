export const InfoCard = (item) => {
    const {title,day,dateFrom,dateTo} = item;
    return (
        <div className='bg-white flex w-1/2 justify-between rounded-3xl px-[30px] py-[30px] shadow-md'>
            <div className='flex gap-y-5 flex-col'>
                <span className='opacity-50 text-[16px] font-medium'>{title}</span>
                <span className='text-blue-900 text-[24px] font-bold'>$124 345</span>
                <div className='flex gap-x-4'>
                    <span className='text-green-500 font-bold text-[16px]'>47%</span>
                    <span className='font-medium opacity-50 text-[16px]'> since last month</span>
                </div>
            </div>
            <span className='text-[16px] opacity-50'>{day} {dateFrom} - {day} {dateTo}</span>
        </div>
    )
}
