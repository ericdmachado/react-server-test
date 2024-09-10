import { Suspense } from "react";
import AsyncServerComponent from "@components/AsyncServerComponent";
import SpinnerComponent from "@components/Spinner";
import HeadingComponent from "@components/Heading";

export default function OtherComponent() {
  return (
    <div style={{ border: "2px solid red" }}>
      <HeadingComponent size="ls">Load Async Server Component</HeadingComponent>
      <Suspense fallback={<SpinnerComponent />}>
        <AsyncServerComponent />
      </Suspense>
    </div>
  );
}
