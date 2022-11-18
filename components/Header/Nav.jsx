'use client'
import { Dialog, Popover, Tab, Transition } from "@headlessui/react"
import ThemeSwitcher from "./ThemeSwitcher"
import { ArrowLongRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { Fragment, useState } from "react"
import Image from "next/image"
import Link from "next/link"

const Nav = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const [open, setOpen] = useState(false)
  const navigation = {
    items: [
      {
        name: "Projects",
        featured: [
          {
            name: 'Pacha',
            href: '#',
            imageSrc: 'https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/peach_1f351.png',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'TailStrap',
            href: '#',
            imageSrc: 'https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/black-cat_1f408-200d-2b1b.png',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            name: "TailStrap",
            imageSrc: "https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/black-cat_1f408-200d-2b1b.png",
            description: "A React component library built with TailwindCSS.",
            href: "#"
          },
          {
            name: "Pacha",
            imageSrc: "https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/peach_1f351.png",
            description: "Pacha is fun! Pacha improves writing codes in your code editor much better.",
            href: "#",
          },
          {
            name: "Shikhun",
            imageSrc: "https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/fast-forward-button_23e9.png",
            description: "A learning solution for students and teachers of BD",
            href: "#",
          },
          {
            name: "Basic's School",
            imageSrc: "/bsxcool.svg",
            description: "A Learners Community",
            href: "#"
          },
          {
            name: "Coming Soon",
            imageSrc: "/bsxcool.svg",
            description: "Something Awesome is Coming ",
            href: "#"
          },
          {
            name: "Coming Soon",
            imageSrc: "/bsxcool.svg",
            description: "Aomethi Aweasome",
            href: "#"
          }
        ]
      },
      {
        name: "Community", href: "/community",
        sections: [
          {
            name: "Community",
            items: [
              {
                name: "Home",
                href: "#",
                emoji: "🏠"
              },
              {
                name: "Questions",
                href: "#",
                emoji: "🧐"
              },
              {
                name: "Videos",
                href: "#",
                emoji: "🍿"
              },
              {
                name: "Courses",
                href: "#",
                emoji: "🎓"
              },
              {
                name: "Snippets",
                href: "#",
                emoji: "📝"
              },
              {
                name: "Fun",
                href: "#",
                emoji: "🤪"
              },

            ],
          },
          {
            name: "Rewards",
            items: [
              {
                name: "Points",
                href: "#",
                emoji: "⭐"
              },
              {
                name: "Badges",
                href: "#",
                emoji: "🏅"
              },
              {
                name: "Cool Coin",
                href: "#",
                emoji: "🪙"
              },
              {
                name: "Leaderboard",
                href: "#",
                emoji: "🏆"
              },



            ],
          },
          {
            name: "Resources",
            items: [
              {
                name: "eBooks",
                href: "#",
                emoji: "📚"
              },
              {
                name: "Guides",
                href: "#",
                emoji: "📖"
              },
              {
                name: "Topics",
                href: "#",
                emoji: "📌"
              },
              {
                name: "Tips",
                href: "#",
                emoji: "💡"
              },
            ],
          },
        ]
      },
      { name: "About", href: "/about" },
      { name: "Pricing", href: "/pricing" },
    ]

  }
  return (
    <nav className="relative h-24 select-none tails-selected-element" >
      <div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium  md:overflow-visible lg:justify-center sm:px-4 md:px-2 lg:px-0">
        <div className="flex items-center justify-start w-1/4 h-full pr-4 pl-2 ">
          <Link href="#_" className=" py-4 md:py-0 flex  items-center">
            <span>
              <svg className="dark:stroke-white stroke-black fill-none" width="27" height="32" viewBox="0 0 27 32" fill="current-color" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 7.5L9.5 17.312M9.5 17.312L4.44529 28.591C4.14879 29.2526 4.63285 30 5.35784 30H18.9283C21.4354 30 23.6841 28.387 24.5871 25.9411C26.1217 21.7846 23.1887 17.312 18.9283 17.312H18.2316M9.5 17.312H18.2316M9.5 17.312H2.53948C1.81564 17.312 1.33158 16.5668 1.62584 15.9055L7.54906 2.59347C7.70966 2.23255 8.06767 2 8.4627 2H18.4976C21.6545 2 23.8131 5.33459 22.6405 8.39998L18.2316 17.312M18.2316 17.312L15 24.5" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
            <p className="text-xl font-black   italic w-4 leading-[0.79] dark:text-white leading-">Basic&apos;s School </p>
          </Link>
        </div>
        <div className="top-0 left-0 items-start w-full h-full p-4  bg-gray-900 bg-opacity-50 md:items-center md:w-3/4  lg:text-base md:bg-transparent md:p-0 md:relative md:flex hidden" >
          <div className="flex-col w-full h-auto overflow-hidden  rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">

            <div className="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
              <div className="">
                {/* Mobile menu */}
                <Transition.Root show={open} as={Fragment}>
                  <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                      as={Fragment}
                      enter="transition-opacity ease-linear duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity ease-linear duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                      <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                      >
                        <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto  pb-12 shadow-xl  text-black dark:text-white bg-white dark:bg-[#0d1117]">
                          <div className="flex px-4 pt-5 pb-2">
                            <button
                              type="button"
                              className="-m-2 inline-flex items-center justify-center rounded-md p-2 "
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close menu</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>

                          {/* Links */}
                          <Tab.Group as="div" className="mt-2 ">
                            <div className="">
                              <Tab.List className="-mb-px relative flex space-x-8 px-4 overflow-scroll scrollbar-hide ">
                                {navigation.items.map((item) => (
                                  <Tab
                                    key={item.name}
                                    className={({ selected }) =>
                                      classNames(
                                        selected ? 'text-rose-600 border-rose-600' : ' border-transparent',
                                        'flex-1 whitespace-nowrap border-b-2 py-4 px-1  text-base font-medium'
                                      )
                                    }
                                  >
                                    {item.name}
                                  </Tab>
                                ))}<div className="absolute right-0 top-0 bg-gradient-to-l w-3/12 to-red-500 from-[#0d1117]" />
                              </Tab.List>

                            </div>
                            <Tab.Panels as={Fragment}>
                              {navigation.items.map((item) => (
                                <Tab.Panel key={item.name} className="space-y-10 px-4 pt-10 pb-8 ">
                                  <div className="grid grid-cols-2 gap-x-4">
                                    {item.featured?.map((item) => (
                                      <div key={item.name} className="group relative ">
                                        <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                          <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                                        </div>
                                        <a href={item.href} className="mt-6 block font-medium ">
                                          <span className="absolute inset-0 z-10" aria-hidden="true" />
                                          {item.name}
                                        </a>
                                        <p aria-hidden="true" className="mt-1">
                                          Visit Now
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                  {item.sections?.map((section) => (
                                    <div key={section.name}>
                                      {section.imageSrc ? (
                                        <div className="flex flex-row-reverse justify-between items-center gap-x-2 ">
                                          <div className="bg-[#0d1117] min-w-max border aspect-square dark:bg-white  rounded"><Image src={`${section.imageSrc}`} height={60} width={60} alt={section.name} /></div>


                                          <div><p className="font-medium ">
                                            {section.name}
                                          </p>
                                            <p className="h-20 truncate whitespace-normal text-gray-600">{section.description}</p>
                                          </div>
                                        </div>) : (
                                        <p className="font-medium ">
                                          {section.name}
                                        </p>)
                                      }

                                      <ul


                                        className="mt-6 flex flex-col space-y-6"
                                      >

                                        {section.items?.map((item) => (
                                          <li key={item.name} className="flex group">
                                            <a href={item.href} className=" flex items-center trancate">
                                              <b>{item.emoji}</b>
                                              <p>{item.name}</p>
                                              <ArrowLongRightIcon className="h-6 w-6 opacity-0 group-hover:opacity-100 transition duration-500" />
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </Tab.Panel>
                              ))}
                            </Tab.Panels>
                          </Tab.Group>

                          <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                            {navigation.items.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a href={item.href} className="-m-2 block p-2 font-medium ">
                                  {item.name}
                                </a>
                              </div>
                            ))}
                          </div>

                          <div className="space-y-6 border-t border-gray-200  py-6 px-4">
                            <div className="flow-root">
                              <a href="#" className="-m-2 block p-2 font-medium ">
                                Sign in
                              </a>
                            </div>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </Dialog>
                </Transition.Root>


                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="">
                    <div className="flex h-16 items-center">
                      <button
                        type="button"
                        className="rounded-md  p-2  lg:hidden"
                        onClick={() => setOpen(true)}
                      >
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </button>
                      <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                        <div className="flex h-full space-x-8">
                          {navigation.items.map((item) => (
                            <Popover key={item.name} className="flex ">
                              {({ open }) => (
                                <>
                                  <div className="relative flex">
                                    <Popover.Button
                                      className={classNames(
                                        open
                                          ? ' text-rose-600'
                                          : 'border-transparent  hover:text-rose-600',
                                        'relative z-10 -mb-px flex items-center border-b-2 pt-px outline-none font-medium transition-colors duration-200 ease-out'
                                      )}
                                    >
                                      {item.name}
                                    </Popover.Button>
                                  </div>
                                  <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Popover.Panel className="absolute inset-x-0 top-full bg-white  rounded-lg text-slate-600 ">
                                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                      <div className="absolute inset-0 top-1/2  shadow" aria-hidden="true" />

                                      <div className="relative ">
                                        <div className="mx-auto max-w-7xl px-8">
                                          <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                              {item.featured?.map((item) => (
                                                <div key={item.name} className="group relative text-base sm:">
                                                  <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                    <img
                                                      src={item.imageSrc}
                                                      alt={item.imageAlt}
                                                      className="object-cover object-center"
                                                    />
                                                  </div>
                                                  <a href={item.href} className="mt-6 block font-medium ">
                                                    <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                    {item.name}
                                                  </a>
                                                  <p aria-hidden="true" className="mt-1">
                                                    Shop now
                                                  </p>
                                                </div>
                                              ))}
                                            </div>
                                            <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-left   ">
                                              {item.sections?.map((section) => (
                                                <div key={section.name}>
                                                  <p id={`${section.name}-heading`} className="font-medium ">
                                                    {section.name}
                                                  </p>
                                                  <ul

                                                    aria-labelledby={`${section.name}-heading`}
                                                    className="mt-6 space-y-6 sm:mt-4 sm:space-y-4 h-full border-r-2  border-grey-600 "
                                                  >
                                                    {section.items?.map((item) => (
                                                      <li key={item.name} className="flex group">
                                                        <a href={item.href} className="hover: flex items-center trancate">
                                                          <b>{item.emoji}</b>
                                                          <p>{item.name}</p>
                                                          <ArrowLongRightIcon className="h-6 w-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-500 ease-in-out" />
                                                        </a>
                                                      </li>
                                                    ))}
                                                  </ul>
                                                </div>
                                              ))}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Popover.Panel>
                                  </Transition>
                                </>
                              )}
                            </Popover>
                          ))}

                          {/* {navigation.items.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center  font-medium  hover:"
                              >
                                {item.name}
                              </a>
                            ))} */}
                        </div>
                      </Popover.Group>


                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div className="flex flex-row gap-x-4 items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
              <ThemeSwitcher />
              <a href="/auth/signin" className="w-full px-4 py-2 mr-0 dark:bg-white dark:text-black  md:mr-2 text-white bg-black  rounded-xl lg:mr-3 md:w-auto">Sign In</a>
            </div>
          </div>
        </div>
        <div className="absolute right-0 flex flex-col items-center  justify-center w-10 h-10  rounded-full cursor-pointer md:hidden hover:bg-gray-100">
          <svg className="w-6 h-6 " fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16" className=""></path></svg>
          <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" className=""></path></svg>
        </div>
      </div>
    </nav>
  )
}

export default Nav