import { ChevronDown } from "lucide-react";

const BooksSectionHeader = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-center mt-25 fpd">Books</h2>

      {/* Button */}
      <div className="flex justify-center max-md:ml-6 md:justify-end mb-9">
        <div className="w-40 dropdown dropdown-bottom dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="m-1 rounded-lg btn btn-success btn-dash"
          >
            Sort by <ChevronDown />
          </div>

          <ul
            tabIndex={-1}
            className="p-2 shadow-sm dropdown-content menu bg-base-100 rounded-box z-1 w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BooksSectionHeader;
