import Card from '../components/common/Card';
import { listings } from '../constants';

export default function Home() {
  return (
    <main className="p-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {listings.map((item) => (
        <Card key={item.id} title={item.title} imageUrl={item.imageUrl} />
      ))}
    </main>
  );
}
