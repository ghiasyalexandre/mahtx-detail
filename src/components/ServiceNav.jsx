export default function ServiceNav({ showOptions, showContactInfo }) {
  return (
    <div className="shadow-md shadow-black/20 border dark:border-white flex items-center justify-center rounded-lg md:justify-start px-1 sm:px-2 py-2 lg:py-4 lg:px-4 mb-4">
      <div className="flex items-center text-neutral-900 dark:text-neutral-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 lg:w-6 lg:h-6 mx-1 lg:mx-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span className="mx-1 sm:mx-2 text-sm sm:text-lg lg:text-xl text-neutral-900 dark:text-neutral-100">
          Categories
        </span>
      </div>

      {/* Option Selection */}
      {showOptions && (
        <>
          <span className="mx-0 sm:mx-3 lg:mx-5  text-neutral-700 dark:text-neutral-300 rtl:-scale-x-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>

          <div className="flex items-center text-neutral-900 -px-2 dark:text-neutral-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 lg:w-6 lg:h-6 mx-1 lg:mx-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
            </svg>
            <span className="mx-1 sm:mx-2 text-sm sm:text-lg lg:text-xl  text-neutral-900 dark:text-neutral-100">
              Services
            </span>
          </div>
        </>
      )}

      {/* Option Selection */}
      {showContactInfo && (
        <>
          <span className="mx-0 sm:mx-3 lg:mx-5 text-gray-700 dark:text-neutral-300 rtl:-scale-x-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>

          <div className="flex items-center text-neutral-900 dark:text-neutral-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 lg:w-6 lg:h-6 mx-1 md:ml-4 lg:mx-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <span className="mx-1 lg:mx-2 text-sm sm:text-lg lg:text-xl text-neutral-900 dark:text-neutral-100">
              Book
            </span>
          </div>
        </>
      )}
    </div>
  );
}
