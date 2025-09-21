/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
/* tslint:disable */

export interface Subject {
  title: string;
  imageUrl: string;
}

export interface SubjectCategory {
  categoryTitle: string;
  subjects: Subject[];
}

export const categories: SubjectCategory[] = [
  {
    categoryTitle: 'Engineering and Computing',
    subjects: [
      {
        title: 'Artificial Intelligence',
        imageUrl:
          'https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Bioengineering',
        imageUrl:
          'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Chemical and Biomolecular Engineering',
        imageUrl:
          'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Civil and Environmental Engineering',
        imageUrl:
          'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Computational Applied Mathematics and Operations Research',
        imageUrl:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Computer Science',
        imageUrl:
          'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Data Science',
        imageUrl:
          'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Electrical and Computer Engineering',
        imageUrl:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Energy and Water Sustainability',
        imageUrl:
          'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Engineering Design',
        imageUrl:
          'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Engineering Leadership',
        imageUrl:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Financial Computation and Modeling',
        imageUrl:
          'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Global Health Technologies',
        imageUrl:
          'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Materials Science and NanoEngineering',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/5/59/Materials_science_tetrahedron%3Bstructure%2C_processing%2C_performance%2C_and_proprerties.svg',
      },
      {
        title: 'Mechanical Engineering',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/2/2b/Mechanical_components.png',
      },
      {
        title: 'Statistics',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Fisher_iris_versicolor_sepalwidth.svg/2560px-Fisher_iris_versicolor_sepalwidth.svg.png',
      },
    ],
  },
  {
    categoryTitle: 'Humanities',
    subjects: [
      {
        title: 'African and African American Studies',
        imageUrl:
          'https://aaas.fas.harvard.edu/sites/g/files/omnuum8896/files/styles/hwp_1_1__720x720_scale/public/aaas/files/courses_resized.jpg?itok=RR3_Lvfv',
      },
      {
        title: 'Ancient Mediterranean Civilizations',
        imageUrl:
          'https://humanistic-europe.com/wp-content/uploads/2021/10/ha-1024x718.jpg',
      },
      {
        title: 'Art',
        imageUrl:
          'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Art History',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6iKPdKFNOlLalbNMgKD6O-_U8SUdfe2uUDoEW4msUgl78gfBWmg-WAR9H_mIgWg72nO0IXkP0VYpBIHPQClcT1o5PZS3aB4jujXsq0w',
      },
      {
        title: 'Asian Studies',
        imageUrl:
          'https://th.bing.com/th/id/R.d3836eca32e0844082f94f4a760cd955?rik=BbQuaRNt1HPIPQ&pid=ImgRaw&r=0',
      },
      {
        title: 'Classical Civilizations',
        imageUrl:
          'https://www.shutterstock.com/image-photo/ruins-ancient-greek-temple-parthenon-600nw-2383537395.jpg',
      },
      {
        title: 'Classical Studies',
        imageUrl:
          'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Creative Writing',
        imageUrl:
          'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'English',
        imageUrl:
          'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Environmental Studies',
        imageUrl:
          'https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'European Studies',
        imageUrl:
          'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'French Studies',
        imageUrl:
          'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'German Studies',
        imageUrl:
          'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Greek Language and Literature',
        imageUrl:
          'https://classics.pitt.edu/sites/default/files/inline-images/Greek%202_0.jpg',
      },
      {
        title: 'History',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Carstian_Luyckx_-_Still_life_with_a_globe%2C_books%2C_shells_and_corals_resting_on_a_stone_ledge.jpg/500px-Carstian_Luyckx_-_Still_life_with_a_globe%2C_books%2C_shells_and_corals_resting_on_a_stone_ledge.jpg',
      },
      {
        title: 'Jewish Studies',
        imageUrl:
          'https://jewishstudies.yale.edu/sites/default/files/2025-04/1016538.jpg',
      },
      {
        title: 'Languages and Intercultural Communication',
        imageUrl:
          'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noouH_Oct70p1Vg0MF10o47zORi1DUaVLhOxZf0tlOwjzNpBz9N6yhxrktTK7yE2sJ4CpeercRgAfbmCFxJa8yDj8KxaI3oUOtNgyGcu8RTvCSJ5vMsOecrUAo-YMmOzaQ5zUCV-g=w270-h312-n-k-no',
      },
      {
        title: 'Latin American and Latinx Studies',
        imageUrl:
          'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Latin Language and Literature',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/8/85/Virgilio.png',
      },
      {
        title: 'Media Studies',
        imageUrl:
          'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Medical Humanities',
        imageUrl:
          'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Medieval and Early Modern Studies',
        imageUrl:
          'https://minio.la.utexas.edu/colaweb-prod/medievalstudies/1375_atlas_catalan_abraham_cresques_contrast_2922_2922_NDExYQ.jpg',
      },
      {
        title: 'Modern and Classical Languages, Literatures, and Cultures',
        imageUrl:
          'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRNaW7GRJucYZH4ol3X4ryhumHOUJ6W_mAev-Jv28DnH0rsPF9yp30mMJ6LoBTXnMTrvF8-YDcceDUtjrF1qnX-6_lP58L6dW128HCoR2Y',
      },
      {
        title: 'Museums and Cultural Heritage',
        imageUrl:
          'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRmuG22TnEaRNt3TWFtvjqFtss8b9WxZDXhp6f3CewXwk3ix_GaP7FzpL5YvEuVdbSnHWEEJHS3PAiRTr2VeNXTW_7CMhZ79s40lAxj9b5m',
      },
      {
        title: 'Philosophy',
        imageUrl:
          'https://www.templeton.org/wp-content/uploads/2024/05/Armchair-Philosophy-1.jpg',
      },
      {
        title: 'Politics, Law, and Social Thought',
        imageUrl:
          'https://sageuniversity.edu.in/assets/images/blog/why-study-political-science-at-sage-university.jpg',
      },
      {
        title: 'Religion',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/3/36/Religious_symbols_collage.png',
      },
      {
        title: 'Science and Technology Studies',
        imageUrl:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Spanish and Portuguese',
        imageUrl:
          'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Study of Women, Gender and Sexuality',
        imageUrl:
          'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTZyNX_Ad3eXjJ4yKojfZrBGJd0r6nzdMAJaYYXwNRxCqMKGMUciQcGvpq9m9RqHzjlLM7MvLPfu8itrLDbmK_jvcjrWGqtQtYoYuk6CQ',
      },
      {
        title: 'Theatre',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bernhardt_Hamlet2.jpg/330px-Bernhardt_Hamlet2.jpg',
      },
    ],
  },
  {
    categoryTitle: 'Natural Sciences',
    subjects: [
      {
        title: 'Astronomy',
        imageUrl:
          'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Astrophysics',
        imageUrl:
          'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Biochemistry and Cell Biology',
        imageUrl:
          'https://els-jbs-prod-cdn.jbs.elsevierhealth.com/cms/asset/atypon:cms:attachment:img:d37e6:rev:1649284879506-2357:pii:S2451945621X00049/cover.tif.jpg',
      },
      {
        title: 'Biosciences',
        imageUrl:
          'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Chemical Physics',
        imageUrl:
          'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Chemistry',
        imageUrl:
          'https://images.unsplash.com/photo-1564325724739-bae0bd08762c?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Earth, Environmental and Planetary Sciences',
        imageUrl:
          'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Ecology and Evolutionary Biology',
        imageUrl:
          'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Environmental Science',
        imageUrl:
          'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Health Sciences',
        imageUrl:
          'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Kinesiology',
        imageUrl:
          'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Mathematics',
        imageUrl:
          'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Neuroscience',
        imageUrl:
          'https://www.simplypsychology.org/wp-content/uploads/Neuroscience-1536x1213.jpeg',
      },
      {
        title: 'Physics and Astronomy',
        imageUrl:
          'https://images.unsplash.com/photo-1564325724739-bae0bd08762c?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Sports Medicine and Exercise Physiology',
        imageUrl:
          'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&auto=format&fit=crop',
      },
    ],
  },
  {
    categoryTitle: 'Social Sciences',
    subjects: [
      {
        title: 'Anthropology',
        imageUrl:
          'https://tse3.mm.bing.net/th/id/OIP.Z7SicdXFDB9ut4YB6EIpwQHaD8?rs=1&pid=ImgDetMain&o=7&rm=3',
      },
      {
        title: 'Cognitive Sciences',
        imageUrl:
          'https://tse1.mm.bing.net/th/id/OIP.y2GLIMYELneiTQNwtssrOAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
      },
      {
        title: 'Economics',
        imageUrl:
          'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Global Affairs',
        imageUrl:
          'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Linguistics',
        imageUrl:
          'https://tse1.mm.bing.net/th/id/OIP.wyKV-8lA81JAQbLzuZAhuwHaEP?rs=1&pid=ImgDetMain&o=7&rm=3',
      },
      {
        title: 'Managerial Economics and Organizational Sciences',
        imageUrl:
          'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Mathematical Economic Analysis',
        imageUrl:
          'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Political Science',
        imageUrl:
          'https://images.unsplash.com/photo-1541845157-a6d2d100c931?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Psychological Sciences',
        imageUrl:
          'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Social Policy Analysis',
        imageUrl:
          'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Sociology',
        imageUrl:
          'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Sport Analytics',
        imageUrl:
          'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Sport Management',
        imageUrl:
          'https://www.stu.edu/news/wp-content/uploads/2020/08/what-is-sports-management-1-min.jpg',
      },
    ],
  },
];
