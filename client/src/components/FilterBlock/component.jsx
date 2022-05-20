import {Input,InputRange} from "../../shared/components/Input";
import { useState } from 'react';
import {IconSelector} from "../../shared/IconSelector";
export const FilterBlock = () => {

  return (
    <div className="bg-white shadow-md p-[50px]">
      <h1 className="text-[30px] font-medium">Фильтры</h1>
      <div className="mt-10">
        <h1 className="text-[20px] mb-5">Текст</h1>
        <div className="space-y-2">
          {new Array(5).fill(null).map((_, index) => (
            <Input type="checkbox" title="Текст" id={index} key={index} />
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <InputRange />
        <div className="flex-col items-center space-x-2 pt-5">
          <input
            className="max-w-[100px] p-2 rounded border border-gray-400  placeholder:text-gray-400"
            type="text"
            placeholder="От"
          />
          <input
            className="max-w-[100px] p-2 rounded border border-gray-400  placeholder:text-gray-400"
            type="text"
            placeholder="До"
          />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-[20px] mb-5">Текст</h1>
        <div className="space-y-2">
          {new Array(5).fill(null).map((_, index) => (
            <Input type="checkbox" title="Текст" id={index} key={index} />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-[20px] mb-5">Текст</h1>
        <div className="space-y-2">
          {new Array(5).fill(null).map((_, index) => (
            <Input type="checkbox" title="Текст" id={index} key={index} />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-[20px] mb-5">Текст</h1>
        <div className="space-y-2">
          {new Array(5).fill(null).map((_, index) => (
            <Input type="checkbox" title="Текст" id={index} key={index} />
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-[20px] mb-5">Текст</h1>
          <div className="flex flex-col gap-y-3">
            <Input type='checkbox' id='1-star' title={
              <div className='flex space-x-2'>
                <IconSelector id='star' fill='gold' />
                <IconSelector id='star' fill='gray' />
                <IconSelector id='star' fill='gray' />
                <IconSelector id='star' fill='gray' />
                <IconSelector id='star' fill='gray' />
              </div>
            }/>
            <Input type='checkbox' id='2-star' title={
              <div className='flex space-x-2'>
                <IconSelector id='star' fill='gold' />
                <IconSelector id='star' fill='gold' />
                <IconSelector id='star' fill='gray' />
                <IconSelector id='star' fill='gray' />
                <IconSelector id='star' fill='gray' />
              </div>
            }/>
            <Input type='checkbox' id='3-star' title={
              <div className='flex space-x-2'>
                <IconSelector id='star' fill='gold' />
                <IconSelector id='star' fill='gold' />
                <IconSelector id='star' fill='gold' />
                <IconSelector id='star' fill='gray' />
                <IconSelector id='star' fill='gray' />
              </div>
            }/>
            <Input type='checkbox' id='4-star' title={
              <div className='flex space-x-2'>
                <IconSelector id='star' fill='gold' />
                <IconSelector id='star' fill='gold' />
                <IconSelector id='star' fill='gold' />
                <IconSelector id='star' fill='gold' />
                <IconSelector id='star' fill='gray' />
              </div>
            }/>
            <Input type='checkbox' id='5-star' title={
              <div className='flex space-x-2'>
                <IconSelector id='star' fill='gold' />
                <IconSelector id='star' fill='gold' />
                <IconSelector id='star' fill='gold' />
                <IconSelector id='star' fill='gold' />
                <IconSelector id='star' fill='gold' />
              </div>
            }/>
          </div>
      </div>
    </div>
  );
};
