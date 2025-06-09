import { useState } from 'react';
import Title from '../components/Title';
import Card from '../components/Card';
import Image1 from '../assets/Rectangle1.png';
import Image2 from '../assets/Rectangle2.png';
import Image3 from '../assets/Rectangle3.png';
import Image4 from '../assets/Rectangle4.png';

// Dummy Data
const dummyCoffees = [
  {
    id: 1,
    name: 'Cappuccino',
    category: 'Hot',
    type: 'Milk',
    price: 8.5,
    description: 'Coffee 50% | Milk 50%',
    image: Image1,
  },
  {
    id: 2,
    name: 'Chai Latte',
    category: 'Hot',
    type: 'Spice',
    price: 7.5,
    description: 'Tea | Milk | Spices',
    image: Image2,
  },
  {
    id: 3,
    name: 'Macchiato',
    category: 'Iced',
    type: 'Espresso',
    price: 6.0,
    description: 'Espresso | Foam',
    image: Image3,
  },
  {
    id: 4,
    name: 'Espresso',
    category: 'Hot',
    type: 'Black',
    price: 5.0,
    description: 'Strong and bold coffee',
    image: Image4,
  },
  {
    id: 5,
    name: 'Mocha',
    category: 'Hot',
    type: 'Chocolate',
    price: 8.0,
    description: 'Coffee | Chocolate | Milk',
    image: Image1,
  },
  {
    id: 6,
    name: 'Iced Americano',
    category: 'Iced',
    type: 'Black',
    price: 6.5,
    description: 'Espresso | Cold Water',
    image: Image2,
  },
  {
    id: 7,
    name: 'Latte',
    category: 'Hot',
    type: 'Milk',
    price: 7.0,
    description: 'Espresso | Steamed Milk',
    image: Image3,
  },
  {
    id: 8,
    name: 'Flat White',
    category: 'Hot',
    type: 'Milk',
    price: 6.8,
    description: 'Espresso | Microfoam',
    image: Image4,
  },
];

const Menu = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const filtered = dummyCoffees.filter((coffee) => {
    const matchName = coffee.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category ? coffee.category.toLowerCase().includes(category.toLowerCase()) : true;
    const matchType = type ? coffee.type.toLowerCase().includes(type.toLowerCase()) : true;
    const matchPrice = price ? coffee.price <= parseFloat(price) : true;
    return matchName && matchCategory && matchType && matchPrice;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedCoffees = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="px-6 md:px-20 lg:px-32 py-12">
      <div className="flex flex-col items-center mb-10">
        <Title
          heading="Enjoy a new blend of coffee style"
          subHeading="Explore all flavours of coffee with us. There is always a new cup worth experiencing"
        />

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4 w-full">
          <input
            type="text"
            placeholder="Search by name"
            className="p-2 border rounded"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search by category"
            className="p-2 border rounded"
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search by type"
            className="p-2 border rounded"
            onChange={(e) => setType(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max price"
            className="p-2 border rounded"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {paginatedCoffees.map((coffee) => (
          <Card
            key={coffee.id}
            image={coffee.image}
            title={coffee.name}
            description={coffee.description}
            price={coffee.price}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 space-x-4">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          >
            Prev
          </button>
          <span className="px-4 py-2 text-black font-semibold">Page {page}</span>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
