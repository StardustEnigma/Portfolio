import DotGrid from '../welcome/welcome';

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <DotGrid />
    </div>
  );
}
