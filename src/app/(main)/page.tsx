"use client";

import useCountStore from "@/stores/countStore";

export default function Home() {
  return (
    <div>
      <Component1 />
      <Component2 />
    </div>
  );
}

function Component1() {
  const count = useCountStore((s) => s.count); //selector;
  return (
    <div>
      <div>Component 1</div>
      <div>{count}</div>
    </div>
  );
}

function Component2() {
  const increase = useCountStore((s) => s.increase);
  return (
    <div>
      <div>Component 2</div>
      <button onClick={increase}>+</button>
    </div>
  );
}
