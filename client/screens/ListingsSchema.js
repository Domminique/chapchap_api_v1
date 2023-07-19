 import Realm from "realm";

// export const listingsAndReviewSchema = {
//   name: 'listingsAndReview',
//   properties: {
//     _id: 'string?',
//     access: 'string?',
//     accommodates: 'int?',
//     address: 'listingsAndReview_address',
//     amenities: 'string[]',
//     availability: 'listingsAndReview_availability',
//     bathrooms: 'decimal128?',
//     bed_type: 'string?',
//     bedrooms: 'int?',
//     beds: 'int?',
//     calendar_last_scraped: 'date?',
//     cancellation_policy: 'string?',
//     cleaning_fee: 'decimal128?',
//     description: 'string?',
//     extra_people: 'decimal128?',
//     first_review: 'date?',
//     guests_included: 'decimal128?',
//     host: 'listingsAndReview_host',
//     house_rules: 'string?',
//     images: 'listingsAndReview_images',
//     interaction: 'string?',
//     last_review: 'date?',
//     last_scraped: 'date?',
//     listing_url: 'string?',
//     maximum_nights: 'string?',
//     minimum_nights: 'string?',
//     monthly_price: 'decimal128?',
//     name: 'string?',
//     neighborhood_overview: 'string?',
//     notes: 'string?',
//     number_of_reviews: 'int?',
//     price: 'decimal128?',
//     property_type: 'string?',
//     review_scores: 'listingsAndReview_review_scores',
//     reviews: 'listingsAndReview_reviews[]',
//     room_type: 'string?',
//     security_deposit: 'decimal128?',
//     space: 'string?',
//     summary: 'string?',
//     transit: 'string?',
//     weekly_price: 'decimal128?',
//   },
//   primaryKey: '_id',
// };
class Item extends Realm.Object{
    _id;
    access;
    accommodates;
    address;
    amenities;
    availability;
    bathrooms;
    bed_type;
    bedrooms;
    beds;
    calendar_last_scraped;
    cancellation_policy;
    cleaning_fee;
    description;
    extra_people;
    first_review;
    guests_included;
    host;
    house_rules;
    images;
    interaction;
    last_review;
    last_scraped;
    listing_url;
    maximum_nights;
    minimum_nights;
    monthly_price;
    name;
    neighborhood_overview;
    notes;
    number_of_reviews;
    price;
    property_type;
    review_scores;
    reviews;
    room_type;
    security_deposit;
    space;
    summary;
    transit;
    weekly_price;

  static schema = {
    name: 'listingsAndReview',
    primaryKey: '_id',
    properties: {
      _id: 'string?',
      access: 'string?',
      accommodates: 'int?',
      address: 'listingsAndReview_address',
      amenities: 'string[]',
      availability: 'listingsAndReview_availability',
      bathrooms: 'decimal128?',
      bed_type: 'string?',
      bedrooms: 'int?',
      beds: 'int?',
      calendar_last_scraped: 'date?',
      cancellation_policy: 'string?',
      cleaning_fee: 'decimal128?',
      description: 'string?',
      extra_people: 'decimal128?',
      first_review: 'date?',
      guests_included: 'decimal128?',
      host: 'listingsAndReview_host',
      house_rules: 'string?',
      images: 'listingsAndReview_images',
      interaction: 'string?',
      last_review: 'date?',
      last_scraped: 'date?',
      listing_url: 'string?',
      maximum_nights: 'string?',
      minimum_nights: 'string?',
      monthly_price: 'decimal128?',
      name: 'string?',
      neighborhood_overview: 'string?',
      notes: 'string?',
      number_of_reviews: 'int?',
      price: 'decimal128?',
      property_type: 'string?',
      review_scores: 'listingsAndReview_review_scores',
      reviews: 'listingsAndReview_reviews[]',
      room_type: 'string?',
      security_deposit: 'decimal128?',
      space: 'string?',
      summary: 'string?',
      transit: 'string?',
      weekly_price: 'decimal128?',
    },
    primaryKey: '_id',
  };
}
export { listingsAndReview};