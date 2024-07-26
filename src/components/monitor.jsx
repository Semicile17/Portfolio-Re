import DarthVader from "./darthVader";
export default function Monitor() {
  return (
    <div className="flex items-center justify-center bg-gray-800 w-full h-screen">
      <div className="bg-black p-4 rounded-lg relative shadow-lg shadow-black transition-shadow">
        <div className="flex flex-col bg-black p-1 w-[320px] h-[280px] text-black font-mono text-lg border-8 rounded-md">
          <div className="w-full flex justify-end items-end p-1 border border-secondary h-screen bg-blue rounded">
            <DarthVader />
          </div>

          <div className="flex flex-row justify-start">
            <div className="w-3/5 flex">
              <div className=" w-full flex flex-col">
                <div className="w-4/5 h-3 bg-secondary mt-2"></div>
                <div className="w-4/5 h-3 bg-secondary mt-2"></div>
              </div>
            </div>
            <div className="bg-secondary h-8 w-2/5 mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
