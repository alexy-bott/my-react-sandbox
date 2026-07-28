import {useMemo, useState} from "react";

// Training screen for filtering and sorting supplier offers.

type Offer = {
    id: number;
    partName: string;
    brand: string;
    supplier: string;
    price: number;
    deliveryDays: number;
    inStock: boolean;
};

type AvailabilityFilter = "all" | "in-stock" | "out-of-stock";

type PriceSort = "asc" | "desc";

const offers: Offer[] = [
    {
        id: 1,
        partName: "Front suspension control arm, left",
        brand: "Lemforder",
        supplier: "AutoPartner",
        price: 8450,
        deliveryDays: 2,
        inStock: true,
    },
    {
        id: 2,
        partName: "Front suspension control arm, left",
        brand: "Febi",
        supplier: "Parts Market",
        price: 6390,
        deliveryDays: 5,
        inStock: false,
    },
    {
        id: 3,
        partName: "Front brake pads",
        brand: "ATE",
        supplier: "AutoStock",
        price: 4720,
        deliveryDays: 1,
        inStock: true,
    },
    {
        id: 4,
        partName: "Front brake pads",
        brand: "Bosch",
        supplier: "DetailService",
        price: 4190,
        deliveryDays: 3,
        inStock: true,
    },
    {
        id: 5,
        partName: "Oil filter",
        brand: "Mann",
        supplier: "AutoPartner",
        price: 980,
        deliveryDays: 1,
        inStock: false,
    },
    {
        id: 6,
        partName: "Oil filter",
        brand: "Mahle",
        supplier: "Parts Market",
        price: 1120,
        deliveryDays: 2,
        inStock: true,
    },
];

export function SupplierOffersFilters() {
    const [searchValue, setSearchValue] = useState("");
    const [availabilityFilter, setAvailabilityFilter] =
        useState<AvailabilityFilter>("all");
    const [priceSort, setPriceSort] = useState<PriceSort>("asc");

    const visibleOffers = useMemo(() => {
        const normalizedSearch = searchValue.trim().toLowerCase();

        return offers
            .filter((offer) => {
                const matchesSearch =
                    normalizedSearch.length === 0 ||
                    offer.partName.toLowerCase().includes(normalizedSearch) ||
                    offer.brand.toLowerCase().includes(normalizedSearch) ||
                    offer.supplier.toLowerCase().includes(normalizedSearch);

                const matchesAvailability =
                    availabilityFilter === "all" ||
                    (availabilityFilter === "in-stock" && offer.inStock) ||
                    (availabilityFilter === "out-of-stock" && !offer.inStock);

                return matchesSearch && matchesAvailability;
            })
            .sort((firstOffer, secondOffer) => {
                return priceSort === "asc"
                    ? firstOffer.price - secondOffer.price
                    : secondOffer.price - firstOffer.price;
            });
    }, [availabilityFilter, priceSort, searchValue]);

    return (
        <section>
            <h1>Supplier offers</h1>

            <label>
                Search
                <input
                    onChange={(event) => setSearchValue(event.target.value)}
                    placeholder="Part, brand, or supplier"
                    type="search"
                    value={searchValue}
                />
            </label>

            <label>
                Availability
                <select
                    onChange={(event) =>
                        setAvailabilityFilter(event.target.value as AvailabilityFilter)
                    }
                    value={availabilityFilter}
                >
                    <option value="all">All</option>
                    <option value="in-stock">In stock</option>
                    <option value="out-of-stock">Out of stock</option>
                </select>
            </label>

            <label>
                Price sort
                <select
                    onChange={(event) => setPriceSort(event.target.value as PriceSort)}
                    value={priceSort}
                >
                    <option value="asc">Lowest first</option>
                    <option value="desc">Highest first</option>
                </select>
            </label>

            <table>
                <thead>
                    <tr>
                        <th>Part</th>
                        <th>Brand</th>
                        <th>Supplier</th>
                        <th>Price</th>
                        <th>Delivery</th>
                        <th>Availability</th>
                    </tr>
                </thead>
                <tbody>
                    {visibleOffers.map((offer) => (
                        <tr key={offer.id}>
                            <td>{offer.partName}</td>
                            <td>{offer.brand}</td>
                            <td>{offer.supplier}</td>
                            <td>{offer.price.toLocaleString("ru-RU")} RUB</td>
                            <td>{offer.deliveryDays} days</td>
                            <td>{offer.inStock ? "In stock" : "Out of stock"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
