import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [hello, setHello] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/api/test')
            .then((res) => {
                setHello(res.data);
            })
            .catch(error => console.log('errpor'.concat(error)))
    }, []);
    return (
        <div className="App">
            리액트 이렇게 쓰는거 맞니???????ㅎㅎㅎㅎ {hello}
        </div>
    );
}

export default App;