import AppleIcon from '@material-ui/icons/Apple';
import ShoppingBasket from '@material-ui/icons/ShoppingCart';

function App() {
  return (
    <div className="grid grid-cols-8 gap-4 bg-gray-600 h-16">
      <div className="col-span-2 pt-4">
        <span className="pl-5 cursor-pointer text-white">
          <AppleIcon
            fontSize="large"
          />
        </span>
      </div>
      <div className="col-span-4 pt-4">
        <div className="flex justify-center">
          <input
            className="pr-32 pl-6 py-2 rounded outline-none bordered bg-gray-100"
            type="text"
            placeholder="Search Materials..."
          />
          <button
            type="submit"
            className="px-5 py-2 bg-gray-300 rounded text-blue-300 hover:bg-gray-400 hover:text-white"
          >
            Search
          </button>
        </div>
      </div>
      <div className="col-span-2 pt-4">
        <span className="pl-5 cursor-pointer text-white">
          <ShoppingBasket />
        </span>
      </div>
    </div>
  );
}

export default App;
