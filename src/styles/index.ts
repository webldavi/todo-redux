export default {
  app: {
    appClass:
      "w-full h-screen p-4 flex items-center justify-center bg-gray-900",
    containerClass:
      "w-full sm:w-2/4 h-full flex flex-col gap-2 p-2 border-2 border-green-500 rounded",
  },
  details: {
    detailsClass:
      "w-full h-screen p-4 bg-gray-900 flex justify-center items-center",
    containerClass:
      "w-full sm:w-2/4 h-full p-2 border-2 border-green-500 rounded flex flex-col gap-4",
    task: {
      taskContainerClass: "flex flex-col gap-2 break-all",
      idClass: "font-bold text-sm text-gray-400",
      taskClass: "text-gray-200",
    },
  },
  head: {
    headClass:
      "w-full h-max p-2 flex flex-row items-center justify-center gap-4",
  },
  button: {
    buttonClass: "w-max p-2 rounded bg-green-500",
  },
  input: {
    inputContainerClass: "block flex-1 h-full",
    inputClass:
      "h-full w-full border-2 border-gray-500 bg-gray-900 outline-none text-white p-2 rounded",
  },
  itemContainer: {
    itemContainerClass: "w-full flex flex-col flex-1 gap-2 p-2",
    itemClass:
      "w-full h-max p-2 border-2 border-gray-600 rounded flex flex-row gap-1 text-white",
    itemTextClass: "truncate flex-1",
  },
};
