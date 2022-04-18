import Header from "../../components/Header/Header";
import HeadComponent from "../../components/HeadComponent/HeadComponent";

export default function PageTemplate(props) {
  const { children, title } = props;
  return (
    <>
      <HeadComponent />
      <Header title={title} />
      <main>
        <div className="container">
          {children}
        </div>
      </main>
    </>
  )
}
