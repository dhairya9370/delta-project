
const properties = [
  {
    title: "Shanti Ghar",
    description: "A quiet and peaceful place to rest",
    price: 5100,
    location: "Ayodhya",
    country: "India",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    reviews: [],
    owner:"685192ec14cf815db1ff2172"
  },
  {
    title: "Sukh Niwas",
    description: "A happy home filled with calm and comfort",
    price: 4200,
    location: "Chitrakoot",
    country: "India",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    reviews: [],
    owner:"685192ec14cf815db1ff2172"
  },
  {
    title: "Prem Residency",
    description: "A small home full of love and care",
    price: 3700,
    location: "Nashik",
    country: "India",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    reviews: [],
    owner:"685192ec14cf815db1ff2172"
  },
  {
    title: "Satya Sadan",
    description: "A simple place that speaks truth and peace",
    price: 3400,
    location: "Janakpur",
    country: "India",
        image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    reviews: [],
    owner:"685192ec14cf815db1ff2172"
  },
  {
    title: "Daya Bhavan",
    description: "A home where kindness lives",
    price: 4600,
    location: "Lucknow",
    country: "India",
        image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    reviews: [],
    owner:"685192ec14cf815db1ff2172"
  },
  {
    title: "Gyaan Kutir",
    description: "A place for thoughts, learning and silence",
    price: 3900,
    location: "Prayagraj",
    country: "India",
        image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    reviews: [],
    owner:"685192ec14cf815db1ff2172"
  },
  {
    title: "Prakash Heights",
    description: "A bright and open space full of light",
    price: 5000,
    location: "Sri Lanka",
    country: "India",
        image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    reviews: [],
    owner:"685192ec14cf815db1ff2172"
  },
  {
    title: "Vishwas Niwas",
    description: "A place built with trust and hope",
    price: 3100,
    location: "Rameswaram",
    country: "India",
        image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    reviews: [],
    owner:"685192ec14cf815db1ff2172"
  },
  {
    title: "Suraj Hotels",
    description: "A home that connects hearts",
    price: 4200,
    location: "Dhanushkodi",
    country: "India",
        image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    reviews: [],
    owner:"685192ec14cf815db1ff2172"
  },
  {
    title: "Shanti Sadan",
    description: "A peaceful home where help is given with love",
    price: 2800,
    location: "Saran",
    country: "India",
        image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    reviews: [],
    owner:"685192ec14cf815db1ff2172"
  },
  {
    title: "Pushpak Vatika",
    description: "A sweet and simple place for joy and play",
    price: 3600,
    location: "Rajapur",
    country: "India",
        image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    reviews: [],
    owner:"685192ec14cf815db1ff2172"
  },
  {
    title: "Shraddha Residency",
    description: "A hut of respect and quietness",
    price: 3300,
    location: "Nandigram",
    country: "India",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    reviews: [],
    owner:"685190894244d3d37fd2689a"
  },
  {
    title: "Veer Niwas",
    description: "A strong and peaceful house for brave hearts",
    price: 4000,
    location: "Sitamarhi",
    country: "India",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    reviews: [],
    owner:"685190894244d3d37fd2689a"
  },
  {
    title: "Maryada Heights",
    description: "A home of discipline and peace",
    price: 4800,
    location: "Kashi",
    country: "India",
        image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    reviews: [],
    owner:"685190894244d3d37fd2689a"
  },
  {
    title: "Udaan Heights",
    description: "A place that lifts your dreams up",
    price: 5500,
    location: "Kanpur",
    country: "India",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    reviews: [],
    owner:"685190894244d3d37fd2689a"
  },
  {
    title: "Mantra Niwas",
    description: "A calm home with peaceful chants",
    price: 2700,
    location: "Faizabad",
    country: "India",
    reviews: [],
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    owner:"685190894244d3d37fd2689a"
  },
  {
    title: "Bhavya Ghiha",
    description: "A space full of feelings and silence",
    price: 2400,
    location: "Dandakaranya",
    country: "India",
    reviews: [],
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    owner:"685190894244d3d37fd2689a"
  },
  {
    title: "Tanuj Kutir",
    description: "A quiet hut for meditation and peace",
    price: 3200,
    location: "Tapovan",
    country: "India",
    reviews: [],
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    owner:"685190894244d3d37fd2689a"
  },
  {
    title: "Smriti Niwas",
    description: "A sweet home of old memories and joy",
    price: 3700,
    location: "Banaras",
    country: "India",
    reviews: [],
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    owner:"685190894244d3d37fd2689a"
  },
  {
    title: "Prakriti Niwas",
    description: "A natural home close to trees and wind",
    price: 2600,
    location: "Bastar",
    country: "India",
    reviews: [],
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    owner:"685190894244d3d37fd2689a"
  }
];

module.exports={data:properties};