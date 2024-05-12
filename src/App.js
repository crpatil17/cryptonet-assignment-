import "./App.css";
import useFetch from "./components/useFetch.js";

function App() {
  const { data } = useFetch(
    "https://randomuser.me/api/?page=1&results=1&seed=abc"
  ); //custom hook

  return (
    <div className="w-screen p-4 flex flex-wrap">
      {data?.results &&
        data.results.map((item) => (
          <div
            className="flex justify-between items-center w-[350px] h-[200px] rounded-xl  overflow-hidden m-2 bg-[#002379]"
            key={item.login.uuid}
          >
            {/* Left section */}

            <div
              className="h-full w-[40%] flex justify-between items-center p-2 bg-gradient-to-b bg-[#FF5F00] bg-violet-500 overflow-hidden rounded-xl"
            >
              <img
                src={item.picture.large}
                className="rounded-full bg-cover"
                alt="User avatar"
              />
            </div>

            {/* Right section */}

            <div className="flex flex-col justify-center items-center p-4 w-[60%] h-full rounded-xl text-white">
              <div className="flex items-center flex-wrap justify-center">
                <h1 className="text-[20px] font-semibold">
                  {item.name.title === "Miss" || item.name.title === "Mrs"
                    ? "Ms"
                    : "Mr"}
                  .
                </h1>
                <h1 className="text-[20px] font-semibold">{item.name.first}</h1>
                <h1 className="text-[20px] font-semibold">{item.name.last}</h1>
              </div>
              <div className="mt-2 flex flex-col justify-center items-center">
                <h1 className="text-1xl font-semibold">{item.gender}</h1>
                <h1 className="text-1xl font-semibold">{item.cell}</h1>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default App;
