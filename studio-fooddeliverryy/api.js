import { createClient } from "@sanity/client";

// Sanity istemcisini oluşturma
const client = createClient({
    projectId: "yourProjectId", // Proje ID'nizi buraya koyun
    dataset: "yourDataset",     // Dataset adınızı buraya koyun
    useCdn: true,               // Geliştirme için false yapabilirsiniz
    apiVersion: "2023-11-13",   // API sürümü
});

// Query çalıştırma fonksiyonu
let sanityQuery = (query, params) => client.fetch(query, params);

export const getFeaturedRestaurants = () => {
    return sanityQuery(
        `
        *[_type == 'featured'] {
            ...,
            restaurants[]->{
                ...,
                dishes[]->{
                    ...
                },
                type->{
                    name
                }
            }
        }
        `
    );
};

export const getCategories = () => {
    return sanityQuery(`
        *[_type == 'category']
    `);
};

export const getFeaturedRestaurantById = (id) => {
    return sanityQuery(
        `
        *[_type == 'featured' && _id == $id] {
            ...,
            restaurants[]->{
                ...,
                dishes[]->{
                    ...
                },
                type->{
                    name
                }
            }
        }[0]
        `,
        { id }
    );
};
