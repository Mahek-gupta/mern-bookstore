import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaLock } from "react-icons/fa6";
import { FaBold } from "react-icons/fa";


const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Store', href: '#', current: false },
  { name: 'Contact US', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <div>
       <Disclosure as="nav" className="bg-gradient-to-br from-white to-pink-100">
      <div data-aos="zoom-in" className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center text-sm font-bold  ">
        
             
                <h4 className='flex group items-center  p-2 hover:scale-105 ml-0 hover:bg-gray-700 hover:text-white rounded-md '><span><FaBold className='bg-white rounded-md shadow-lg h-6 w-6 px-1 py-1 text-black group-hover:bg-black group-hover:text-white'/></span>ook Store</h4>
              
              <img
                alt="Your Company"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQCBQcGAf/EAD4QAAIBAgIECQsDAgcAAAAAAAABAgMEETEFBhIhMzVBUXFzgbHBExQiMjRCYXJ0obKCkdEjUhUkQ2KS4fH/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QALBEBAAIBAwMEAQMEAwAAAAAAAAECEQMEMTIzcQUSIUFRE4GhQmGRwSIjQ//aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYOtTi8HJJk4kfYzjJYxaZAyAAAAAAAAAYuUVyjAKSlk8RgZAAAAAAAAAAAABjUnGnBzm0orNvkJiJmcQKC0zZSqKCqPFvBejuNp22pEZwjKzUrOMklkZxXMJRV0k2XohVxaeK3PnNcZQmp3k4bp+lH7mdtKJ4Tldp1YVY4weJjMTHKUhAAAAGEqiTwRMQMVjLN7iRlspIjIqeUcLxRXvbjTGaZQ+Vb+FrJ+cy9F+q0ia6M3j/AIkzhlaaVtLur5KlP+pnstYNkX0NSkZmCJyumSQAAAAAAAABq9Y5OOjZJcskmdO0jOqrbh4iFafndLfudSPej2LUj2SpD31f1+08OvDQuM2TQVGbDFkoYKpKlLag8GhNYnlLY2l7Gq1Cfo1O8576U1+Y4TlbMh8ctnFvcgK9SvtborBGkVCBMoTRKSlkyooVOMKa+L7jaO2hptbJuLt9nlq4fZnXsoic5Vs0VlVlDTdi4tpuvGL6G8GdurETo2z+FY5dHPBagAAAAAAAADVay8W/rR1bPuK24eEj7XR62Pej2rdE+FIdDr8J2ngV4aFxmyaCozYYsmEI55loEMm08U965S+EZbSwvVUi4VXhKKxx50cerpTWcxwtEsKtw6093qrJFq09vIyh8WJE8CkiaORRLJ5FRQqcY0ul9xtHQhpNb87brvBnZsvtWzQWvHdh9TDvO7Vj/pv4lT7dLPn2wAAAAAAAAA1WsvFv614nVtO4rbh4SPtdLrY/kj2bdE+FIdDr8J2ng14aFx6zJoKjNhiyYQjmWgQzLwhHHdUWDJngXqZhKVmBnKU8CkiaORRLJ5FRQqcY0ulm0dtDSa4Z23XeDOvZfatmhteO7D6mHeehq9m/iVI5dJPnmz6AAAAAAAAA1OsvFr+deJ1bTuK24eFj7ZS62P5I9q3RPhSHQ63CPpPArw0LjNk0FRmwxZMIRzLQIZl4Qjjwi6SZ4F6mYylZgZylPAzkTRyKJZPIqKNTjGl2m3/mho9b87brvBnXsftWzQ2vHdh9TDvPQ1exbxKsculHzzUAAAAAAAAAanWXi1/OvE6tp3FbcPCx9spdbH8ke1bonwpDodfhH0ngV4aFxmyaCozYYsmEI5loEMy8IRx4REzwL1MwlKzApKU8DORNHIolk8ioo1OMKPabR20NHrhnbdd4M69l9q2aC146sPqYd536vYt4lWOXSz59qAAAAAAAAANTrLxa/nXidW07ituHhY+20etj+SPat0T4Uh0OvwnaeBXho+XHrMmgqs2GLJhCOZaBDPMvCEUeFj0lp4IXqRhZKzAzlKxHkM5E0ciiWRUUqnGNLtNo7aGi1wztuu8Gdey+1bNDbcd6P+oh3nfq9i3iVI5dKPn2wAAAAAAAAA1OsvFr+deJ1bTuK24eFj7bR62P5I9q3RPhSHQ6/Cdp4FeGj5cesyaCqzYYsmEI5FoEM8y8IRLhI9JaeBfpZGFkrEDOUrEeQzkTRyKJZFRSqcY0u02jtoaLW/O263wZ2bL7Vs0Nrx1YfUw7zu1OzfxKv26UfPtQAAAAAAAABqdZeLX868Tq2ncVtw8LH22j1sfyR7VuifCkOh1uEfSeDXho+XHrMUFVmwxZMIRzLQIZ5l4QiXCR6S08C9SyMJSswM5SsR5DORNHIolkVFGpxjS7TaO2ho9b87brfBnZsvtWzQ23HOj/AKmHed2r2b+JUjl0o+fbAAAAAAAAADVay8W/rXidWz7ituHg4+20etj3o9q3RPhSHRK79N9J4FfmGiKvWg5PCRetZwZQbSfKaYQ+MlKOZaEIZ5l4QijwsektPAvUjCUrMDOUrEc0ZyJU0kUS+SrQjnIRWZFFVY1dJU1B44YtmsxMU+UNPrfu82fPW8Gdey+1bNDa8dWH1MO87tTs38Sr9uknz7V9AAAAAAAAAanWbfo39a8Tq2fcVtw8FOThV2orFxe0uzee3jMKQ9vHSlvcxU6M4uMlj8UeNGhavxK+VetTo1ntRm4y+DNKzaqEMlcUt8WqkfhmXiayFO+W1szxjLmYnT/BlZVSMt6ZSYmDLCZaBFHhY9JaeBepGFkrMWlmZylHWv6dGL9JE10plGVR3tzcbqFKTX9z3I09lK8mWUbSrU9putmPLGDK/qY6YMLNvKzsU/J+s85SeLZnat7z8jz2sV/Tu7mhRoyU5Qk5ywySwf8AJ3bXTmkTMomctba8daP+ph3nVq9i3iVI5dIPn2z6AAAAAAAAA1eskJS0VUlCLk4elguVI6draI1Y/urbhzepcwc8cdx78VmGeYYf0nvyfPF4MY/JynpV69LgrusuZSlivuUnTrP0lbpaXv6fLTqr4rBlJ29JMrC05GpHZu7aS/3L0l/JnO2mODK1bXVKp7JXU8PclLeZWrMcwlcp3WLwlufMyk1SlptOpEi0fAsyrxpxxxSMvZmU5Val3OovRexBZzky8UiEc8KFTSdjRnucriouZYkWmPuW9Nrq34hTnrLd1MY29tGmscFty8F/JvoaFNSPcruNG2jb2yrzv9IVvXu9j4U44d+J0Ro0j6YZRSSnw9erU+abL+3HEIZwq29BYRSRHtmRNoRSv9P2caKx8nNVJv8AtjHf/wBGW5n9PQnP38Jj5l0o8FqAAAAAAAAAPjSksHkBpbzVTQ13KU52uxOWcqUnDuOqm916RiLfCs1hp7jUG3bbtL+vTfNUiprwZ019UvHVWJR7GrudTNM0MXb1ba5XMpODfY933OinqWhbqiY/lHslqrmx0rYt+dWFxTive2NqP7rFHVTX0dTpt/pGJV43cZbsVjzGs0Vy+7dOcsVufOsyMfkynpaTurfc/wDMU17snvXQzO2jE8Jy3Wj9LULhNwm1KO9wnulHp+HxOe+lMJypXuno7coWsVVkv9SXqJ/DnL028zyZfbfbu7Hy11UdSW21zLDdyHDvJmmp7a/h63p1ImszLOMYwjhFJbjketiGp2qjuJUqFKpUm28Iwg5P7HrbOa10szLw/U8/rx4bG01f0/dKLjZeRi/euJqH2WL+xe+929P6s+Hn+yW1ttSLueDvNJQgv7aMHL7v+Dlv6nX+iv8AlP6baW+pGi6fDTua/wA9TDuwMLeo608YhaKQ3dhoyy0dBxsreFJPPZW99JyamrfUnN5ythcMwAAAAAAAAAAAHzABgAwIwKN9oXRt+n51Z0pt+9s4P90baevqafTZGIecvtQ7WactH3VW3lyRn6cf5O3T9TvHXGVZp+HnNIarabsU5+bq5pr3qEsX/wAc/wBsTv0t9oanxnE/3V9sw0MpY1cKilCcfWT3NfBnZEZjMfKq5Y2t5pCWzo+1q1knhtQj6K6ZZL9zPU1dPTjN7RBiZejp6OutGWEaF8oRqyk54Rljgn/4eHutWmrq+6nD2/TYxSfKJ8q+Bi9R6fUpL/C6rw3+WlvMr8vF9R737PQ4Iq4TAYH0AAAAAAAAAAAAAAAAAAAGADACtd6Ps7xxd3a0K7h6rqU1LDoxL11L06ZwjCZQjCKjCKjFbkksEik/M5lLzGtr2bingsW4pKKzbxeRej1vT+mWqraLv7e284uKKjDDeovFx6UW90OrT3WlqW9kT8/w32pXFVTrplL8vN9R737PQlXCAAAAAAAAAAAAAAAAAAAAAAAAHxgV6lnQqXVO5nBSq01hFt5dhK8alor7Y4TSjGcXGUU4tYNNZkKRmOENhZW9jQdG1pKnBycsMW976SZXvqW1JzacrJCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k="
                className="h-10 w-auto hover:scale-110 "
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-950 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
                <div className='flex items-center gap-1 text-sm font-medium ml-70 bg-white px-2 py-2 rounded-md shadow-lg hover:translate-0.5 hover:scale-105'>
                <FaLock className=''/>
                <button className=''>Buy Book</button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
    </div>
  )
}

export default Navbar
