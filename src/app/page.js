import Link from "next/link";

const page = () => {
  return (
    <main className="choose-game">
      <h1>Please choose A game</h1>
      <div>
        <Link href={'/simple'}>Simple</Link>
        <Link href={'/advanced'}>Advanced</Link>
      </div>
    </main>
  );
};

export default page;
