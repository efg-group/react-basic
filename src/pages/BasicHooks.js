import { useEffect, useState } from "react";
import { useFetchHook } from "../hooks/useFetchHook";

const BasicHooks = () => {
  //  <!-- 01. can't call HOOKS conditionally -->
  //  if (true) {
  //     useState()
  // }
  //  <!-- React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render. -->
  // u can't use them in loops, functions, conditionally and u have to call them top level

  //  <!-- 02. always return a array with 2 values -->
  const [count, setCount] = useState(4);

  //  <!-- ** Returns a stateful value, and a function to update it -->

  //  <!-- 03. function version of useState -->

  //   const [count, setCount] = useState(() => {
  //     console.log("run only once");
  //     return 4;
  //   });

  //  <!-- *** If the initial state is the result of an expensive computation, you may provide a function instead, which will be executed only on the initial render, this concept is called Lazy initial state -->

  //  <!-- 04. getting initial value from function and calling it over and over -->

  //   function countInitial(params) {
  //     console.log("run over and over");
  //     return 4;
  //   }

  //   const [count, setCount] = useState(countInitial());
  //   const [count, setCount] = useState(() => countInitial()); // here it is called only once

  //  <!-- ## functions for increment and decrement -->
  function decrementCount(params) {
    // setCount(count - 1);
    // setCount(count - 1); // here count is always initial value, so this 2 setState is overriding same vale each time for same render

    // setCount((prevCount) => prevCount - 1);
    // setCount((prevCount) => prevCount - 1); // here function get new value after setState set a new value
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount(params) {
    setCount((prevCount) => prevCount + 1);
  }

  //  <!-- 05. useState handle object differently -->
  const [state, setState] = useState({ count: 4, theme: "blue" });

  function decrementState(params) {
    setState((prevState) => {
      return { count: prevState.count - 1 };
      //   merging full object with new one
    });
  }

  function incrementState(params) {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
      //   te prevent it store previous state of that object with spread operator
    });
  }

  /*---------------------------------------------------------------------
      useEffect hook
  ----------------------------------------------------------------------*/
  const [resourceType, setResourceType] = useState("posts");

  //  <!-- 01. rending for every single change in dom -->

  useEffect(() => {
    console.log("rendering rending for every single change in dom");
    return () => {};
  });

  //  <!-- 02. rendering only once as it has empty dependency array -->

  useEffect(() => {
    console.log("rendering only once as it has empty dependency array");
    return () => {};
  }, []); // it is actually onMount hook

  //  <!-- 03. rendering when certain condition is met -->

  useEffect(() => {
    console.log("rendering when certain condition is met");
    return () => {};
  }, [resourceType]);

  //  <!-- 04. fetching data from api -->

  const { sendRequest } = useFetchHook();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await sendRequest(
        `https://jsonplaceholder.typicode.com/${resourceType}/1`
      );
      console.log(response.data);
      setItems(response.data);
    };
    fetchUsers();

    return () => {
      console.log("return from resource change");
    };
  }, [resourceType, sendRequest]);

  //  <!-- 05. inner width -->
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const resizeHandler = () => {
    setWindowWidth(window.innerWidth);
    //  cleanup is run directly before the side effect is run as long as the side effect has occurred at least once. Also, the cleanup is run when a component un-mounts as well
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      //   clean up, when useEffect run, return statement run first & will clean whatever we did last time
    };
  }, []);

  //  <!-- 06. TO DO: flushSync  -->

  return (
    <>
      <h1 className="underline !text-black font-medium">Basic Hooks</h1>
      <h3 className="my-4 !text-white ">1. useState hook</h3>

      <button className="px-4 py-3 m-4 " onClick={decrementCount}>
        -
      </button>
      <p className="inline-block w-8 ">
        <span className="text-3xl text-red-400 ">{count}</span>
      </p>
      <button className="px-4 py-3 m-4" onClick={incrementCount}>
        +
      </button>

      <h3 className="my-4 !text-white "># object in useState </h3>

      <button className="px-4 py-3 m-4 " onClick={decrementState}>
        -
      </button>
      <p className="inline-block w-20">
        <span className="mr-4 text-3xl text-red-400">{state.count}</span>
        <span className="text-3xl text-red-400 ">{state.theme}</span>
      </p>
      <button className="px-4 py-3 m-4" onClick={incrementState}>
        +
      </button>

      {/* useEffect hook */}
      <h3 className="my-4 !text-white ">2. useEffect hook</h3>
      <button
        className="px-8 py-3 m-4 rounded-lg"
        onClick={() => setResourceType("posts")}
      >
        Posts
      </button>
      <button
        className="px-8 py-3 m-4 rounded-lg"
        onClick={() => setResourceType("users")}
      >
        Users
      </button>
      <button
        className="px-8 py-3 m-4 rounded-lg"
        onClick={() => setResourceType("comments")}
      >
        Comments
      </button>
      <h4 className="text-2xl font-semibold text-center uppercase text-stone-300">
        {resourceType}
      </h4>
      {/* {items.map((item) => ( */}
      <pre>{JSON.stringify(items)}</pre>
      {/* ))} */}

      <h3 className="my-4 !text-white "># screen width with useEffect </h3>
      <p className="text-2xl font-bold">{windowWidth} px</p>
    </>
  );
};

export default BasicHooks;
