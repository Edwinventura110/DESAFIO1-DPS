// src/types/Product.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}
```[cite: 2]

---

### Paso 5: Crear el catálogo de datos (`books.ts`)

Crea un archivo llamado `books.ts` dentro de la carpeta `src/data/`. 

*Nota de la rúbrica:* Recuerda que se deben incluir al menos 20 productos con sus respectivas URLs en formato **HTTPS** para las portadas[cite: 2]. Aquí tienes una lista estructurada de libros lista para usar:

```typescript
// src/data/books.ts
import { Product } from '../types/Product';

export const books: Product[] = [
  {
    id: 1,
    title: "Cien Años de Soledad",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=500",
    quantity: 0
  },
  {
    id: 2,
    title: "El Señor de los Anillos",
    price: 35.50,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=500",
    quantity: 0
  },
  {
    id: 3,
    title: "Cuentos de Barro",
    price: 15.00,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=500",
    quantity: 0
  },
  {
    id: 4,
    title: "Harry Potter Pack",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=500",
    quantity: 0
  },
  {
    id: 5,
    title: "Don Quijote de la Mancha",
    price: 22.00,
    image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&q=80&w=500",
    quantity: 0
  },
  {
    id: 6,
    title: "La Odisea",
    price: 18.50,
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=500",
    quantity: 0
  },
  {
    id: 7,
    title: "Crimen y Castigo",
    price: 20.00,
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=500",
    quantity: 0
  },
  {
    id: 8,
    title: "La Metamorfosis",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&q=80&w=500",
    quantity: 0
  },
  {
    id: 9,
    title: "El Principito",
    price: 14.50,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=500",
    quantity: 0
  },
  {
    id: 10,
    title: "1984",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=500",
    quantity: 0
  },
  {
    id: 11,
    title: "Fahrenheit 451",
    price: 18.00,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=500",
    quantity: 0
  },
  {
    id: 12,
    title: "Orgullo y Prejuicio",
    price: 16.50,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=500",
    quantity: 0
  },
  {
    id: 13,
    title: "Los Juegos del Hambre",
    price: 24.00,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=500",
    quantity: 0
  },
  {
    id: 14,
    title: "Drácula",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=500",
    quantity: 0
  },
  {
    id: 15,
    title: "Frankenstein",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&q=80&w=500",
    quantity: 0
  },
  {
    id: 16,
    title: "El Hobbit",
    price: 28.00,
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=500",
    quantity: 0
  },
  {
    id: 17,
    title: "Rayuela",
    price: 21.50,
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=500",
    quantity: 0
  },
  {
    id: 18,
    title: "La Sombra del Viento",
    price: 26.00,
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&q=80&w=500",
    quantity: 0
  },
  {
    id: 19,
    title: "Los Miserables",
    price: 32.00,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=500",
    quantity: 0
  },
  {
    id: 20,
    title: "El Arte de la Guerra",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=500",
    quantity: 0
  }
];