import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export default function Faq() {
  return (
    <div className="p-8 mx-auto bg-[#eee]">
      <div className="max-w-7xl mx-auto">

      </div>
			<div className="py-[40px]">	
				<h2 className="font-bold text-4xl text-center mb-5">FAQ</h2>
				<p className="text-center mb-3">Most frequent questions and answers</p>
			</div>
      <div className="w-full tablet:max-w-3xl mx-auto rounded">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5 ">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center font-medium  justify-between w-full px-4 py-4 text-lg text-left text-lawgrid_blue   hover:bg-gray-100 focus:outline-none  focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75  border-b border-gray-400">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-blue`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
}

const faqdata = [
  {
    question: "Is this template completely free to use?",
    answer: "Yes, this template is completely free to use.",
  },
  {
    question: "Can I use it in a commercial project?",
    answer: "Yes, this you can.",
  },
  {
    question: "What is your refund policy? ",
    answer:
      "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    question: "Do you offer technical support? ",
    answer:
      "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
  },
];