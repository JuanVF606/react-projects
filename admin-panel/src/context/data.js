// src/data.js
const toursData = [
  // Enero
  { id: 1, name: "Ski Adventure", description: "Enjoy skiing in the beautiful mountains.", date: "2024-01-05", location: "Mountain Resort", price: 100, image: "https://img.freepik.com/foto-gratis/esquiando_23-2148507234.jpg?w=1380" },
  { id: 2, name: "New Year City Tour", description: "Celebrate the New Year in the city.", date: "2024-01-10", location: "City Center", price: 30, image: "https://img.freepik.com/foto-gratis/vista-ciudad_23-2148517804.jpg?w=1380" },
  { id: 3, name: "Winter Wildlife Tour", description: "Discover wildlife in winter.", date: "2024-01-20", location: "Nature Reserve", price: 80, image: "https://img.freepik.com/foto-gratis/fauna_23-2148503245.jpg?w=1380" },

  // Febrero
  { id: 4, name: "Valentine's Day Tour", description: "Romantic city tour for couples.", date: "2024-02-14", location: "Romantic District", price: 50, image: "https://img.freepik.com/foto-gratis/cita-romantica_23-2148476767.jpg?w=1380" },
  { id: 5, name: "Historical Landmarks Tour", description: "Explore the city's rich history.", date: "2024-02-20", location: "Historical Center", price: 25, image: "https://img.freepik.com/foto-gratis/lugares-historicos_23-2148892040.jpg?w=1380" },
  { id: 6, name: "Beach Getaway", description: "Relax at the beautiful beach.", date: "2024-02-28", location: "Sunny Beach", price: 40, image: "https://img.freepik.com/foto-gratis/playa-bahia_23-2148961342.jpg?w=1380" },

  // Marzo
  { id: 7, name: "Spring Blossom Tour", description: "Enjoy the blooming flowers in spring.", date: "2024-03-10", location: "Flower Garden", price: 35, image: "https://img.freepik.com/foto-gratis/jardin-blooms_23-2148532231.jpg?w=1380" },
  { id: 8, name: "Adventure Sports Tour", description: "Engage in thrilling adventure sports.", date: "2024-03-15", location: "Adventure Park", price: 80, image: "https://img.freepik.com/foto-gratis/aventura_23-2148788926.jpg?w=1380" },
  { id: 9, name: "Cultural Festival Tour", description: "Experience local culture and festivals.", date: "2024-03-20", location: "Cultural Center", price: 45, image: "https://img.freepik.com/foto-gratis/festival-cultural_23-2148503221.jpg?w=1380" },

  // Abril
  { id: 10, name: "Easter Egg Hunt Tour", description: "Fun activities for families during Easter.", date: "2024-04-05", location: "Community Park", price: 20, image: "https://img.freepik.com/foto-gratis/caza-huevos-pascua_23-2148517555.jpg?w=1380" },
  { id: 11, name: "Wildflower Hiking Tour", description: "Hike through beautiful wildflower trails.", date: "2024-04-10", location: "Hiking Trail", price: 50, image: "https://img.freepik.com/foto-gratis/sendero-natural_23-2148659076.jpg?w=1380" },
  { id: 12, name: "Historical Reenactment Tour", description: "Experience history come to life.", date: "2024-04-15", location: "Historical Site", price: 60, image: "https://img.freepik.com/foto-gratis/recreacion-historica_23-2148566812.jpg?w=1380" },

  // Mayo
  { id: 13, name: "Mother's Day Spa Tour", description: "Pamper your mom with a spa day.", date: "2024-05-10", location: "Spa Center", price: 100, image: "https://img.freepik.com/foto-gratis/spa_23-2148479184.jpg?w=1380" },
  { id: 14, name: "Mountain Biking Adventure", description: "Explore the mountains on a bike.", date: "2024-05-15", location: "Mountain Base", price: 75, image: "https://img.freepik.com/foto-gratis/ciclismo-montana_23-2148714304.jpg?w=1380" },
  { id: 15, name: "Food Festival Tour", description: "Taste delicious local foods.", date: "2024-05-20", location: "Food Market", price: 40, image: "https://img.freepik.com/foto-gratis/festival-comida_23-2148477310.jpg?w=1380" },

  // Junio
  { id: 16, name: "Summer Beach Party", description: "Enjoy summer activities at the beach.", date: "2024-06-01", location: "Sunny Beach", price: 50, image: "https://img.freepik.com/foto-gratis/playa_23-2148512645.jpg?w=1380" },
  { id: 17, name: "Wildlife Safari", description: "Discover wildlife in its natural habitat.", date: "2024-06-10", location: "Safari Park", price: 100, image: "https://img.freepik.com/foto-gratis/safari_23-2148613290.jpg?w=1380" },
  { id: 18, name: "Music Festival Tour", description: "Experience live music and festivities.", date: "2024-06-20", location: "Concert Venue", price: 70, image: "https://img.freepik.com/foto-gratis/festival-musica_23-2148514754.jpg?w=1380" },

  // Julio
  { id: 19, name: "Summer Hiking Tour", description: "Explore scenic hiking trails in summer.", date: "2024-07-05", location: "National Park", price: 60, image: "https://img.freepik.com/foto-gratis/sendero-hiking_23-2148714305.jpg?w=1380" },
  { id: 20, name: "Family Fun Day", description: "A day of fun activities for families.", date: "2024-07-10", location: "Family Park", price: 30, image: "https://img.freepik.com/foto-gratis/familia-actividades_23-2148523298.jpg?w=1380" },
  { id: 21, name: "Art and Craft Tour", description: "Create your own art in this interactive tour.", date: "2024-07-15", location: "Art Studio", price: 40, image: "https://img.freepik.com/foto-gratis/taller-arte_23-2148482276.jpg?w=1380" },

  // Agosto
  { id: 22, name: "Adventure Water Sports", description: "Enjoy thrilling water sports activities.", date: "2024-08-01", location: "Water Sports Center", price: 90, image: "https://img.freepik.com/foto-gratis/deportes-agua_23-2148537632.jpg?w=1380" },
  { id: 23, name: "Summer Camp Tour", description: "Fun activities at summer camp.", date: "2024-08-10", location: "Summer Camp", price: 100, image: "https://img.freepik.com/foto-gratis/campamento_23-2148517218.jpg?w=1380" },
  { id: 24, name: "Cultural Heritage Tour", description: "Learn about local culture and history.", date: "2024-08-20", location: "Cultural Center", price: 30, image: "https://img.freepik.com/foto-gratis/patrimonio-cultural_23-2148511269.jpg?w=1380" },

  // Septiembre
  { id: 25, name: "Harvest Festival Tour", description: "Celebrate the harvest season with local food.", date: "2024-09-15", location: "Farm", price: 40, image: "https://img.freepik.com/foto-gratis/festival-cosecha_23-2148503267.jpg?w=1380" },
  { id: 26, name: "Wildlife Conservation Tour", description: "Learn about wildlife conservation efforts.", date: "2024-09-20", location: "Wildlife Center", price: 60, image: "https://img.freepik.com/foto-gratis/conservacion-vida-salvaje_23-2148512722.jpg?w=1380" },
  { id: 27, name: "Outdoor Adventure Tour", description: "Engage in outdoor activities.", date: "2024-09-25", location: "Adventure Park", price: 50, image: "https://img.freepik.com/foto-gratis/aventura-exterior_23-2148657498.jpg?w=1380" },

  // Octubre
  { id: 28, name: "Halloween Spooky Tour", description: "A spooky tour for Halloween.", date: "2024-10-31", location: "Haunted House", price: 20, image: "https://img.freepik.com/foto-gratis/halloween_23-2148505650.jpg?w=1380" },
  { id: 29, name: "Fall Foliage Tour", description: "Experience the beauty of fall colors.", date: "2024-10-15", location: "Scenic Park", price: 35, image: "https://img.freepik.com/foto-gratis/hojas-otoño_23-2148613271.jpg?w=1380" },
  { id: 30, name: "Oktoberfest Tour", description: "Enjoy beer and festivities at Oktoberfest.", date: "2024-10-05", location: "Beer Garden", price: 50, image: "https://img.freepik.com/foto-gratis/fiesta-cerveza_23-2148657424.jpg?w=1380" },

  // Noviembre
  { id: 31, name: "Thanksgiving Tour", description: "Celebrate Thanksgiving with local traditions.", date: "2024-11-25", location: "Community Center", price: 40, image: "https://img.freepik.com/foto-gratis/accion-gracias_23-2148512190.jpg?w=1380" },
  { id: 32, name: "Winter Preparation Tour", description: "Learn how to prepare for winter.", date: "2024-11-15", location: "Local Farm", price: 30, image: "https://img.freepik.com/foto-gratis/preparacion-invierno_23-2148512145.jpg?w=1380" },
  { id: 33, name: "Holiday Shopping Tour", description: "Shop for the holidays in a festive atmosphere.", date: "2024-11-30", location: "Shopping Mall", price: 50, image: "https://img.freepik.com/foto-gratis/compras-vacaciones_23-2148714307.jpg?w=1380" },

  // Diciembre
  { id: 34, name: "Christmas Market Tour", description: "Visit local Christmas markets.", date: "2024-12-10", location: "City Square", price: 25, image: "https://img.freepik.com/foto-gratis/mercado-navidad_23-2148516131.jpg?w=1380" },
  { id: 35, name: "New Year's Eve Tour", description: "Celebrate New Year's Eve with festivities.", date: "2024-12-31", location: "City Center", price: 100, image: "https://img.freepik.com/foto-gratis/nochevieja_23-2148476748.jpg?w=1380" },
  { id: 36, name: "Holiday Lights Tour", description: "Experience beautiful holiday lights around the city.", date: "2024-12-15", location: "City Center", price: 30, image: "https://img.freepik.com/foto-gratis/luz-navidad_23-2148476702.jpg?w=1380" },
];

// src/reservations.js
const reservationsData = [
  // Enero
  { id: 1, name: "Maria Lopez", email: "maria@example.com", guests: 3, tourId: 1, tourName: "Ski Adventure", totalAmount: 300 },
  { id: 2, name: "Juan Perez", email: "juan@example.com", guests: 2, tourId: 2, tourName: "New Year City Tour", totalAmount: 60 },
  { id: 3, name: "Sofia Torres", email: "sofia@example.com", guests: 1, tourId: 3, tourName: "Winter Wildlife Tour", totalAmount: 80 },
  { id: 4, name: "Carlos Mendez", email: "carlos@example.com", guests: 4, tourId: 1, tourName: "Ski Adventure", totalAmount: 400 },
  { id: 5, name: "Ana Ruiz", email: "ana@example.com", guests: 3, tourId: 2, tourName: "New Year City Tour", totalAmount: 90 },

  // Febrero
  { id: 6, name: "Luis Garcia", email: "luis@example.com", guests: 2, tourId: 4, tourName: "Valentine's Day Tour", totalAmount: 100 },
  { id: 7, name: "Claudia Gomez", email: "claudia@example.com", guests: 2, tourId: 5, tourName: "Historical Landmarks Tour", totalAmount: 50 },
  { id: 8, name: "Fernando Castro", email: "fernando@example.com", guests: 1, tourId: 6, tourName: "Beach Getaway", totalAmount: 40 },
  { id: 9, name: "Laura Jimenez", email: "laura@example.com", guests: 5, tourId: 4, tourName: "Valentine's Day Tour", totalAmount: 250 },
  { id: 10, name: "Miguel Herrera", email: "miguel@example.com", guests: 4, tourId: 5, tourName: "Historical Landmarks Tour", totalAmount: 100 },

  // Marzo
  { id: 11, name: "Diego Morales", email: "diego@example.com", guests: 3, tourId: 7, tourName: "Spring Blossom Tour", totalAmount: 105 },
  { id: 12, name: "Isabel Vargas", email: "isabel@example.com", guests: 2, tourId: 8, tourName: "Adventure Sports Tour", totalAmount: 160 },
  { id: 13, name: "Alberto Santos", email: "alberto@example.com", guests: 1, tourId: 9, tourName: "Cultural Festival Tour", totalAmount: 45 },
  { id: 14, name: "Renata Nunez", email: "renata@example.com", guests: 5, tourId: 7, tourName: "Spring Blossom Tour", totalAmount: 175 },
  { id: 15, name: "Cristina Reyes", email: "cristina@example.com", guests: 4, tourId: 8, tourName: "Adventure Sports Tour", totalAmount: 320 },

  // Abril
  { id: 16, name: "Hugo Cordero", email: "hugo@example.com", guests: 3, tourId: 10, tourName: "Easter Egg Hunt Tour", totalAmount: 60 },
  { id: 17, name: "Patricia Ortega", email: "patricia@example.com", guests: 5, tourId: 11, tourName: "Wildflower Hiking Tour", totalAmount: 250 },
  { id: 18, name: "Nicolas Jimenez", email: "nicolas@example.com", guests: 2, tourId: 12, tourName: "Historical Reenactment Tour", totalAmount: 120 },
  { id: 19, name: "Alma Salinas", email: "alma@example.com", guests: 1, tourId: 10, tourName: "Easter Egg Hunt Tour", totalAmount: 20 },
  { id: 20, name: "Elena Moreno", email: "elena@example.com", guests: 4, tourId: 12, tourName: "Historical Reenactment Tour", totalAmount: 240 },

  // Mayo
  { id: 21, name: "Julio Alvarado", email: "julio@example.com", guests: 3, tourId: 13, tourName: "Mother's Day Spa Tour", totalAmount: 300 },
  { id: 22, name: "Rosa Herrera", email: "rosa@example.com", guests: 2, tourId: 14, tourName: "Mountain Biking Adventure", totalAmount: 150 },
  { id: 23, name: "Marco Araujo", email: "marco@example.com", guests: 1, tourId: 15, tourName: "Food Festival Tour", totalAmount: 40 },
  { id: 24, name: "Valentina Cruz", email: "valentina@example.com", guests: 5, tourId: 13, tourName: "Mother's Day Spa Tour", totalAmount: 500 },
  { id: 25, name: "Esteban Salas", email: "esteban@example.com", guests: 4, tourId: 14, tourName: "Mountain Biking Adventure", totalAmount: 600 },

  // Junio
  { id: 26, name: "Santiago Romero", email: "santiago@example.com", guests: 2, tourId: 16, tourName: "Summer Beach Tour", totalAmount: 120 },
  { id: 27, name: "Andrea Martinez", email: "andrea@example.com", guests: 3, tourId: 17, tourName: "Wildlife Safari", totalAmount: 180 },
  { id: 28, name: "Daniela Lopez", email: "daniela@example.com", guests: 1, tourId: 18, tourName: "Outdoor Adventure Tour", totalAmount: 50 },
  { id: 29, name: "Carlos Mendoza", email: "carlos@example.com", guests: 4, tourId: 16, tourName: "Summer Beach Tour", totalAmount: 240 },
  { id: 30, name: "Gabriela Torres", email: "gabriela@example.com", guests: 5, tourId: 17, tourName: "Wildlife Safari", totalAmount: 900 },

  // Julio
  { id: 31, name: "Ana Maria", email: "ana@example.com", guests: 3, tourId: 19, tourName: "Summer Adventure", totalAmount: 150 },
  { id: 32, name: "Ricardo Salazar", email: "ricardo@example.com", guests: 2, tourId: 20, tourName: "Coastal Exploration", totalAmount: 100 },
  { id: 33, name: "Javier Silva", email: "javier@example.com", guests: 1, tourId: 21, tourName: "Historical City Tour", totalAmount: 40 },
  { id: 34, name: "Mariana Castillo", email: "mariana@example.com", guests: 4, tourId: 19, tourName: "Summer Adventure", totalAmount: 600 },
  { id: 35, name: "Fernando Paredes", email: "fernando@example.com", guests: 5, tourId: 20, tourName: "Coastal Exploration", totalAmount: 500 },

  // Agosto
  { id: 36, name: "Laura Medina", email: "laura@example.com", guests: 3, tourId: 22, tourName: "Beach Volleyball Tournament", totalAmount: 150 },
  { id: 37, name: "Miguel Vargas", email: "miguel@example.com", guests: 2, tourId: 23, tourName: "Outdoor Movie Night", totalAmount: 60 },
  { id: 38, name: "Sofia Ramirez", email: "sofia@example.com", guests: 1, tourId: 24, tourName: "Food Tasting Tour", totalAmount: 30 },
  { id: 39, name: "Carlos Herrera", email: "carlos@example.com", guests: 4, tourId: 22, tourName: "Beach Volleyball Tournament", totalAmount: 600 },
  { id: 40, name: "Estela Gonzalez", email: "estela@example.com", guests: 5, tourId: 23, tourName: "Outdoor Movie Night", totalAmount: 300 },

  // Septiembre
  { id: 41, name: "Felipe Castro", email: "felipe@example.com", guests: 2, tourId: 25, tourName: "Back to School Tour", totalAmount: 80 },
  { id: 42, name: "Clara Mendoza", email: "clara@example.com", guests: 3, tourId: 26, tourName: "Nature Walk Tour", totalAmount: 120 },
  { id: 43, name: "Victor Ruiz", email: "victor@example.com", guests: 1, tourId: 27, tourName: "Outdoor Adventure Tour", totalAmount: 50 },
  { id: 44, name: "Isabel Torres", email: "isabel@example.com", guests: 4, tourId: 25, tourName: "Back to School Tour", totalAmount: 320 },
  { id: 45, name: "Nicolas Castro", email: "nicolas@example.com", guests: 5, tourId: 26, tourName: "Nature Walk Tour", totalAmount: 300 },

  // Octubre
  { id: 46, name: "Maria Gonzalez", email: "maria@example.com", guests: 2, tourId: 28, tourName: "Halloween Spooky Tour", totalAmount: 40 },
  { id: 47, name: "Ricardo Morales", email: "ricardo@example.com", guests: 3, tourId: 29, tourName: "Fall Foliage Tour", totalAmount: 105 },
  { id: 48, name: "Patricia Cordero", email: "patricia@example.com", guests: 1, tourId: 30, tourName: "Oktoberfest Tour", totalAmount: 50 },
  { id: 49, name: "Javier Alvarado", email: "javier@example.com", guests: 4, tourId: 28, tourName: "Halloween Spooky Tour", totalAmount: 80 },
  { id: 50, name: "Claudia Salazar", email: "claudia@example.com", guests: 5, tourId: 29, tourName: "Fall Foliage Tour", totalAmount: 175 },

  // Noviembre
  { id: 51, name: "Alejandro Salas", email: "alejandro@example.com", guests: 3, tourId: 31, tourName: "Thanksgiving Tour", totalAmount: 120 },
  { id: 52, name: "Valeria Ramos", email: "valeria@example.com", guests: 2, tourId: 32, tourName: "Winter Preparation Tour", totalAmount: 60 },
  { id: 53, name: "Fernando Cifuentes", email: "fernando@example.com", guests: 1, tourId: 33, tourName: "Holiday Shopping Tour", totalAmount: 50 },
  { id: 54, name: "Laura Valdez", email: "laura@example.com", guests: 4, tourId: 31, tourName: "Thanksgiving Tour", totalAmount: 240 },
  { id: 55, name: "Miguel Munoz", email: "miguel@example.com", guests: 5, tourId: 32, tourName: "Winter Preparation Tour", totalAmount: 300 },

  // Diciembre
  { id: 56, name: "Sofia Mendez", email: "sofia@example.com", guests: 3, tourId: 34, tourName: "Christmas Market Tour", totalAmount: 75 },
  { id: 57, name: "Carlos Vargas", email: "carlos@example.com", guests: 2, tourId: 35, tourName: "New Year's Eve Tour", totalAmount: 200 },
  { id: 58, name: "Patricia Gomez", email: "patricia@example.com", guests: 1, tourId: 36, tourName: "Holiday Lights Tour", totalAmount: 30 },
  { id: 59, name: "Javier Torres", email: "javier@example.com", guests: 4, tourId: 34, tourName: "Christmas Market Tour", totalAmount: 100 },
  { id: 60, name: "Ana Torres", email: "ana@example.com", guests: 5, tourId: 35, tourName: "New Year's Eve Tour", totalAmount: 500 },
];



export { toursData, reservationsData };