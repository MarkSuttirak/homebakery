import { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import phone from "../img/phone.svg";
import mail from "../img/mail.svg";
import HomeBakeryLogo from "../img/Logo-Home-Bakery-Logo.png";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: Squares2X2Icon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Reports",
    description:
      "Get detailed reports that will help you make more informed decisions ",
    href: "#",
    icon: DocumentChartBarIcon,
  },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Popover className="relative bg-white">
        <div className="mx-auto max-w-[1290px]  items-center justify-between py-6 md:space-x-10 lg:flex hidden">
          <div>
            <ul class="max-w-md space-y-1 text-[#795E32] hover:text-[#E6A141] font-Avenir text-[19px] font-aviner-medium tracking-[0.3%]">
              <li class="flex items-center">
                <img src={phone} className="mr-2" alt="" />
                02-244-5458, 02-244-5459
              </li>
              <li class="flex items-center">
                <img src={mail} className="mr-2" alt="" />
                homebakery.sdu@gmail.com
              </li>
            </ul>
          </div>
          <div className="mx-auto ">
            <a href="/">
              <img src={HomeBakeryLogo} className="w-[216px]" alt="" />
            </a>
          </div>
          <div class="inline-flex" role="group">
            <button
              type="button"
              class="inline-block  px-4 text-xs font-medium uppercase text-[#E6A141] text-right text-shadow-md font-Avenir text-[19px] font-900
              border-r border-solid border-#795E32"
            >
              TH
            </button>
            <button
              type="button"
              class="inline-block  px-3 text-xs font-medium uppercase text-[#795E32] hover:text-[#E6A141] text-right text-shadow-md font-Avenir text-[19px] font-900"
            >
              EN
            </button>
          </div>
        </div>

        <div className="lg:hidden block mt-5">
          <div className="flex justify-between pl-2 pr-5">
            <img className="w-[100px]" src={HomeBakeryLogo} alt="" />
            <button className="" onClick={() => setOpenMenu(!openMenu)}>
              Menu
            </button>
          </div>
          {openMenu && (
            <div className="bg-white flex flex-col mt-5">
              <Link to="/" className="border-b py-4 px-4 ">
                home
              </Link>
              <Link to="/our-story" className="border-b py-4 px-4 ">
                our story
              </Link>
              <Link to="/" className="border-b py-4 px-4 ">
                product
              </Link>
              <Link to="/snackbox" className="border-b py-4 px-4 ">
                snack box
              </Link>
              <Link to="/bakery-article" className="border-b py-4 px-4 ">
                bakery article
              </Link>
              <Link to="/contact-us" className="border-b py-4 px-4 ">
                contact us
              </Link>
            </div>
          )}
        </div>

        <nav
          class="mx-auto hidden sm:flex max-w-7xl items-center justify-center p-6 lg:px-8 border-t border-solid border-[#C4B7A3]"
          aria-label="Global"
        >
          <div class="flex lg:hidden">
            <button
              type="button"
              class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div class="flex lg:gap-x-20">
            <Link
              to="/"
              class={`${
                location.pathname === "/" ? "text-[#E6A141]" : ""
              } text-[#795E32] hover:text-[#E6A141] text-center font-Avenir text-[24px] font-500 lowercase `}
            >
              Home
            </Link>
            <Link
              to="/our-story"
              class={`${
                location.pathname === "/our-story" ? "text-[#E6A141]" : ""
              } text-[#795E32] hover:text-[#E6A141] text-center font-Avenir text-[24px] font-500 lowercase `}
            >
              Our story
            </Link>
            <Link
              to="#"
              class={`${
                location.pathname === "#" ? "text-[#E6A141]" : ""
              } text-[#795E32] hover:text-[#E6A141] text-center font-Avenir text-[24px] font-500 lowercase `}
            >
              Product
            </Link>
            <Link
              to="/snackbox"
              class={`${
                location.pathname === "/snackbox" ? "text-[#E6A141]" : ""
              } text-[#795E32] hover:text-[#E6A141] text-center font-Avenir text-[24px] font-500 lowercase `}
            >
              Snack box
            </Link>
            <Link
              to="/bakery-article"
              class={`${
                location.pathname === "/bakery-article" ? "text-[#E6A141]" : ""
              } text-[#795E32] hover:text-[#E6A141] text-center font-Avenir text-[24px] font-500 lowercase `}
            >
              bakery article
            </Link>
            <Link
              to="/contact-us"
              class={`${
                location.pathname === "/contact-us" ? "text-[#E6A141]" : ""
              } text-[#795E32] hover:text-[#E6A141] text-center font-Avenir text-[24px] font-500 lowercase `}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </Popover>
    </>
  );
}
