import React, { useState } from 'react'
import Box from './Box'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Filter() {
    const [startDate, setStartDate] = useState(new Date());
    let handleSelect = (e) => {
        console.log(startDate);
    }
    return (

        <div className='w-[22rem]'>
            <Box>

                <form className="max-w-sm mx-auto px-4">
                    <label for="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chọn thể loại</label>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option selected>Chọn thể loại</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </form>
                {/* <div className=' pl-4 mt-8 flex'>
                    <div>
                        <p className=' font-bold'>Ngày bắt đầu</p>
                        <div className=' w-[50%]'>

                            <DatePicker className=' '  selected={startDate} onSelect={handleSelect} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>
                    <div>
                        <p className=' font-bold'>Ngày kết thúc</p>
                        <div className='w-[50%]'>

                            <DatePicker className='' selected={startDate} onSelect={handleSelect} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>
                </div> */}

                <button type="button" className="w-full text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-8 ">⚔️Submit</button>
            </Box>
        </div>
    )
}

export default Filter