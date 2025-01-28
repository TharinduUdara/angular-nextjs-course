import Image from "next/image";
import Post from "../components/Post";
import { title } from "process";

export default function Home(props) {
  return (
    <div>
      <h1>Next JS Project</h1>
      <div>{JSON.stringify(props)}</div>
      {/* Loop Post */}
      <div>
        <Post title={props.title} body={props.body}/>
      </div>
    </div>
  );
  Home.getInitialProps = (context) => {
    let postData =
    {
      title: "Hellow World",
      body: "MY disiption"
    }
    return {
        postData
    }
  } 
}
