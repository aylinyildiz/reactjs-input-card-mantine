import { Container,Grid, Stack, Button, Input, Textarea } from "@mantine/core";
import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

let arr = [
  {
    title: "Dağ 1",
    paragraf: "Açıklama 1",
  },
  {
    title: "Dağ 2",
    paragraf: "Açıklama 2",
  },
  {
    title: "Dağ 3",
    paragraf: "Açıklama 3",
  },
  {
    title: "Dağ 4",
    paragraf: "Açıklama 4",
  },
];

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [list, setList] = useState(arr);
  const [lesson, setLesson] = useState([]);
  const click = () => {
    console.log("tıklandı",title,text);
    const copyList = [...list];
    copyList.push({
      id:5,
      title:title,
      paragraf: text
    })
    setList(copyList);
  }
  return (
    <Container>
      <h1>Create Card</h1>
      <Stack>
      <Input.Wrapper label="Header">
        <Input placeholder="Enter a header" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </Input.Wrapper>
      <Textarea placeholder="Enter text" label="Text" withAsterisk  value={text} onChange={(e)=>setText(e.target.value)} />
      <Button variant="outline" color="red" onClick={click}>
        Create Card
      </Button>
      <Grid>
        {list.map(({ title, paragraf }, i) => (
            <Grid.Col span={4}   key={`index ${i}`}>
               <Card
                paragraf={paragraf}
                title={title}
                lesson={lesson}
              />
            </Grid.Col>
         
        ))}
      </Grid>
      </Stack>
    </Container>
  );
}

export default App;
