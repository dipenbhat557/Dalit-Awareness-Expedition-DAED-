const PayForm = () => {
  return (
    <div className=" max-w-[400px]  mt-8 p-4 items-center">
      <form className="  my-2   ">
        <div class="mb-5 w-full">
          <label for="large-input" class=" mb-2 text-sm font-medium ">
            Name *
          </label>
          <input
            type="text"
            name="name"
            id="large-input"
            class="h-2 block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="mb-5">
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Email *
          </label>
          <input
            type="text"
            id="base-input"
            name="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="mb-5">
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Current Adress *
          </label>
          <input
            type="text"
            name="adress"
            id="base-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Please mention the type of inkind support *
          </label>
          <textarea
            type="text"
            id="small-input"
            class="block h-32  w-full  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-m focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="my-8">
          <h1 className="text-gray-900 ">
            For cash support ,please deposit in our bank account
          </h1>
          <ul className="list-disc">
            <li>Account Name</li>
            <li>Account Number</li>
            <li>Bank Name: Nepal Investment Bank Ltd</li>
            <li>Bank Adress: Durbar Marg,Kathmandu ,Nepal</li>
            <li>SWIFT CODE:</li>
          </ul>
        </div>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            for="file_input"
          >
            Upload slip deposit here
          </label>

          <input
            className="block w-full text-sm text-gray-400  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
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

export default PayForm;
