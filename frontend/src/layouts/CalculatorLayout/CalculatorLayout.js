import PageTemplate from "../PageTemplate/PageTemplate";
import Food from "../../components/Calculator/Calculator";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

export default function CalculatorLayout() {
  return (
    <PageTemplate>
      <h2>Calculator</h2>
      <ErrorBoundary>
        <Food />
      </ErrorBoundary>
    </PageTemplate>
  )
}
