import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import {
  ArrowRightIcon,
  BeakerIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllJobs } from '../features/allJobs/allJobsSlice'
import { distance, poslat, poslng } from '../utils/geodata'

const FeaturedRow = ({ id, title, description }) => {
  const {
    jobs,
    products,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs)
  const dispatch = useDispatch()
  const { user } = useSelector((store) => store.user)
  useEffect(() => {
    dispatch(getAllJobs())
  }, [products])

  // console.log(jobs, "jobs")
  console.log(products, "products")
  
  setTimeout(() => { 

  }, 3000)
// Finding nearby

//  const nearBy = [];
//  const poslat = user?.location.coords.latitude ;
//  const poslng = user?.location.coords.longitude;


//  const allCategories = products?.filter((item) => item?.jobType !== 'Logistics')
// // Filter verifield
// const  verified = allCategories?.filter((item) => item?.availability !== true)


// // filter availability

// const onduty = verified?.filter((item) => item?.verified !== true)

// const data = onduty || {}
// for (var i = 0; i < data.length; i++) {
//   // if this location is within 0.1KM of the user, add it to the list
//   if (distance(poslat, poslng, data[i].lat, data[i].lng, "K") <= 5.0) {  
//       Array.prototype.push.call(nearBy ,{
//         name:data[i].name , 
//         name:data[i].name , 
//         category:data[i].category,
//         _id:data[i]._id,
//         title:data[i].title,
//         imageLogo:data[i].imageLogo,
//         images:data[i].images,
//         image:data[i].image,
//         jobType:data[i].jobType,
//         multiplier:data[i].multiplier,
//         description:data[i].description,
//         position:data[i].position,
//         image:data[i].image,
//         availability:data[i].availability, 
//         phonenumber:data[i].phonenumber,     
      
      
//       } );
//   }
// }
// console.log("All products", products )
// console.log("nearby featured", nearBy )
// console.log("onduty", onduty)


  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon size={35} color='#00AA13' />
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        showsVerticalScrollIndicator={false}
        className='pt-4'
      >
        {/* RestaurantCards */}

        <FlatList
          horizontal
          data={products}
          keyExtractor={(item) => item._id}
          renderItem={({
            item: {
              _id,
              title,
              imageLogo,
              images,
              category,
              company,
              profession,
              jobType,
              multiplier,
              name,
              description,
              longitude,
              latitude,
              location,
              position,
              image,
              availability,
              phonenumber
            },
            item,
          }) => (
            <RestaurantCard
              name={name}
              id={_id}
              imgUrl={image}
              title={name}
              logoUrl={imageLogo}
              jobType={jobType}
              rating={4.5}
              company={company}
              profession={profession}
              genre={category}
              address=''
              short_description={description}  
              dishes={images}
              long={longitude}
              lat={latitude}
              availability={availability}
              location={location}
              phonenumber={phonenumber}
              product={_id}
              amount={4}
            />
          )}
        />
        

<RestaurantCard
   id={143}
   imgUrl="http://34.170.204.224/farm1.jpg"
   name='Acacia Plants and Planters'
   title='Acacia Plants and Planters'
   rating={3.5}
   genre="Plants and Planters"
   address="Kimani Road"
   short_description="Acacia Plants and Planters deals with planters and plants, both natural and artificial,
    is a business that caters to the needs of individuals and organizations who are looking to enhance their
     indoor and outdoor spaces with plants. We specializes in providing a range of planters and plants 
     that are suitable for various environments, including homes, offices, and public spaces.

   Our planters come in different sizes, shapes, and materials, such as ceramic, plastic,
   and metal, to suit the preferences and budgets of their clients. The planters are designed to be durable, 
   functional, and aesthetically pleasing . They are also offered in different colors to match the décor of
    the space where they will be placed."
    dishes={[
      {
     id: '1',
     price:'300',
     title: 'Sunflower seeds and Plants',
     phonenumber:'+254715180530',
     teacher: ' Mr. Matheka',
     description: 'Our planters come in different sizes, shapes, and materials, such as ceramic, plastic,and metal, to suit the preferences and budgets of their clients ',
     image: 'http://34.170.204.224/farm1.jpg',
     screen: 'MapScreen',
      category:"lamps"
   },
   {
     id: '2',
     price:'400',
     title: 'Sweet potatoes',
     phonenumber:'+254715180530',
     teacher: ' Mr. Matheka',
     description: 'Our planters come in different sizes, shapes, and materials, such as ceramic, plastic,and metal, to suit the preferences and budgets of their clients ',
     image: 'http://34.170.204.224/sweet-potato.jpg',
     screen: 'MapScreen',
      category:"Plants and Planters"
   },
   {
    id: '3',
    price:'100',
    title: 'aesthetically pleasing Plants',
    phonenumber:'+254715180530',
    teacher: ' Mr. Matheka',
    description: 'Our planters come in different sizes, shapes, and materials, such as ceramic, plastic,and metal, to suit the preferences and budgets of their clients ',
    image: 'http://34.170.204.224/planter3.png',
    screen: 'MapScreen',
     category:"Plants and Planters"
  },
  {
    id: '4',
    price:'1000',
    title: 'aesthetically pleasing Plants',
    phonenumber:'+254715180530',
    teacher: ' Mr. Matheka',
    description: 'Our planters come in different sizes, shapes, and materials, such as ceramic, plastic,and metal, to suit the preferences and budgets of their clients ',
    image: 'http://34.170.204.224/yuca.jpg',
    screen: 'MapScreen',
     category:"Plants and Planters"
  },
  {
    id: '5',
    price:'200',
    title: 'aesthetically pleasing Plants',
    phonenumber:'+254715180530',
    teacher: ' Mr. Matheka',
    description: 'Our planters come in different sizes, shapes, and materials, such as ceramic, plastic,and metal, to suit the preferences and budgets of their clients ',
    image: 'http://34.170.204.224/planter5.png',
    screen: 'MapScreen',
     category:"Plants and Planters"
  },
  {
    id: '6',
    price:'300',
    title: 'aesthetically pleasing Plants',
    phonenumber:'+254715180530',
    teacher: ' Mr. Matheka',
    description: 'Our planters come in different sizes, shapes, and materials, such as ceramic, plastic,and metal, to suit the preferences and budgets of their clients ',
    image: 'http://34.170.204.224/planter6.jpg',
    screen: 'MapScreen',
     category:"Plants and Planters"
  },
   ]}
   long={20}
   lat={0}
   
   />
    <RestaurantCard
   id={1293}
   imgUrl="http://34.170.204.224/basket.jpg"
   name='Kandisi Baskets and Fabrics'
   title='Kandisi Baskets and Fabrics'
   rating={3.5}
   genre="Baskets and Fabrics"
   address="Magadi Road"
   short_description="Kandisi Baskets and Fabrics specializes in the production, distribution, and sale of 
   handmade baskets and fabrics. it is run by skilled artisans who use traditional techniques to create
    unique and high-quality products.The basket-making process typically involves the use of locally sourced 
    materials such as grasses, reeds, and palm leaves. Our artisans carefully weave these materials into 
    baskets of various shapes and sizes, often incorporating intricate patterns and designs. 
    These baskets are not only functional, but also serve as decorative items that are popular 
    among tourists and locals alike.
   
   Our fabric-making process involves the use of locally sourced materials such as cotton, silk, or wool.
    The artisans use traditional techniques such as tie-dye, batik, or embroidery to create colorful and 
    vibrant fabrics that are used to make clothing, home decor items, and accessories.

    
  "
   dishes={[]}
   long={20}
   lat={0}
   
   />
        <RestaurantCard
   id={123}
   imgUrl="http://34.170.204.224/ceiling-lamp.jpg"
   name='Rongai Lamps '
   title='Rongai Lamps'
   phonenumber='+254715180530'
   rating={4.5}
   genre="Lamps"
   address="Kimani Road"
   short_description="Rongai lamps specializes in the production, distribution, and sale of various types of lamps 
   to individuals and businesses in the African market. We offer a wide range of lighting solutions, 
   including solar-powered lamps battery-operated lamps, and lamps that use traditional sources of energy 
   like kerosene."
   category="lamps"
   dishes={[
     {
    id: '1',
    price:'350',
    title: 'solar-powered Chandalnene',
    phonenumber:'+254715180530',
    teacher: ' Mr. Matheka',
    description: 'We offer a wide range of Chandalnene including solar-powered Chandalnene battery-operated Chandalnene, and Chandalnene that use traditional sources of energy ',
    image: 'http://34.170.204.224/ceiling-lamp.jpg',
    screen: 'MapScreen',
     category:"lamps"
  },
  
  ]}
   long={20}
   lat={0}
   
   />
        <RestaurantCard
   id={143}
   imgUrl="http://34.170.204.224/carpet4.jpg"
   name='Nkoroi Carpets and cleaners'
   title='Nkoroi Carpets and cleaners'
   rating={3.5}
   genre="Carpets"
   address="Kimani Road"
   short_description="Specializes in producing and selling high-quality carpets made from natural fibers 
   such as wool, jute, sisal, and cotton. We been in operation for over a decade and have
   established a reputation for its exceptional products.We sources our materials from local farmers and 
   artisans, supporting sustainable livelihoods and promoting local economic development.
   we have a team of skilled weavers who produce the carpets using traditional techniques 
   that have been passed down through generations.
  Our carpets come in a variety of colors, patterns, and sizes, and can be customized to meet 
  the specific needs of clients. They are durable, easy to maintain, and add a touch of elegance and 
  warmth to any space.we also also provides installation and cleaning services, ensuring that their products 
  are properly installed and maintained for maximum longevity."
   
   
  dishes={[]}
   
   long={20}
   lat={0}
   
   />
   <RestaurantCard
   id={173}
   imgUrl="http://34.170.204.224/mirrors3.jpg"
   name='Magenche Mirrors'
   title='Magenche Mirrors'
   rating={3.5}
   genre="Mirrors"
   address="Kimani Road"
   short_description="We specialize in producing and selling handcrafted mirrors made from locally
    sourced materials. This SME may operate out of a workshop or studio, and employ skilled artisans and 
    craftsmen who create unique and high-quality mirrors using traditional techniques.
We source our materials from local suppliers, such as wood, metal, or glass, and work closely with 
these suppliers to ensure the quality of their raw materials. 
We partner with local communities or social enterprises to source materials sustainably and ethically,
 in line with their values and commitment to environmental and social responsibility.
   
We also offer range of related products and services, such as custom framing, mirror installation, 
and restoration and repair services.
 We also sell other home decor items, such as wall art or furniture, that complement our mirrors and 
 appeal to our target customers."
   dishes={[]}
   long={20}
   lat={0}
   
   />
   
   <RestaurantCard
   id={923}
   imgUrl="http://34.170.204.224/wallart.jpg"
   name='Kiserian Masaai Art'
   title='Kiserian Masaai Art'
   rating={3.5}
   genre="Wall & Minimalist Art"
   address="Kimani Road"
   short_description="Our wall art collection includes a variety of pieces ranging from canvas prints 
   to framed art. These pieces feature iconic African animals, landscapes, and cultural symbols,
    all depicted in a clean, modern style that emphasizes simplicity and elegance. 
    Kiserian Masaai Art's minimalist art collection is equally impressive, featuring striking black and white designs that convey deep
      meaning with minimalistic imagery."
   dishes={[]}
   long={20}
   lat={0}
   
   />
   <RestaurantCard
   id={1233}
   imgUrl="http://34.170.204.224/frame.jpg"
   name='Laiser Hill Frames'
   title='Laiser Hill Frames'
   rating={3.5}
   genre="Frames"
   address="Kimani Road"
   short_description="Laiser Hill Frames specializes in the production and distribution of different types 
   of frames for various applications. The frames for doors, windows, or even picture frames.
    We manufacture frames using different materials such as wood, metal, or PVC, depending on the customers'
     preferences and requirements.
     
     We offer customized solutions to meet the specific needs of each customer. 
     This  include creating frames in different sizes, shapes, and colors, 
     and even incorporating unique design elements to make them stand out.
     We also offer installation and maintenance services to ensure that their frames
      are properly installed and maintained for optimal performance
     "
   dishes={[]}
   long={20}
   lat={0}
   
   />

<RestaurantCard
   id={1263}
   imgUrl="http://34.170.204.224/candlediffusers.jpg"
   name='Kware Candles Diffusers Artists'
   title='Kware Candles Diffusers Artists'
   rating={3.5}
   genre="Candles Diffusers"
   address="Magadi Road"
   short_description="We specialize in producing and distributing high-quality candle diffusers. 
   These diffusers are typically made using natural ingredients such as essential oils, plant extracts,
    and natural waxes. They are designed to release pleasant fragrances into the air, creating a calming and 
    relaxing atmosphere in homes and other living spaces.

    Our manufacturing process involves carefully blending different ingredients to create unique scents
     that appeal to a wide range of consumers. We also use locally sourced materials to support the local 
     economy and reduce their carbon footprint. We employ local artisans to design and create the diffuser's
      packaging, giving each product a unique, handmade feel.
     "
   dishes={[]}
   long={20}
   lat={0}
   
   />

<RestaurantCard
   id={1236}
   imgUrl="http://34.170.204.224/fragrance2.jpg"
   name='Gataka Road Home Fragrance'
   title='Gataka Road Home Fragrance'
   rating={3.5}
   genre="Home Fragrance"
   address="Gataka Road"
   short_description="Our products also bring joy and comfort to people's homes, making it a valuable addition 
   to the African market.We specialize in producing and selling scented products for use in homes, such as 
   candles, reed diffusers, room sprays, and essential oils. This company focuses on creating high-quality 
   and eco-friendly products that cater to the diverse needs of customers across Africa.The company sources
   its raw materials locally to support the African economy and uses traditional African scents 
   and ingredients, such as frankincense, myrrh, and baobab oil, to give its products a unique and authentic 
   African touch. We also invests in research and development to create new and innovative products that meet
     the changing tastes and preferences of its customers.

     To ensure quality, the company uses natural ingredients and avoids harsh chemicals that may be harmful
      to the environment or human health.Wealso conducts regular quality control checks to ensure that our
       products meet international standards.
  "
   dishes={[]}
   long={20}
   lat={0}
   
   />

<RestaurantCard
   id={1263}
   imgUrl="http://34.170.204.224/kitchen4.jpg"
   name='Exciting Kitchen ware'
   title='Exciting Kitchen ware'
   rating={3.5}
   genre="Kitchen Ware"
   address="Magadi Road"
   short_description="Exciting Kitchen ware specializes in the production, 
   distribution, and sale of kitchen equipment and accessories. 
   We offer a variety of kitchen products including cookware, bakeware, cutlery, utensils, 
   kitchen gadgets, and appliances.We also specialize in the production of kitchen ware products that 
   are unique to certain regions or 
   cultures.We offer traditional cooking utensils used in African cuisine such as clay pots, calabashes, 
   and wooden spoons.
    
  "
   dishes={[]}
   long={20}
   lat={0}
   
   />
  
      </ScrollView>
    </View>
  )
}

export default FeaturedRow
