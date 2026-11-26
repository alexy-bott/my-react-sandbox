export type Offer = {
  id: number
  partName: string
  brand: string
  supplier: string
  price: number
  deliveryDays: number
  inStock: boolean
}

export const offers: Offer[] = [
  {
    id: 1,
    partName: 'Front suspension control arm, left',
    brand: 'Lemforder',
    supplier: 'AutoPartner',
    price: 8450,
    deliveryDays: 2,
    inStock: true,
  },
  {
    id: 2,
    partName: 'Front suspension control arm, left',
    brand: 'Febi',
    supplier: 'Parts Market',
    price: 6390,
    deliveryDays: 5,
    inStock: false,
  },
  {
    id: 3,
    partName: 'Front brake pads',
    brand: 'ATE',
    supplier: 'AutoStock',
    price: 4720,
    deliveryDays: 1,
    inStock: true,
  },
  {
    id: 4,
    partName: 'Front brake pads',
    brand: 'Bosch',
    supplier: 'DetailService',
    price: 4190,
    deliveryDays: 3,
    inStock: true,
  },
  {
    id: 5,
    partName: 'Oil filter',
    brand: 'Mann',
    supplier: 'AutoPartner',
    price: 980,
    deliveryDays: 1,
    inStock: false,
  },
  {
    id: 6,
    partName: 'Oil filter',
    brand: 'Mahle',
    supplier: 'Parts Market',
    price: 1120,
    deliveryDays: 2,
    inStock: true,
  },
]
