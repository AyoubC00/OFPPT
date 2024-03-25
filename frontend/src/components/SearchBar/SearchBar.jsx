import React from 'react';

export const SearchBar = () => {
 return (
<div class=" flex w-1/2-sm mx-3.5   ">
  <input
    type="search"
    class="relative m-0 -me-0.5 block flex-auto rounded-s border border-solid border-neutral-200  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
    placeholder="Search"
    aria-label="Search"
    id="exampleFormControlInput3"
    aria-describedby="button-addon3" />
  <button
    class="z-[2] inline-block rounded-e border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary bg-blue-gray-500 "
    data-twe-ripple-init
    data-twe-ripple-color="white"
    type="button"
    id="button-addon3">
    Search
  </button>
</div>
 )
}
