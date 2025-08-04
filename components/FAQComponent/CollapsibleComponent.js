import React from "react";

export default function CollapsibleComponent({
  show = false,
  content = <></>,
  title = "Title Text",
  toggleClick = () => {},
}) {
  return (
    <div className="w-full bg-white shadow border-2 border-amber-500 rounded-xl max-w-[800px] mx-auto">
      <div
        onClick={toggleClick}
        className="w-full flex justify-between items-center p-4">
        <h4 className="text-base text-neutral-900 font-medium px-2">{title}</h4>
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        )}
      </div>
      {
        <div
          className={`${
            show ? "h-fit pb-4" : "h-0"
          } px-4 transition-all text-sm duration-300 overflow-hidden w-full`}>
          {content}
        </div>
      }
    </div>
  );
}
