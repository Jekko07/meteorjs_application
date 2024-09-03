import React from 'react';
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

export const SelectContact = ({ title, contact, setContact, contacts }) => (
  <Listbox value={contact} onChange={setContact}>
    <Label className="block text-sm font-medium leading-6 text-gray-900">
      {title}
    </Label>
    <div className="relative mt-2">
      <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
        <span className="flex items-center">
          {contact?.imageUrl && (
            <img
              alt=""
              src={contact.imageUrl}
              className="h-5 w-5 flex-shrink-0 rounded-full"
            />
          )}
          <span className="ml-3 block truncate">
            {contact?.name || 'Select a contact'}
          </span>
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <ListboxOptions
        transition
        className="absolute z-10 mt-1 max-h-32 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
      >
        {!contacts.length && (
          <ListboxOption
            disabled
            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
          >
            <div className="flex items-center">
              <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                No contacts found
              </span>
            </div>
          </ListboxOption>
        )}

        {contacts.map((contact) => (
          <ListboxOption
            key={contact._id}
            value={contact}
            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
          >
            <div className="flex items-center">
              {contact.imageUrl && (
                <img
                  alt=""
                  src={contact.imageUrl}
                  className="h-5 w-5 flex-shrink-0 rounded-full"
                />
              )}
              <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                {contact.name}
              </span>
            </div>

            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
              <CheckIcon aria-hidden="true" className="h-5 w-5" />
            </span>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </div>
  </Listbox>
);