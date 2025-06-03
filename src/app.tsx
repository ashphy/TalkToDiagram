import { Button } from "./components/ui/button";
import { client } from "./lib/client";

function App() {
  const handleClick = async () => {
    console.log("Button clicked!");
    const response = await client.api.$get();
    if (response.ok) {
      console.log("Response from server:", await response.json());
    }
  };

  return (
    <div>
      <Button type="button" onClick={handleClick}>
        Test
      </Button>
    </div>
  );
}

export default App;
