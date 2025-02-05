import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FaChevronDown as ChevronDownIcon } from "react-icons/fa";
import { cx } from "@/lib/cx";
type Props = {
  items: string[];
  selected: string;
  setSelected: (val: string) => void;
};
export default function DropDown({ items, selected, setSelected }: Props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-base-100 px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset  ">
          <p className="text-ellipsis overflow-hidden max-w-full">{selected}</p>
          <ChevronDownIcon className="-mr-1 h-5 w-5 " aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md  shadow-lg ring-1 bg-base-100 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <a
                    onClick={() => setSelected(item)}
                    href="#"
                    className={cx(
                      active ? "border border-gray-400" : "",
                      "block px-4 py-2 text-sm text-ellipsis overflow-hidden max-w-full"
                    )}
                  >
                    {item}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
