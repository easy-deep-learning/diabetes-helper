import { Children } from "react";

import Header from "../../components/Header/Header";
import HeadComponent from "../../components/HeadComponent/HeadComponent";

export default function PageTemplate(props) {
  const { children } = props;
  return (
    <>
      <HeadComponent />
      <Header />
      <main>
        <div className="container">
          {children}
        </div>
      </main>
    </>
  )
}
