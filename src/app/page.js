import Message from "@/components/Message";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const page = () => {
  return (
    <main className="choose-game">
      <Navbar/>
      <h1>Please choose A game</h1>
      <div>
        <Link href={'/simple'}>Simple</Link>
        <Link href={'/advanced'}>Advanced</Link>
      </div>
      <Message/>
      
    </main>
  );
};

export default page;
