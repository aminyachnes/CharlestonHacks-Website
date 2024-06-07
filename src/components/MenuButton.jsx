import { Link } from "react-router-dom";

function MenuButton(props) {
  const {
    children,
    to
  } = props

  return (
      <Link
        className="text-white flex items-center justify-center bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 aspect-[4] min-w-[70%] max-w-[90%]"
        {...props}
        onClick={(e) => {
          // e.preventDefault(); // <-- prevent default action
          e.stopPropagation();
        }}
        to={to}
      >
        {children}
      </Link>
  )
}

export default MenuButton