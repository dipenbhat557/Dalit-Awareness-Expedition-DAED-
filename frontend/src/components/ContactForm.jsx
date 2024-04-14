const ContactForm = () => {
  return (
    <div className="border border-b-0 border-t-0 w-full border-r-0 mt-8 p-4">
      <form className="  my-2  max-w-[400px] ">
        <div class="mb-5 ">
          <label for="large-input" className=" mb-2 text-sm font-medium ">
            Name *
          </label>
          <input
            type="text"
            id="large-input"
            className="h-2 block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="mb-5">
          <label
            for="base-input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email *
          </label>
          <input
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            for="base-input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Message *
          </label>
          <textarea
            type="text"
            id="small-input"
            className="block h-32  w-full  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-m focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="my-4">
          <h1>Mandatory fields*</h1>
        </div>

        <button
          type="button"
          className=" mt-2 w-full focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
