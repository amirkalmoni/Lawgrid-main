import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { menus } from '../lib/data'

const Header = ({ data = {} }) => {
  const {
    menuDesktopLeft,
    menuDesktopRight,
    menuMobilePrimary,
    menuMobileSecondary,
  } = data

  return (
    <div className="w-full sticky bg-white top-0 shadow-sm  border-b border-gray-300 z-50">
      <nav className="max-w-8xl mx-auto flex justify-between px-4 tablet:px-4">
        {/* Logo  */}
        <Disclosure className="bg-pink-200">
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full tablet:w-auto">
                <div className="flex gap-x-2  tablet:ml-8 items-center">
                  <Link
                    className="flex items-center space-x-2 text-2xl mb-2 pr-3 font-medium text-indigo-500 dark:text-gray-100"
                    href="/"
                  >
                    <Image
                      src="/static/changeLogoBg.png"
                      priority
                      width={160}
                      height={160}
                      alt="logo_cream"
                      sizes="50vw"
                    />
                  </Link>

                  {/* menu  */}
                  <div className="hidden text-center tablet:flex tablet:items-center none">
                    <ul className="items-center justify-end flex-1 pt-6 list-none tablet:pt-0 tablet:flex">
                      {menuDesktopLeft
                        ? menuDesktopLeft?.items.map((item, index) => (
                            <li className="mr-3 nav__item " key={item.title}>
                              <Link
                                className="inline-block px-4 py-2 text-tablet text-gray-600 no-underline rounded-md hover:text-cream font-semibold duration-500 font-Founders_Grotesk"
                                href={item.page.slug}
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))
                        : menus.map((menu, index) => (
                            <li className="mr-3 nav__item " key={menu.name}>
                              <Link
                                className="inline-block px-4 py-2 text-tablet text-gray-600 no-underline rounded-md hover:text-cream font-semibold duration-500 font-Founders_Grotesk"
                                href={menu.slug}
                              >
                                {menu.name}
                              </Link>
                            </li>
                          ))}
                    </ul>
                  </div>
                </div>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto rounded-md tablet:hidden hover:text-lawgrid_blue  dark:focus:bg-blue-200 focus:outline-lawgrid_blue"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 tablet:hidden h-full transition-all duration-900 ease-out">
                  <>
                    {menuDesktopLeft
                      ? menuDesktopLeft.items.map((item, idx) => (
                          <Link
                            className="w-full px-4 py-2 -ml-4 rounded-md  hover:text-cream focus:text-cream text-sm font-semibold"
                            key={item.title}
                            href={item.page.slug}
                          >
                            {item.title}
                          </Link>
                        ))
                      : menus.map((item, idx) => (
                          <Link
                            className="w-full px-4 py-2 -ml-4 rounded-md  hover:text-cream focus:text-cream text-sm font-semibold"
                            key={item.title}
                            href={item.slug}
                          >
                            {item.name}
                          </Link>
                        ))}
                    <Link
                      className="px-4 py-2 font-Poppins no-underline rounded-md hover:text-cream focus:text-lawgrid_blue  bg-lawgrid_blue w-full justify-center flex items-center text-white font-semibold"
                      href="/"
                    >
                      Log in
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        <div className="hidden mr-3 space-x-4 tablet:flex items-center nav__item">
          <button className="btn px-6 h-12 text-sm text-lawgrid_blue hover:text-lawgrid_blue rounded-tablet font-semibold hidden tablet:inline-block shadow-blue-500/50 drop-shadow-md font-Poppins">
            Log in
          </button>
          <Link
            href="/contact"
            className="btn px-6 h-12 border border-gray-300 hover:border-lawgrid_blue text-sm text-lawgrid_blue rounded-tablet font-semibold hidden tablet:flex items-center shadow-blue-500/50 drop-shadow-md font-Poppins"
          >
            Contact sales
          </Link>
          <button className="btn px-6 h-12 bg-lawgrid_blue text-sm text-white hover:text-cream rounded-tablet font-semibold hidden tablet:inline-block shadow-blue-500/50 drop-shadow-md font-Poppins">
            Get started
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header
