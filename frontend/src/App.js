import { useEffect } from "react";

function App() {
    const [msg, setMsg] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/api/hello")
            .then(r => r.json())
            .then(d => setMsg(d.message));
    }, []); 

    return (
        (<h1>{msg || "Hello from MERN App"} </h1>)
    );
}

export default App;