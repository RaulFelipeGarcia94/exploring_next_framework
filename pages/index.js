import Link from "../src/components/Link";

function Title({ children }) {
  return (
    <>
      <h1>{children}</h1>
      <style></style>
    </>
  );
}

export default function HomePage() {
  return (
    <div>
      <Title>Alura Cases - Home Page</Title>
      <Link href="/faq">Ir para FAQ</Link>
    </div>
  );
}
