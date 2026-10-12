import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadingListPage from "./ReadingList/ReadingListPage";
import WishListPage from "./WishList/WishListPage";
import { ChevronDown } from "lucide-react";

const ListedBookPage = () => {
  return (
    <div className="mx-auto max-w-11/12">
      <div>
        <div className="w-full bg-[#131313]/5 rounded-2xl py-8.5 mb-8">
          <h1 className="text-[28px] font-bold text-center">Books</h1>
        </div>
        <div className="flex items-center justify-center mb-14">
          <div className="dropdown dropdown-center">
            <div
              tabIndex={0}
              role="button"
              className="m-1 rounded-lg btn btn-success btn-lg"
            >
              Sort By <ChevronDown size={16} />
            </div>
            <ul
              tabIndex={-1}
              className="p-2 shadow-sm dropdown-content menu bg-base-100 rounded-box z-1 w-52"
            >
              <li>
                <a>Rating</a>
              </li>
              <li>
                <a>Number of Pages</a>
              </li>
              <li>
                <a>Publisher Year</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <ReadingListPage />
          </TabPanel>
          <TabPanel>
            <WishListPage />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBookPage;
