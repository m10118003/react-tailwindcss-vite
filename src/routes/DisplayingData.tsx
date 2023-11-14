import App from "../App";

const user = {
  name: "Zelfy",
  imageUrl: "https://avatars.githubusercontent.com/u/65555979?v=4",
  imageSize: 90,
};

const btnChangeColor = (changeColor: string) => {
  console.log("change color");
  if (btnChangeColor !== undefined) {
    changeColor = `card-btn border-dashed border-2 border-black-600 hover:bg-[#feb28e] hover:text-indigo-600`;
    console.log(changeColor, `changeColor`);
  }
};

export default function DisplayingData() {
  return (
    <>
      <App />
      <>
        <div className="text-center text-3xl font-black">Displaying Data</div>
      </>
      <div className="mt-4 flex items-center justify-center gap-4">
        <div className="mr-2 text-left text-2xl font-black">{user.name}</div>
        <img
          className="inline-flex h-6 w-6 rounded ring-2 ring-white"
          src={user.imageUrl}
          alt={`Avatar for ${user.name}`}
          style={{ width: user.imageSize, height: user.imageSize }}
        />
      </div>
      <button onClick={() => btnChangeColor} className="changeColor">
        Change color
      </button>
    </>
  );
}
