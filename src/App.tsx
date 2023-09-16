import AppRouting from "./routers/AppRouting";

import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container className="mb-4">
        <AppRouting />
      </Container>
    </>
  );
}

export default App;
