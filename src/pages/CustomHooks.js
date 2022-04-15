import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useUpdateLogger } from "../hooks/useUpdateLogger";

const CustomHooks = () => {
  const [name, setName] = useLocalStorage("name", "");
  //  <!-- using function as initialValue -->
  // const [name, setName] = useLocalStorage("name", () => "");

  const [logger, setLogger] = useState("logger");
  useUpdateLogger(logger);

  return (
    <>
      <h1 className="underline !text-black font-medium">CustomHooks</h1>

      <h3 className="my-4 !text-white ">1. useLocalStorage</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded-md px-2 py-1.5 text-green-400 font-semibold"
      />

      <h3 className="my-4 !text-white ">2. useUpdateLogger</h3>
      <input
        type="text"
        value={logger}
        onChange={(e) => setLogger(e.target.value)}
        className="rounded-md px-2 py-1.5 text-green-400 font-semibold"
      />
    </>
  );
};

export default CustomHooks;
